require('dotenv').config();
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

// built-in body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
const productRoutes = require('./routes/products.routes');
const authRoutes = require('./routes/auth.routes'); // ← TAMBAHKAN INI

app.use('/products', productRoutes);
app.use('/', authRoutes); // ← TAMBAHKAN INI (atau '/api' atau '/auth' sesuai kebutuhan)
 
// basic root
app.get('/', (req, res) => {
  res.send({ message: 'API running' });
});

// error handler (fallback)
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send({ error: 'Internal Server Error' });
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});