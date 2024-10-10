import { getCryptoStats, getCryptoDeviation } from '../services/cryptoService.js';

export const getCryptoStatsController = async (req, res) => {
  const { coin } = req.query;
  try {
    const stats = await getCryptoStats(coin);
    if (!stats) {
      return res.status(404).json({ error: 'Data not found' });
    }
    res.json(stats);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getCryptoDeviationController = async (req, res) => {
  const { coin } = req.query;
  if (!coin) {
    return res.status(400).json({ error: 'Enter valid coin name' });
  }
  try {
    const deviation = await getCryptoDeviation(coin);
    res.json({ deviation: deviation.toFixed(2) });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};