# bamazon

## Application Description

**Amazon-like storefront**

The app will take in orders from customers and deplete stock from the store's inventory.

**GITHUB REPOSITORY LINK**

https://github.com/kirk733/bamazon

**Files to Download from GITHUB**

bamazonCustomer.js

bamazon_db.sql

## How to Run Application

Make sure to `npm install inquirer`

Make sure to `npm install mysql`

node bamazonCustomer.js 

## Code for database creation

```
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
INSERT INTO products (item_id, product_name, price, stock_quantity) VALUES (10, "socks", 2.00, 1000);
INSERT INTO products (item_id, product_name, price, stock_quantity) VALUES (20, "shirts", 10.00, 500);
INSERT INTO products (item_id, product_name, price, stock_quantity) VALUES (30, "shoes", 20.00, 250);
INSERT INTO products (item_id, product_name, price, stock_quantity) VALUES (40, "jeans", 32.00, 400);
INSERT INTO products (item_id, product_name, price, stock_quantity) VALUES (50, "pencils", 1.00, 50);
INSERT INTO products (item_id, product_name, price, stock_quantity) VALUES (60, "paper", 2.00, 100);
INSERT INTO products (item_id, product_name, price, stock_quantity) VALUES (70, "backpacks", 32.00, 10);
INSERT INTO products (item_id, product_name, price, stock_quantity) VALUES (80, "markers", 4.00, 15);
INSERT INTO products (item_id, product_name, price, stock_quantity) VALUES (90, "rulers", 1.00, 10);
INSERT INTO products (item_id, product_name, price, stock_quantity) VALUES (100, "calculater", 20.00, 20);


```

**Database Inventory Prior to Program Running**

<img width="525" alt="databaseprior" src="https://user-images.githubusercontent.com/27737247/29246142-876b2176-7fad-11e7-8f5a-9351325130ba.png">

**Initial Run of Program with Sufficient Inventory**

<img width="551" alt="programrunswithavailableinventory" src="https://user-images.githubusercontent.com/27737247/29246155-f0355762-7fad-11e7-8760-a3531bc83544.png">

**Database Inventory After Program Running**

<img width="537" alt="databaseafter" src="https://user-images.githubusercontent.com/27737247/29246157-0c1e71a2-7fae-11e7-8ef9-91c2d6fef0e0.png">

**Program with Insufficient Inventory**

<img width="536" alt="programrunsnotenoughinventory" src="https://user-images.githubusercontent.com/27737247/29246160-209dddac-7fae-11e7-8234-28328921d589.png">

