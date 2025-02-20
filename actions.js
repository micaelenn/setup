// external modules
import fs from 'fs'
import path from 'path'
import chalk from "chalk";
import ora from "ora";

// internal modules
import { getDirectoryName,formatBoilerplateName } from "./helpers.js";

export default function copyAndPastFolder(type) {
  const boilerplateName = formatBoilerplateName(type)
  const spinner = ora(`Setting up structure for ${boilerplateName} project...`).start();

  function copy(source, destination) {
    if (!fs.existsSync(destination)) {
      fs.mkdirSync(destination, { recursive: true });
    }

    const boilerplates = fs.readdirSync(source);

    for (const boilerplate of boilerplates) {
      const sourcePath = path.join(source, boilerplate);
      const destinationPath = path.join(destination, boilerplate);

      if (fs.statSync(sourcePath).isDirectory()) {
        copy(sourcePath, destinationPath);
      } else {
        fs.copyFileSync(sourcePath, destinationPath);
      }
    }
  }

  const starterDirectory = getDirectoryName('starters');
  const currentDirectory = process.cwd();
  const sourceFolder = path.join(starterDirectory, type);
  const destinationFolder = path.join(currentDirectory, '');
  
  copy(sourceFolder, destinationFolder);
  spinner.succeed(chalk.green(" Done!"));
}