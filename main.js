#!/usr/bin/env node
import inquirer from "inquirer";
let todosArr = [];
let condition = true;
while (condition) {
    let todos = await inquirer.prompt([
        {
            name: "addTasks",
            type: "input",
            message: "What you want to add in your todos?"
        },
        {
            name: "addMore",
            type: "confirm",
            message: "Do you want to add more tasks?",
            default: "false"
        },
    ]);
    todosArr.push(todos.addTasks);
    console.log(todosArr);
    condition = todos.addMore;
}
