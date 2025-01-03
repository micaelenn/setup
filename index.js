#!/usr/bin/env node

import { program } from "commander";
import chalk from "chalk";
import inquirer from "inquirer";
import ora from "ora";

program.version("1.0.0").description("Boiler CLI");

program.action(() => {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'type',
        message: ' 📦 which boilerplate do you need?',
        choices: [
          'Frontend', 
          'Backend', 
          'Full Stack', 
          'Chrome Extension',
          'Sanity Studio',
          'Widget',
          'WordPress Theme',
          'WordPress Plugin',
        ],
      },
    ])
    .then((answers) => {
      const spinner = ora(`Setting up ${answers.type} boilerplate...`).start();

      setTimeout(() => {
        spinner.succeed(chalk.green(" Done!"));
      }, 5000);
    });
});

program.parse(process.argv);
