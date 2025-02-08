-- Create capitals table
CREATE TABLE capitals (
    id SERIAL PRIMARY KEY,
    country VARCHAR(45),
    capital VARCHAR(45)
);

-- View the columns
SELECT * FROM public.capitals
ORDER BY id ASC

-- View the first 100 registers
SELECT * FROM public.capitals
ORDER BY id ASC LIMIT 100

-- View the last 100 registers
SELECT * FROM public.capitals
ORDER BY id DESC LIMIT 100


-- Creating a flags table
CREATE TABLE public.flags (
    id SERIAL PRIMARY KEY,
    name TEXT,
    flag TEXT
);