-- If DataBase exist it will delete from SQL
DROP DATABASE IF EXISTS employee_trackerDB;
-- Creates DataBased
CREATE DATABASE employee_trackerDB;
-- Tells SQL to use it
USE employee_trackerDB;
-- Creates Table
CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30)
 
);
-- Creates Table
CREATE TABLE role (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30),
  salary DECIMAL,
  department_id INT,
--   Foreign Key links two tabls together
  FOREIGN KEY (department_id) REFERENCES department(id)
);
-- Creates Table
CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  manager_id INT,
  role_id INT,
--   Foreign Key links two tabls together
  FOREIGN KEY (role_id) REFERENCES role(id),
  FOREIGN KEY (manager_id) REFERENCES employee(id)

);