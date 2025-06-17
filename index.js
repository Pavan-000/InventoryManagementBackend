const express = require('express');
const cors = require('cors');
require('dotenv').config();

const sequelize = require('./config/db');
const Product = require("./models/products")// auto-register model
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');

const authRoutes = require('./routes/authRoutes');
const productRoutes =require("./routes/productRoutes")


const app = express();
app.use(cors());
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get('/', (req, res) => {
  res.send('Inventory API is running');
});

app.use('/products',productRoutes)
app.use('/', authRoutes);

app.listen(process.env.PORT || 5000, async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync(); // auto-creates tables if not present
    console.log('✅ Connected to DB & synced');
    console.log(`🚀 Server running on port ${process.env.PORT || 3000}`);
  } catch (err) {
    console.error('❌ Unable to connect to DB:', err.message);
  }
});
