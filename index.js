#!/usr/bin/env node

// external modules
import { program } from "commander";
import inquirer from "inquirer";

// internal modules
import copyAndPastFolder from "./utils/actions.js";
import { getFoldersName } from "./utils/helpers.js";

program.version("1.0.0").description("Boiler CLI");
const boilerplates = getFoldersName('starters')

program.action(() => {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'type',
        message: ' Which boilerplate do you need?',
        loop: false,
        choices: boilerplates 
      },
    ])
    .then((boilerplate) => {
      copyAndPastFolder(boilerplate.type)
    });
});

program.parse(process.argv);
