import { getCachedData, setCachedData } from './cacheService.js';
import fetchCryptoData from '../api/fetchCryptoData.js';
import Price from '../models/CryptoPrice.js';
import { calculateStandardDeviation } from '../utils/mathUtils.js';

export const updateCryptoData = async () => {
  try {
    const data = await fetchCryptoData();
    await setCachedData('latestCryptoData', data);
    return data;
  } catch (error) {
    console.error('Error updating crypto data:', error);
    throw error;
  }
};

export const getCryptoStats = async (coin) => {
  try {
    const cachedData = await getCachedData('latestCryptoData');
    if (cachedData) {
      const coinData = cachedData.find(c => c.name.toLowerCase() === coin.toLowerCase());
      if (coinData) {
        return {
          price: coinData.price,
          market_cap: coinData.market_cap,
          "24hChange": coinData.change_24h
        };
      }
    }
    return null;
  } catch (error) {
    console.error('Error getting crypto stats:', error);
    throw error;
  }
};

export const getCryptoDeviation = async (coin) => {
  try {
    const prices = await Price.find({ coin }).sort({ timestamp: -1 }).limit(100).select('price');
    const priceList = prices.map(record => record.price);
    return calculateStandardDeviation(priceList);
  } catch (error) {
    console.error('Error getting crypto deviation:', error);
    throw error;
  }
};