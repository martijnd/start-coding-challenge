#!/usr/bin/env node
import { Command } from "commander";
import inquirer from "inquirer";
import { createProject } from "./helpers/createProject.js";
import { logger } from "./utils/logger.js";

const main = async () => {
  const { appName, language } = await runCli();

  const projectDir = await createProject({ appName, language });

  logger.success(`Created project in ${projectDir}`);
  logger.info(`Now run the following commands: `);
  logger.info(`$ cd ${projectDir}`);
  logger.info(`$ npm test`);

  process.exit(0);
};

export interface Options {
  appName: string;
  language: "javascript" | "typescript";
}

async function runCli(): Promise<Options> {
  const program = new Command().name("Start Coding Challenge");
  program
    .description(
      "A collection of coding challenges to improve your Javascript/Typescript skills."
    )
    .argument(
      "[dir]",
      "The name of the application, as well as the name of the directory to create",
      "coding-challenges"
    )
    .parse(process.argv);

  const { appName } = await inquirer.prompt<{ appName: string }>({
    name: "appName",
    type: "input",
    message: "What will your project be called?",
    default: "coding-challenges",
    transformer: (input: string) => {
      return input.trim();
    },
  });

  const { language } = await inquirer.prompt<{
    language: "typescript" | "javascript";
  }>({
    name: "language",
    type: "list",
    message: "Will you be using JavaScript or TypeScript?",
    choices: [
      { name: "TypeScript", value: "typescript", short: "TypeScript" },
      { name: "JavaScript", value: "javascript", short: "JavaScript" },
    ],
    default: "typescript",
  });

  return {
    appName,
    language,
  };
}

main().catch((err) => {
  console.error("Aborting installation...");
  if (err instanceof Error) {
    console.error(err);
  } else {
    console.error(
      "An unknown error has occurred. Please open an issue on github with the below:"
    );
    console.log(err);
  }
  process.exit(1);
});
