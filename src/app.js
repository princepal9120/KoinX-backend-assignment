require('dotenv').config();
const express = require('express');
const connectDB = require('./config/database');
const cryptoRoutes = require('./routes/cryptoRoutes');
const fetchCryptoData = require('./jobs/fetchCryptoData');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api', cryptoRoutes);

// Start the background job
fetchCryptoData.start();
app.use('/',()=>{
    console.log("hello")
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});