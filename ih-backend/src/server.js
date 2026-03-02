require('dotenv').config();

const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const apiRoutes = require('./routes');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});
app.use('/api', apiRoutes);

async function startServer() {
  try {
    await connectDB();
    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error.message);
    process.exit(1);
  }
}

startServer();
