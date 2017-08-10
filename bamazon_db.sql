-- Drops the programming_db if it already exists --
DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products(
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  item_id INTEGER(15),
  product_name VARCHAR(20),
  price FLOAT(11),
  stock_quantity INTEGER(11),
  PRIMARY KEY (id)
);

-- Creates new rows
INSERT INTO products (item_id, product_name, price, stock_quantity) VALUES (10, "socks", 2.50, 1000);
INSERT INTO products (item_id, product_name, price, stock_quantity) VALUES (20, "shirts", 10.50, 500);
INSERT INTO products (item_id, product_name, price, stock_quantity) VALUES (30, "shoes", 20.50, 250);
INSERT INTO products (item_id, product_name, price, stock_quantity) VALUES (40, "jeans", 32.50, 400);
INSERT INTO products (item_id, product_name, price, stock_quantity) VALUES (50, "pencils", 1.50, 50);
INSERT INTO products (item_id, product_name, price, stock_quantity) VALUES (60, "paper", 2.50, 100);
INSERT INTO products (item_id, product_name, price, stock_quantity) VALUES (70, "backpacks", 32.50, 10);
INSERT INTO products (item_id, product_name, price, stock_quantity) VALUES (80, "markers", 4.50, 15);
INSERT INTO products (item_id, product_name, price, stock_quantity) VALUES (90, "rulers", 1.00, 10);
INSERT INTO products (item_id, product_name, price, stock_quantity) VALUES (100, "calculater", 20.50, 20);
