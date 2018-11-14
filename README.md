Internship Program 2018 Project
===

## Requirements
- [Node.js](https://nodejs.org/en/download/)

## Instalation
To install the dependencies, open the terminal in the project's folder, enter the following line then press `enter`:

```
$ npm install
```

This will create a `node_modules` folder in the root which contains all your dependencies.

## Run the application
To start the application, open the terminal in the project's folder, enter the following line then press `enter`:

```
$ npm start
```
## Loading environment variables
Create a file called “.env” in the root of your repository.
Set up your variables with the format key=value, delimited by line breaks:
```
REACT_APP_API_KEY="yourAPIKeyHere"
REACT_APP_API_URI="http://localhost:3000/"
```

## Conventions

### CSS Variables

For the variables we have the following files:
1. variables-colors.css (for all colors)
2. variables-gradients.css (for all gradients)
3. variables-modifiers.css (for rgba and shadows)

#### Colors
When creating a css Variable for the **colors** file, choose a base color and go three scales up or down in accord to the color being used, adding a suffix, like this:
-darkest
-darker
-dark
-light
-lighter
-lightest

For instance, if we were to create a new color, named `brick`, and after we were to put some variances of `brick`, the result would be like this:

`--brick-darkest`
`--brick-darker`
`--brick-dark`
`--brick`
`--brick-light`
`--brick-lighter`
`--brick-lightest`

#### Gradients
They should be all named with the main colors of the gradient.

#### Modifiers

Here the convention is for rgba and shadows (and some other specific properties that will be used only once), so everything that goes here should have as prefix the BEM of the css class calling the variable, and the property (shadow, for instance).