module.exports = {
	'env': {
		'es6': true,
		'node': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended'
	],
	'globals': {
		'Atomics': 'readonly',
		'SharedArrayBuffer': 'readonly'
	},
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaVersion': 2020,
		'sourceType': 'module',
		'project': './tsconfig.json'
	},
	'plugins': [
		'@typescript-eslint',
		'prettier'
	],
	'rules': {
		'indent': [
			'off'
		],
		'linebreak-style': [
			'error',
			'windows'
		],
		'semi': [
			'error',
			'always'
		],
		'curly': [
			'error',
			'multi'
		],
		'require-await': [
			'error'
		],
		'sort-imports': [
			'error',
			{
				'memberSyntaxSortOrder': ['none', 'single', 'all', 'multiple'],
				'ignoreDeclarationSort': true
			}
		],
		'@typescript-eslint/adjacent-overload-signatures': [
			'error'
		],
		'@typescript-eslint/ban-ts-ignore': [
			'off'
		],
		'@typescript-eslint/consistent-type-definitions': [
			'error',
			'interface'
		],
		'@typescript-eslint/no-explicit-any': [
			'error',
			{
				'ignoreRestArgs': true
			}
		],
		'no-trailing-spaces': [
			'error'
		],
		'@typescript-eslint/explicit-member-accessibility': [
			'error',
			{
				'accessibility': 'no-public'
			}
		],
		'@typescript-eslint/member-delimiter-style': [
			'error',
			{
				'multiline': {
					'delimiter': 'semi'
				}
			}
		],
		'@typescript-eslint/indent': [
			'off'
		],
		'@typescript-eslint/array-type': [
			'error',
			{
				'default': 'array',
				'readonly': 'array'
			}
		],
		'@typescript-eslint/consistent-type-assertions': [
			'error',
			{
				'assertionStyle': 'as',
				'objectLiteralTypeAssertions': 'allow'
			}
		],
		'@typescript-eslint/explicit-function-return-type': [
			'off'
		],
		'@typescript-eslint/no-misused-promises': [
			'error'
		],
		'@typescript-eslint/no-non-null-assertion': [
			'off'
		],
		'@typescript-eslint/explicit-module-boundary-types': [
			'off'
		],
		'prettier/prettier': [
			'error',
			{
				'singleQuote': true,
				'tabWidth': 2,
				'printWidth': 90,
				'useTabs': true,
				'trailingComma': 'none',
				'bracketSpacing': true,
				'arrowParens': 'always',
				'parser': 'typescript',
				'endOfLine': 'crlf'
			}
		]
	}
};