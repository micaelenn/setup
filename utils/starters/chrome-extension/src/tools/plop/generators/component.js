const slugify = require('slugify');

const createComponent = (plop) => {
	plop.setGenerator('component', {
		description: 'Generate boilerplate files for a new component template',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: `What is the component name?`,
				suffix: ' (separate words by dash or space)'.gray,
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

			actions.push({
				type: 'add',
				templateFile: './src/tools/plop/templates/component/styles.hbs',
				path: './src/components/{{ pascalCase name }}/{{ pascalCase name }}.styles.ts',
			});

			actions.push({
				type: 'add',
				templateFile: './src/tools/plop/templates/component/component.hbs',
				path: './src/components/{{ pascalCase name }}/{{ pascalCase name }}.tsx',
			});

			return actions;
		},
	});
};

module.exports = createComponent;
