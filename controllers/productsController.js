const Product = require('../models/products');

// 🟢 Create a new product
const createProduct = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    return res.status(201).json(newProduct);
  } catch (err) {
    console.error('Create Product Error:', err);
    return res.status(400).json({ error: err.message });
  }
};

// 📋 Get all products
const getAllProducts = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const offset = (page - 1) * limit;

  try {
    const { count, rows } = await Product.findAndCountAll({ offset, limit });
    res.json({
      page,
      totalPages: Math.ceil(count / limit),
      totalItems: count,
      items: rows,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 🔍 Get product by ID
const getProductById = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    return res.status(200).json(product);
  } catch (err) {
    console.error('Get Product Error:', err);
    return res.status(500).json({ error: err.message });
  }
};

// ✏️ Update product by ID
const updateProduct = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
     await product.update(req.body);
    return res.status(200).json(product);
  } catch (err) {
    console.error('Update Product Error:', err);
    return res.status(400).json({ error: err.message });
  }
};

const updateQuantity = async (req, res) => {
  const { quantity } = req.body;
  const { id } = req.params;

  try {
    const product = await Product.findByPk(id);
    if (!product) return res.status(404).json({ message: 'Product not found' });

    product.quantity = quantity;
    await product.save();

    res.json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// 🗑 Delete product by ID
const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });

    await product.destroy();
    return res.status(204).send(); // No Content
  } catch (err) {
    console.error('Delete Product Error:', err);
    return res.status(500).json({ error: err.message });
  }
};

module.exports={createProduct,getAllProducts,getProductById,updateProduct,deleteProduct, updateQuantity}
