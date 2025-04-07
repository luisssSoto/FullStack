INSERT INTO world_products (country, rice_production, wheat_production)
VALUES ('Italy', 1.46, 7.3);

-- Create another table for this exercise

CREATE TABLE countries (
	id SERIAL PRIMARY KEY,
	country_code CHAR(2),
	country_name VARCHAR(100)
);