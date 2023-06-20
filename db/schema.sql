-- Create database if not exists
CREATE DATABASE IF NOT EXISTS hr_database;
USE hr_database;

-- Create 'employees' table
CREATE TABLE employees (
  id INT AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL UNIQUE,
  -- Add other fields as necessary
  PRIMARY KEY (id)
);

-- Create 'incidents' table
CREATE TABLE incidents (
  id INT AUTO_INCREMENT,
  description TEXT NOT NULL,
  date DATETIME NOT NULL,
  employee_id INT,
  -- Add other fields as necessary
  PRIMARY KEY (id),
  FOREIGN KEY (employee_id) REFERENCES employees(id)
);