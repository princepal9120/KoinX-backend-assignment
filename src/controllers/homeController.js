export const getHomePage = async (req, res) => {
  try {
    res.status(200).send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Crypto Price & Deviation API</title>
          <style>
              body {
                  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                  background: linear-gradient(135deg, #f0f0f0 25%, #c4e0e5 100%);
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  height: 100vh;
                  margin: 0;
              }
              .container {
                  background-color: #fff;
                  border-radius: 12px;
                  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
                  padding: 30px;
                  max-width: 700px;
                  text-align: center;
              }
              h1 {
                  font-size: 2.5rem;
                  color: #333;
                  margin-bottom: 10px;
                  letter-spacing: 2px;
                  font-weight: bold;
              }
              p {
                  color: #555;
                  font-size: 1.1rem;
                  line-height: 1.6;
              }
              a {
                  color: #3498db;
                  text-decoration: none;
                  font-weight: bold;
              }
              a:hover {
                  text-decoration: underline;
              }
              .cta-btn {
                  margin-top: 20px;
                  display: inline-block;
                  padding: 10px 20px;
                  background-color: #4CAF50;
                  color: white;
                  font-size: 1.1rem;
                  border-radius: 6px;
                  text-decoration: none;
                  transition: background-color 0.3s ease;
              }
              .cta-btn:hover {
                  background-color: #45a049;
              }
             
          </style>
      </head>
      <body>
          <div class="container">
              <h1>Welcome to the Crypto Price & Deviation API</h1>
              <p>This API provides real-time cryptocurrency prices and calculates the standard deviation of historical data, offering insights into market volatility.</p>
              <p>For more details, explore the <a href="https://github.com/princepal9120/KoinX-backend-assignment">GitHub repository</a>.</p>
              <a class="cta-btn" href="https://github.com/princepal9120/KoinX-backend-assignment">Check Out on GitHub</a>
          </div>
      </body>
      </html>
    `);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
