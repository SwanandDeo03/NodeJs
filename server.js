const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Basic Hello World route
app.get('/', (req, res) => {
  res.json({
    message: 'Hello, World!',
    timestamp: new Date().toISOString(),
    status: 'success'
  });
});

// Hello World with custom name parameter
app.get('/hello/:name?', (req, res) => {
  const name = req.params.name || 'World';
  res.json({
    message: `Hello, ${name}!`,
    timestamp: new Date().toISOString(),
    status: 'success'
  });
});

// POST endpoint for Hello World
app.post('/hello', (req, res) => {
  const { name } = req.body;
  const greeting = name ? `Hello, ${name}!` : 'Hello, World!';
  
  res.json({
    message: greeting,
    timestamp: new Date().toISOString(),
    status: 'success',
    receivedData: req.body
  });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// 404 handler for undefined routes
app.use('*', (req, res) => {
  res.status(404).json({
    message: 'Route not found',
    status: 'error',
    timestamp: new Date().toISOString()
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Hello World API server is running on port ${PORT}`);
  console.log(`📡 API endpoints:`);
  console.log(`   GET  http://localhost:${PORT}/`);
  console.log(`   GET  http://localhost:${PORT}/hello`);
  console.log(`   GET  http://localhost:${PORT}/hello/:name`);
  console.log(`   POST http://localhost:${PORT}/hello`);
  console.log(`   GET  http://localhost:${PORT}/health`);
});

module.exports = app; 