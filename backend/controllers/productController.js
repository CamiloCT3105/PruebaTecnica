const Product = require('../models/productModel');

exports.getAll = async (req, res) => {
  const [rows] = await Product.getAll();
  res.json(rows);
};

exports.getById = async (req, res) => {
  const [rows] = await Product.getById(req.params.id);
  res.json(rows[0]);
};

exports.create = async (req, res) => {
  await Product.create(req.body);
  res.json({ message: 'Producto creado' });
};

exports.update = async (req, res) => {
  await Product.update(req.params.id, req.body);
  res.json({ message: 'Producto actualizado' });
};

exports.remove = async (req, res) => {
  await Product.remove(req.params.id);
  res.json({ message: 'Producto eliminado' });
};