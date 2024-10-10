const axios = require('axios');
const schedule = require('node-schedule');
const CryptoData = require('../models/CryptoData');

const COINS = ['bitcoin', 'matic-network', 'ethereum'];
const API_URL = 'https://api.coingecko.com/api/v3/simple/price';

async function fetchData() {
  try {
    const response = await axios.get(API_URL, {
      params: {
        ids: COINS.join(','),
        vs_currencies: 'usd',
        include_market_cap: true,
        include_24hr_change: true
      }
    });

    const data = response.data;
    
    for (const coin of COINS) {
      await CryptoData.create({
        coin,
        price: data[coin].usd,
        marketCap: data[coin].usd_market_cap,
        change24h: data[coin].usd_24h_change
      });
    }

    console.log('Crypto data fetched and stored successfully');
  } catch (error) {
    console.error('Error fetching crypto data:', error);
  }
}

const job = schedule.scheduleJob('0 */2 * * *', fetchData);

module.exports = {
  start: () => {
    console.log('Background job started');
    fetchData(); // Run immediately on start
  },
  stop: () => {
    job.cancel();
    console.log('Background job stopped');
  }
};