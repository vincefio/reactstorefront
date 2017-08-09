CREATE TABLE products(
	item_id INT NOT NULL,
	PRIMARY KEY(id),
	product_name VARCHAR(50),
	department_name VARCHAR(50),
	price DECIMAL (10, 2),
	stock_quantity INT (50)
);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ()