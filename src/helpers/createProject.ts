import { Options } from "@/index.js";
import path from "path";
import { scaffoldProject } from "@/helpers/scaffoldProject.js";

export const createProject = async ({ appName, language }: Options) => {
  const projectDir = path.resolve(process.cwd(), appName);

  // Bootstraps the base Next.js application
  await scaffoldProject({
    appName,
    projectDir,
    language,
  });

  return projectDir;
};
