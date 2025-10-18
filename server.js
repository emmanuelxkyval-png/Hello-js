const express = require('express');
const app = express();

// Middleware for JSON parsing
app.use(express.json());

// Custom middleware for logging requests (Bonus)
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url} - ${new Date().toISOString()}`);
  next();
});

// GET / → "Hello from Express!"
app.get('/', (req, res) => {
  res.json({ message: 'Hello from Express!' });
});

// POST /user → accepts { name, email }, responds "Hello, [name]!"
app.post('/echo', (req, res) => {
  const { name, email } = req.body;

  // Error handling for missing data
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required!' });
  }

  res.json({ message: `Hello, ${name}!` });
});

// GET /user/:id → "User [id] profile"
app.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  res.json({ message: `User ${userId} profile` });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));