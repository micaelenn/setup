const slugify = require("slugify");

module.exports = (plop) => {
  plop.setGenerator("route", {
    description:
      "Generate a new route with model, service, controller and type files.",
    prompts: [
      {
        type: "input",
        name: "name",
        message: `What is the name of the entity?`,
        suffix: " (separate words by dash or space)".gray,
        validate: (input) => {
          const pattern = new RegExp(/^[a-zA-ZÀ-ÿ][a-zA-ZÀ-ÿ0-9-\s]+$/);
          const message =
            `Should contain only letters, digits and dashes, and must start with a letter`
              .red;
          return pattern.test(input) ? true : message;
        },
        filter: (input) => {
          return slugify(input, {
            lower: true,
            strict: true,
          });
        },
      },
    ],
    actions: () => {
      const actions = [];

      // ADD
      actions.push({
        type: "add",
        templateFile: "./utils/plop/templates/route/model.hbs",
        path: "./app/{{ lowerCase name }}/{{ camelCase name }}.model.ts",
      });

      actions.push({
        type: "add",
        templateFile: "./utils/plop/templates/route/service.hbs",
        path: "./app/{{ lowerCase name }}/{{ camelCase name }}.service.ts",
      });

      actions.push({
        type: "add",
        templateFile: "./utils/plop/templates/route/controller.hbs",
        path: "./app/{{ lowerCase name }}/{{ camelCase name }}.controller.ts",
      });

      actions.push({
        type: "add",
        templateFile: "./utils/plop/templates/route/types.hbs",
        path: "./app/{{ lowerCase name }}/{{ camelCase name }}.types.ts",
      });

      // MODIFY
      actions.push({
        type: "modify",
        pattern: /(\/\/ Internal modules)/g,
        templateFile: "./utils/plop/templates/route/import-route.hbs",
        path: "./app/routes.ts",
      });

      actions.push({
        type: "modify",
        pattern: /(\/\/ Routes)/g,
        templateFile: "./utils/plop/templates/route/use-route.hbs",
        path: "./app/routes.ts",
      });

      
      actions.push({
        type: "modify",
        pattern: /(\/\/ import models)/g,
        templateFile: "./utils/plop/templates/route/import-model.hbs",
        path: "./config/database.ts",
      });

      return actions;
    },
  });
};
