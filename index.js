#!/usr/bin/env node

// external modules
import { program } from "commander";
import inquirer from "inquirer";

// internal modules
import copyAndPastFolder from "./utils/actions.js";

program.version("1.0.0").description("Boiler CLI");

program.action(() => {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'type',
        message: ' Which boilerplate do you need?',
        choices: [
          'Frontend', 
          'Backend', 
          'Fullstack', 
          'Chrome Extension',
          'Sanity Studio',
          'Widget',
          'WP Theme',
          'WP Plugin',
        ],
      },
    ])
    .then((answers) => {
      const boilerplateType = answers.type.toLowerCase().replace(/\s+/g, '-')
      copyAndPastFolder(boilerplateType)
    });
});

program.parse(process.argv);
