-- FOREIGN KEYS
CREATE TABLE orders (
  id INT NOT NULL,
  order_number INT,
  customer_id INT,
  product_id INT,
  PRIMARY KEY (id),
  -- These foreign keys link this table with the other one
  FOREIGN KEY (customer_id) REFERENCES customers(id),
  FOREIGN KEY (product_id) REFERENCES products(id)
  )

-- Creating another table
CREATE TABLE customers (
    id INT NOT NULL,
    first_name TEXT,
    last_name TEXT,
    address TEXT
)

-- Inserting into this customers table
INSERT INTO customers
VALUES (1, 'John', 'Doe', 'McAllen 15')

    INSERT INTO customers
    VALUES (2, 'Jane', 'Doe', 'McAllen 16')

-- Join two tables by its foreign key and primary key
-- The below example show how to link the order_number with the customer data
SELECT orders.order_number, customers.first_name, customers.last_name, customers.address
FROM orders
INNER JOIN customers ON orders.customer_id = customers.id

-- Link the order_number with the product data
SELECT orders.order_number, products.name, products.price, products.stock
FROM orders
INNER JOIN products ON orders.product_id = products.id