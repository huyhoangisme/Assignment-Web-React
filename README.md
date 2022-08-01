# StingSoccer

## Tech stack

- Typescript
- React
- React Router
- Tailwind CSS
- Chakra UI
- React Hook Form
- React Table
- React Query
- React-I18next
- Axios
- Query string
- React Icons

## VS Code configuration

They are highly suggested for the best Developer Experience. Extensions are responsible for:

- Eslint
- Prettier
- Styled Components
- Editorconfig

## Chrome Extensions

- Redux DevTools
- React Developer Tools

## Environment variables

Copy `.env.local` to `.env.development.local` and update it accordingly your local env

- `.env`: Default, all env

- `.env.local`: Override, loaded for all environment except test.
- `.env.development.local`, `.env.development`: Loaded for `yarn start`
- `.env.production.local`, `.env.production`: Loaded for `yarn build`
- `.env.test.local`, `.env.test`: Loaded for `yarn test`

### NOTES

You must create custom environment variables beginning with `REACT_APP_`. Any other variables except NODE_ENV will be ignored to avoid accidentally. These environment variables will be defined for you on process.env. For example, having an environment variable named `REACT_APP_NOT_SECRET_CODE` will be exposed in your JS as `process.env.REACT_APP_NOT_SECRET_CODE`.

Click [here](https://create-react-app.dev/docs/adding-custom-environment-variables/) for more details

## Install & Start

⚠️ Using [Yarn Package Manager](https://yarnpkg.com) is recommended over `npm`.

Create React App with the template

```shell
yarn create react-app --template cra-template-rb my-app
```

Start and check our example app, if you want

```shell
cd my-app
yarn start
```

## Build

```shell
yarn build
```

## Styleguide

- `UpperCamelCase`: class / interface / type / enum / decorator / type parameters
- `lowerCamelCase`: variable / parameter / function / method / property / module alias
- `CONSTANT_CASE`: global constant values, including enum values

References: https://google.github.io/styleguide/tsguide.html

## Reference

### This is created using CRA template

📚 Documentation: [Gitbook](https://cansahin.gitbook.io/react-boilerplate-cra-template/)

🎨 Check the example app: [Demonstrating the features](https://react-boilerplate.github.io/react-boilerplate-cra-template/)
