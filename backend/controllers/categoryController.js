const Category = require('../models/categoryModel');

exports.getAll = async (req, res) => {
  const [rows] = await Category.getAll();
  res.json(rows);
};

exports.getById = async (req, res) => {
  const [rows] = await Category.getById(req.params.id);
  res.json(rows[0]);
};

exports.create = async (req, res) => {
  const { name } = req.body;
  await Category.create(name);
  res.json({ message: 'Categoría creada' });
};

exports.update = async (req, res) => {
  const { name } = req.body;
  await Category.update(req.params.id, name);
  res.json({ message: 'Categoría actualizada' });
};

exports.remove = async (req, res) => {
  await Category.remove(req.params.id);
  res.json({ message: 'Categoría eliminada' });
};