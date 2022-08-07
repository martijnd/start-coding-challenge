import path from "path";
import { fileURLToPath } from "url";
import chalk from "chalk";
import fs from "fs-extra";
import inquirer from "inquirer";
import ora from "ora";
import { Options } from "@/index.js";
import { execa } from "@/utils/execAsync.js";

const __filename = fileURLToPath(import.meta.url);
const distPath = path.dirname(__filename);
const PKG_ROOT = path.join(distPath, "../");

export const scaffoldProject = async ({
  appName,
  projectDir,
  language,
}: Options & { projectDir: string }) => {
  const srcDir = path.join(
    PKG_ROOT,
    `src/template/${language === "javascript" ? "js" : "ts"}`
  );

  const spinner = ora(`Scaffolding in: ${projectDir}...\n`).start();

  if (fs.existsSync(projectDir)) {
    if (fs.readdirSync(projectDir).length === 0) {
      spinner.info(
        `${chalk.cyan.bold(appName)} exists but is empty, continuing...\n`
      );
    } else {
      spinner.stopAndPersist();
      const { overwriteDir } = await inquirer.prompt<{ overwriteDir: boolean }>(
        {
          name: "overwriteDir",
          type: "confirm",
          message: `${chalk.redBright.bold("Warning:")} ${chalk.cyan.bold(
            appName
          )} already exists and isn't empty. Do you want to overwrite it?`,
          default: false,
        }
      );
      if (!overwriteDir) {
        spinner.fail("Aborting installation...");
        process.exit(0);
      } else {
        spinner.info(
          `Emptying ${chalk.cyan.bold(appName)} and creating app..\n`
        );
        fs.emptyDirSync(projectDir);
      }
    }
  }

  const exerciseDir = path.join(
    PKG_ROOT,
    `src/exercises/${language === "typescript" ? "ts" : "js"}`
  );

  const targetDir = path.join(projectDir, "src");
  await fs.copy(exerciseDir, targetDir);

  spinner.start();

  await fs.copy(srcDir, projectDir);
  await fs.rename(
    path.join(projectDir, "_gitignore"),
    path.join(projectDir, ".gitignore")
  );

  await execa(`npm install`, { cwd: projectDir });

  spinner.succeed(`${chalk.cyan.bold(appName)} scaffolded successfully!\n`);
};
