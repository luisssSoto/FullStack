-- view all
SELECT * FROM world_products;

-- view country column
SELECT country FROM world_products;

-- view country and wheat_production column
SELECT country, wheat_production 
FROM world_products;

-- view one particular data according its country
SELECT rice_production
FROM world_products
WHERE country = 'United States';

-- another example like the previous one
SELECT country
FROM world_products
WHERE wheat_production > 20;

-- view with a specific pattern
SELECT country
FROM world_products
WHERE country LIKE 'U%';

-- this is valid too; || means concatenation
SELECT country
FROM world_products
WHERE country LIKE 'U' || '%';

-- countries that ends with 'a'
SELECT country
FROM world_products
WHERE country LIKE '%a';

-- using || double pipe symbol
SELECT country
FROM world_products
WHERE country LIKE '%' || 'a';
