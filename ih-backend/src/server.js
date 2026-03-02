require('dotenv').config();

const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const apiRoutes = require('./routes');

const app = express();
const port = process.env.PORT || 5000;
const dbRetryDelayMs = Number(process.env.DB_RETRY_DELAY_MS || 5000);

let dbConnected = false;

app.use(cors());
app.use(express.json());
app.get('/health', (_req, res) => {
  res.json({
    status: 'ok',
    db: dbConnected ? 'connected' : 'disconnected',
  });
});
app.use('/api', apiRoutes);

async function connectDbWithRetry() {
  try {
    await connectDB();
    dbConnected = true;
  } catch (error) {
    dbConnected = false;
    console.error(`MongoDB connection failed: ${error.message}`);
    console.log(`Retrying MongoDB connection in ${dbRetryDelayMs}ms...`);
    setTimeout(connectDbWithRetry, dbRetryDelayMs);
  }
}

function startServer() {
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
    connectDbWithRetry();
  });
}

startServer();
