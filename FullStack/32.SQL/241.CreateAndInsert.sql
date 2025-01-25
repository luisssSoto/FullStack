-- Creating a table or schema
--Crud
CREATE TABLE products (
  id INT NOT NULL,
  name TEXT,
  price MONEY,
  PRIMARY KEY (id)
  )

-- Inserting records, rows in the table or schema
--crUd
INSERT INTO products 
VALUES (1, 'pen', 1.2)

--Inserting some values in particular columns
INSERT INTO products (id, name)
VALUES (2, 'pencil')