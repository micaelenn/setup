import fs from 'fs'
import path from 'path'
import chalk from "chalk";
import ora from "ora";
import { fileURLToPath } from 'url'
import { dirname } from 'path'

export default function copyAndPastFolder(type) {
  const spinner = ora(`Setting up boilerplate...`).start();
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

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

  const starterDirectory = `${__dirname}/starters/`;
  const currentDirectory = process.cwd();
  const sourceFolder = path.join(starterDirectory, type);
  const destinationFolder = path.join(currentDirectory, '');
  
  copy(sourceFolder, destinationFolder);
  spinner.succeed(chalk.green(" Done!"));
}