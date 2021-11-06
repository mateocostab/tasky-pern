-- CREATE DATABASE perntodo;

CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY, 
    description VARCHAR(255),
    completed boolean DEFAULT false
);


-- ALTER TABLE todo
-- ADD completed varchar(255);

-- ALTER TABLE todo
-- ALTER COLUMN completed TYPE boolean USING completed::boolean;