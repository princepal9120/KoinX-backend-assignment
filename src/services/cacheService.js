import memjs from 'memjs';

const MEMCACHE_SERVER = process.env.MEMCACHE_SERVER || '127.0.0.1:11211';
const memcachedClient = memjs.Client.create(MEMCACHE_SERVER);

export const getCachedData = (key) => {
  return new Promise((resolve, reject) => {
    memcachedClient.get(key, (err, val) => {
      if (err) {
        reject(err);
      } else if (val) {
        resolve(JSON.parse(val.toString()));
      } else {
        resolve(null);
      }
    });
  });
};

export const setCachedData = (key, data, expiresIn = 7200) => {
  return new Promise((resolve, reject) => {
    const jsonData = JSON.stringify(data);
    memcachedClient.set(key, jsonData, { expires: expiresIn }, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};