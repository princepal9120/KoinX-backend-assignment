import express from "express";
import cron from "node-cron";

import connectDatabase from "./config/database.js";
import { updateCryptoData } from "./services/cryptoService.js";
import cryptoRoutes from "./routes/cryptoRoutes.js";
import homeRoutes from "./routes/homeRoutes.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

connectDatabase();

updateCryptoData().catch((error) => {
  console.error("Error during initial fetch:", error);
});

cron.schedule("0 */2 * * *", async () => {
  console.log("Fetching crypto data:");
  await updateCryptoData();
});

app.use("/", homeRoutes);
app.use("/api", cryptoRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
