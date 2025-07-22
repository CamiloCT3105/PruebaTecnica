const db = require('../config/db');

const Category = {
  getAll: () => db.query('SELECT * FROM categories'),
  getById: (id) => db.query('SELECT * FROM categories WHERE id = ?', [id]),
  create: (name) => db.query('INSERT INTO categories (name) VALUES (?)', [name]),
  update: (id, name) => db.query('UPDATE categories SET name = ? WHERE id = ?', [name, id]),
  remove: (id) => db.query('DELETE FROM categories WHERE id = ?', [id]),
};

module.exports = Category;