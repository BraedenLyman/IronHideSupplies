const express = require('express');

const router = express.Router();

router.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

router.get('/message', (_req, res) => {
  res.json({ message: 'Backend is connected' });
});

module.exports = router;
