-- crUd
-- Updating one field of any particular column
UPDATE products 
SET price = .80
WHERE id = 2

-- Adding a new column (growing up vertically)
ALTER TABLE products
ADD stock INT