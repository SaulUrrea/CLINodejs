import { Command } from "commander";
import { prompt } from "inquirer";

const program = new Command()
  .version("0.0.1")
  .description("A simple CLI to manage your firebase collections by SaulitoDev");

program.command("task").action(async (): Promise<void> => {
  const answers = await prompt([
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
