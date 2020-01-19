const fs = require("fs")
const inquirer = require("inquirer")
let renderFile = require("./render")
const generateManager = renderFile.createManager
const generateEngineer = renderFile.createEngineer
const generateIntern = renderFile.createIntern
const renderHTML = renderFile.renderMain

function askQuestions() {

    inquirer
        .prompt([{
            type: "input",
            message: "What is your name?",
            name: "name",
        },
        {
            type: "number",
            message: "What is your Employee ID?",
            name: "id",
        }, {
            type: "input",
            message: "What is your e-mail address?",
            name: "email",
        },
        {
            type: "list",
            message: "What is your job position?",
            name: "role",
            choices: ["Engineer", "Intern", "Manager"]
        }
        ])
        .then(
            function ({ name, id, email, role }) {
                switch (role) {
                    case "Engineer":
                        inquirer
                            .prompt({
                                type: "input",
                                message: "What is your GitHub username?",
                                name: "github"
                            }).then(
                                function ({ github }) {
                                    generateEngineer(name, id, email, github)
                                    addOtherMembers()
                                }
                            )
                        break
                    case "Intern":
                        inquirer
                            .prompt({
                                type: "input",
                                message: "What school do you attend?",
                                name: "school"
                            }).then(
                                function ({ school }) {
                                    generateIntern(name, id, email, school)
                                    addOtherMembers()
                                }
                            )
                        break
                    case "Manager":
                        inquirer
                            .prompt({
                                type: "input",
                                message: "What is your Office Number?",
                                name: "officeNumber"
                            }).then(
                                function ({ officeNumber }) {
                                    generateManager(name, id, email, officeNumber)
                                    addOtherMembers()
                                }
                            )
                        break
                }
            })

}

function addOtherMembers() {
    inquirer.prompt({
        type: "confirm",
        message: "Add other Team Employees?",
        name: "addOtherMembers"
    }).then(
        function ({ addOtherMembers }) {
            console.log("add other Employees", addOtherMembers)
            if (addOtherMembers) {
                askQuestions()
            } else {
                renderHTML()
            }
        }
    )
        .catch(err => {
            console.log("Error in Employee", err)
            throw err
        })
}


askQuestions()