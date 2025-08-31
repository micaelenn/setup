const createComponent = (plop) => {
	plop.setGenerator('component', {
		description: 'new component structure',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: `Enter the component name:`,
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
		actions: () => {
			const actions = [];

			actions.push({
				type: 'add',
				templateFile: './plop/templates/component/component.hbs',
				path: './components/{{ pascalCase name }}.tsx',
			});

			return actions;
		},
	});
};

module.exports = createComponent;