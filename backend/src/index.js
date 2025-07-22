const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const productRoutes = require('../routes/productRoutes');
const categoryRoutes = require('../routes/categoryRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/products', productRoutes);
app.use('/categories', categoryRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});