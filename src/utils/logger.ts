import chalk from "chalk";

export const logger = {
  error(...args: unknown[]) {
    console.log(chalk.red(...args));
  },
  warn(...args: unknown[]) {
    console.log(chalk.yellow(...args));
  },
  info(...args: unknown[]) {
    console.log(chalk.cyan(...args));
  },
  infoBold(...args: unknown[]) {
    console.log(chalk.cyan.bold(...args));
  },
  success(...args: unknown[]) {
    console.log(chalk.green(...args));
  },
};
