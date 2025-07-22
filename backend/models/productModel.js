const db = require('../config/db');

const Product = {
  getAll: () => db.query('SELECT * FROM products'),
  getById: (id) => db.query('SELECT * FROM products WHERE id = ?', [id]),
  create: (data) => {
    const { name, description, price, category_id } = data;
    return db.query(
      'INSERT INTO products (name, description, price, category_id) VALUES (?, ?, ?, ?)',
      [name, description, price, category_id]
    );
  },
  update: (id, data) => {
    const { name, description, price, category_id } = data;
    return db.query(
      'UPDATE products SET name = ?, description = ?, price = ?, category_id = ? WHERE id = ?',
      [name, description, price, category_id, id]
    );
  },
  remove: (id) => db.query('DELETE FROM products WHERE id = ?', [id]),
};

module.exports = Product;