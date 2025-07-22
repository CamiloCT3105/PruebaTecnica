# 🛒 CRUD de Productos y Categorías

Este proyecto es una aplicación completa **Fullstack** que permite crear, leer, actualizar y eliminar **productos** y **categorías**, desarrollada como parte de una prueba técnica. Utiliza **React.js** para el frontend y **Node.js con Express** para el backend, con **MySQL** como base de datos.

---

## 🚀 Tecnologías utilizadas

### Frontend:
- React.js
- Axios
- React Router DOM
- Bootstrap (CSS)

### Backend:
- Node.js
- Express.js
- MySQL (mediante `mysql2`)
- CORS & Body-parser

## 📦 Instalación y ejecución

### 1. Clonar el repositorio
```bash
git clone https://github.com/CamiloCT3105/PruebaTecnica.git
cd PruebaTecnica
```

### 2. Backend
```bash
cd backend
npm install
npm start
```
El backend se ejecutará en: `http://localhost:3001`

### 3. Frontend
```bash
cd frontend
npm install
npm start
```
El frontend se ejecutará en: `http://localhost:3000`

---

### 4. Variables entorno .env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=juanca2003
DB_NAME=crud_test
PORT=3001

## 🧪 Funcionalidades

### 📂 Categorías:
- Crear nueva categoría
- Ver lista de categorías
- Editar categoría existente
- Eliminar categoría

### 🛍️ Productos:
- Crear producto con nombre, precio y categoría
- Ver lista de productos
- Editar producto
- Eliminar producto

---

## 🗃️ Base de datos

Se usa **MySQL** con dos tablas:

### Nombre base de datos: `crud_test`

### Tabla `categories`:
| Campo | Tipo    | Descripción        |
|-------|---------|--------------------|
| id    | INTEGER | Identificador único (PK) |
| name  | varchar(255) | Nombre de la categoría   |

### Tabla `products`:
| Campo      | Tipo    | Descripción                      |
|------------|---------|----------------------------------|
| id         | INTEGER | Identificador único (PK)         |
| name       | varchar(255)   | Nombre del producto              |
| price      | float    | Precio del producto              |
| category_id| INTEGER | ID de la categoría (FK)          |

---

## SCRIPT:

CREATE DATABASE crud_test;

USE crud_test;

CREATE TABLE categories (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  price FLOAT NOT NULL,
  category_id INT,
  FOREIGN KEY (category_id) REFERENCES categories(id)
);

## ⚠️ Validaciones y manejo de errores

- Se muestran mensajes amigables cuando no hay productos o categorías.
- Se validan campos obligatorios al crear/editar.
- Se confirma antes de eliminar registros.
- Se manejan errores de red y del backend.

---

## 💡 Posibles mejoras futuras

- Autenticación con JWT.
- Filtros por categoría y búsqueda.
- Paginación o carga infinita.
- Pruebas unitarias (Jest / Supertest).

---

## ✍️ Autor

**Juan Camilo**  
Prueba técnica de desarrollo Presencial  
[GitHub](https://github.com/CamiloCT3105)