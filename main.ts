#!/usr/bin/env node

import inquirer from "inquirer"
import chalk from "chalk"

let todosArr: string[] = ["Walk", "Code"];
let condition: boolean = true;

while (condition) {

    let selectOperation = await inquirer.prompt({
        name: "select",
        type: "list",
        message: "What you want to do in your todos?",
        choices: ["View", "Add", "Update", "Delete"]
    })

    // Code for Add
    if (selectOperation.select == "Add") {
        let add = await inquirer.prompt({
            name: "addTasks",
            type: "input",
            message: "What you want to add in your todos?"
        });
        todosArr.push(add.addTasks)
        todosArr.forEach(task => console.log(task));
    }

    // Code for Update
    else if (selectOperation.select == "Update") {
        if (todosArr.length == 0) {
            console.log(chalk.red("There is nothing to update, please add tasks."));
        }
        else {
            let update = await inquirer.prompt({
                name: "updateTasks",
                type: "list",
                message: "Update tasks from the list",
                choices: todosArr.map(task => task)
            })

            let add = await inquirer.prompt({
                name: "addTasks",
                type: "input",
                message: "Enter your task"
            })
            todosArr.push(add.addTasks)
            let newAfterUpdate = todosArr.filter(task => task !== update.updateTasks)
            todosArr = [...newAfterUpdate]
            todosArr.forEach(task => console.log(task));
        }
    }

    // Code for delete
    else if (selectOperation.select == "Delete") {
        if (todosArr.length == 0) {
            console.log(chalk.red("There is nothing to delete, please add tasks."));
        }
        else {
            let dlte = await inquirer.prompt({
                name: "deleteTasks",
                type: "list",
                message: "Delete tasks from the list",
                choices: todosArr.map(task => task)
            })
            let newAfterDelete = todosArr.filter(task => task !== dlte.deleteTasks)
            todosArr = [...newAfterDelete]
            todosArr.forEach(task => console.log(task));
        }
    }


    // Code for view
    // Code for view
    else {
        if (todosArr.length == 0) {
            console.log(chalk.red("Please add tasks."));
        }
        else{
        todosArr.forEach(task => console.log(chalk.green(task)));
    }
    }

    // Code for "if user want to run program again."
    let runAgain = await inquirer.prompt({
        name: "runProgram",
        type: "confirm",
        message: chalk.magenta("Do you want to run program again?"),
        default: "false"
    })
    condition = runAgain.runProgram;

}