const cryptoService = require('../services/cryptoService');

exports.getStats = async (req, res) => {
  try {
    const { coin } = req.query;
    const stats = await cryptoService.getLatestStats(coin);
    cosole.log(stats);
        res.json(stats);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getDeviation = async (req, res) => {
  try {
    const { coin } = req.query;
    const deviation = await cryptoService.getStandardDeviation(coin);
    res.json({ deviation });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};