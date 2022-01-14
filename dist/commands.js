"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const inquirer_1 = require("inquirer");
const program = new commander_1.Command()
    .version("0.0.1")
    .description("A simple CLI to manage your firebase collections by SaulitoDev");
program.command("task").action(async () => {
    const answers = await (0, inquirer_1.prompt)([
        {
            type: "input",
            message: "Title for task",
            name: "title",
        },
        {
            type: "input",
            message: "Title description",
            name: "description",
        },
    ]);
    console.log(answers);
});
program.parse(process.argv);
