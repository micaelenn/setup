const createRoute = (plop) => {
    plop.setGenerator('route', {
        description: 'new route structure',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: `Enter the route name:`,
                suffix: ' (separate words by dash or space)'.gray,
                validate: (input) => {
                    const pattern = new RegExp(/^[a-zA-ZÀ-ÿ][a-zA-ZÀ-ÿ0-9-\s]+$/);
                    const message =
                        `Should contain only letters, digits and dashes, and must start with a letter`
                            .red;
                    return pattern.test(input) ? true : message;
                },
                filter: (input) => {
                    return input.toLowerCase().replace(/ /g, '-') // slug
                },
            },
        ],
        actions: (data) => {
            const actions = [];

            actions.push({
                type: 'add',
                templateFile: './plop/templates/route/route.hbs',
                path: './app/{{ lowerCase name }}.tsx',
            });

            return actions;
        },
    });
};

module.exports = createRoute;