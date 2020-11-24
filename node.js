const inquirer = require("inquirer")
const mysql = require("mysql")


const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Derteano007!",
    database: "employee_trackerDB"
});

connection.connect(function (err) {
    if (err) throw err

    start();
});

function start() {
    inquirer.prompt([{

        type: "list",
        message: "What would you like to do?",
        name: "choice",
        choices: [
            "View All Employees?",
            "View All Employees By Roles?",
            "View all Employees By Deparments?",
            "Update Employee?",
            "Add Employee?",
            "Add Role?",
            "Add Department?",
            "Exit"

        ]
    }
    ]).then(function (val) {
        switch (val.choice) {
            case "View All Employees?":
                viewAllEmployees();
                break;

            case "View All Employees By Roles?":
                viewAllRoles();
                break;
            case "View all Employees By Deparments":
                viewAllDepartments();
                break;

            case "Add Employee?":
                addEmployee();
                break;

            case "Update Employee?":
                updateEmployee();
                break;

            case "Add Role?":
                addRole();
                break;

            case "Add Department?":
                addDepartment();
                break;

            default:
                connection.end()
                process.exit(0)



        }
    })
}

function viewAllEmployees() {
    connection.query("SELECT employee.first_name, employee.last_name, role.title, role.salary, department.name, CONCAT(e.first_name, ' ' ,e.last_name) AS Manager FROM employee INNER JOIN role on role.id = employee.role_id INNER JOIN department on department.id = role.department_id left join employee e on employee.manager_id = e.id;",
        function (err, res) {
            if (err) throw err
            console.table(res)
            start()
        })

}

function viewAllDepartments() {
    connection.query("SELECT employee.first_name, employee.last_name, department.name AS Department FROM employee JOIN role ON employee.role_id = role.id JOIN department ON role.department_id = department.id ORDER BY employee.id;",
        function (err, res) {
            if (err) throw err
            console.table(res)
            start()
        })
}


function viewAllRoles() {
    connection.query("SELECT employee.first_name, employee.last_name, role.title AS Title FROM employee JOIN role ON employee.role_id = role.id;",
        function (err, res) {
            if (err) throw err
            console.table(res)
            start()
        })
}

function addEmployee() {

    inquirer
        .prompt([{
            name: 'First_name',
            type: 'input',
            message: 'Enter employee first name?',
        },
        {
            name: 'Last_name',
            type: 'input',
            message: 'Enter employee Last name?',
        },
        {
            name: 'manager',
            type: 'list',
            message: "Who is their manager?",
            choices: [{
                name: "Tom Starck",
                value: 2

            }]

        }
    {
            name: 'role',
            type: 'list',
            message: 'What role would you like them to be promoted to?',
            choices: [{
                name: "Lead Engineer",
                value: 1
            },
            {
                name: "Jr Engineer",
                value: 2

            },
            {
                name: "Sales Lead",
                value: 3


            },
            {
                name: "Sales Rep",
                value: 4
            },
            {
                name: "Lawyer",
                value: 5

            },
            {
                name: "Paralegal",
                value: 6
            },
                // dont forget to add 2 more options
            ]
        }

        ])
        .then(function (response) {
            console.log(response)
            connnection.query("UPDATE employee  SET role_id = ? WHERE id =?;", [response.employee, response.role],
                function (error, records) {
                    if (error) throw error
                    console.table(records)
                    start()
                })
        })


}

function updateEmployee() {
    connection.query("SELECT employee.id, employee.first_name, employee.last_name, role.title, role.salary, department.name, CONCAT(e.first_name, ' ' ,e.last_name) AS Manager FROM employee INNER JOIN role on role.id = employee.role_id INNER JOIN department on department.id = role.department_id left join employee e on employee.manager_id = e.id;",
        function (err, res) {
            if (err) throw err
            console.table(res)
            inquirer
                .prompt([{
                    name: 'employee',
                    type: 'input',
                    message: 'Which Employer id would you like to change?',
                },
                {
                    name: 'role',
                    type: 'list',
                    message: 'What role would you like them to be promoted to?',
                    choices: [{
                        name: "Lead Engineer",
                        value: 1
                    },
                    {
                        name: "Jr Engineer",
                        value: 2

                    },
                    {
                        name: "Sales Lead",
                        value: 3


                    },
                    {
                        name: "Sales Rep",
                        value: 4
                    },
                    {
                        name: "Lawyer",
                        value: 5

                    },
                    {
                        name: "Paralegal",
                        value: 6
                    },
                    {
                        name: "Finance Manager",
                        value: 7

                    },
                    {
                        name: "Finance Associate",
                        value: 8
                    },
                        // dont forget to add 2 more options
                    ]
                }

                ])
                .then(function (response) {
                    console.log(response)
                    connnection.query("UPDATE employee  SET role_id = ? WHERE id =?;", [response.employee, response.role],
                        function (error, records) {
                            if (error) throw error
                            console.table(records)
                            start()
                        })
                })


        })
}

function addRole() {
    inquirer
        .prompt([{
            name: 'Title',
            type: 'input',
            message: 'What is the title of the role?',
        },
        {
            name: 'Salary',
            type: 'input',
            message: 'What is the roles Salary?',
        },
        {
            name: 'Department',
            type: 'list',
            message: 'What the Deprtment you would like the role to be in?',
            choices: [{
                name: "Sales",
                value: 1
            },
            {
                name: "Engineering",
                value: 2
            },
            {
                name: "Finance",
                value: 3
            },
            {
                name: "Legal",
                value: 4
            },
        ]
            // do the same process as above

        }

        ])
        .then(function (res) {

            connection.query('INSERT into role (title,salary,department_id) values(?,?,?)', [res.Title, res.Salary, res.Department],


                function (err, records) {
                    if (err) throw err
                    console.table(records)
                    start()
                })

        }
        )
}


function addDepartment() {

    inquirer.prompt([
        {
            name: "name",
            type: "input",
            message: "What Department would you like to add?"
        }
    ]).then(function (res) {
        connection.query(
            "INSERT INTO department SET ? ",
            {
                name: res.name

            },
            function (err) {
                if (err) throw err
                console.table(res);
                start();
            }
        )
    })
}