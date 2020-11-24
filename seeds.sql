-- Adding into Department Table
INSERT INTO department (name)
VALUE ("Sales");
INSERT INTO department (name)
VALUE ("Engineering");
INSERT INTO department (name)
VALUE ("Finance");
INSERT INTO department (name)
VALUE ("Legal");

-- Inserts into Role Table
INSERT INTO role (title, salary, department_id)
VALUE ("Lead Engineer", 150000, 2);
INSERT INTO role (title, salary, department_id)
VALUE ("Jr Engineer", 100000, 2);
INSERT INTO role (title, salary, department_id)
VALUE ("Sales Lead", 100000, 1);
INSERT INTO role (title, salary, department_id)
VALUE ("Sales Rep", 50000, 1);
INSERT INTO role (title, salary, department_id)
VALUE ("Lawyer", 190000, 4);
INSERT INTO role (title, salary, department_id)
VALUE ("ParaLegal", 80000, 4);
INSERT INTO role (title, salary, department_id)
VALUE ("Finance Manager", 125000, 3);
INSERT INTO role (title, salary, department_id)
VALUE ("Finance Associate", 90000, 3);

-- Inserts into Employee Table
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Dave", "Si", 1, 1);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Tom", "Starck", null, 2);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Chris","Gon",2,3);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Herrald", "Chesse", null, 4);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Chris", "Huberts", 3, 5);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Wilson", "Smith", null, 6);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("John", "Smith", 4, 7);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Atkins", "Church", null, 8);

-- If an entry is incorrect from this screen you may update by;
Select * From (Table) Where ? = ?
UPDATE (Table)
SET 
-- what you want changed
    (column name) = (New Value)
WHERE
-- location
    (column name) = (Value);

-- SELECTING FOR CREATING 
--TABLES IN OUR SQL WORKBENCH 
SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employee;

-- to add employee into the employee table
SELECT * FROM employee;
INSERT INTO employee (first_name ,last_name,manager_id,role_id)
VALUES("James","Baldwin",null,1);