export const calculateStandardDeviation = (prices) => {
    const n = prices.length;
    if (n === 0) return 0;
    const mean = prices.reduce((acc, price) => acc + price, 0) / n;
    const variance = prices.reduce((acc, price) => acc + Math.pow(price - mean, 2), 0) / n;
    return Math.sqrt(variance);
  };