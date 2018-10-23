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
REACT_APP_API_KEY=abcde
REACT_APP_API_URI=https://my-api.com/api
```
Add this line of code in your application to import dotenv:
```
import { config } from 'dotenv'
```
Verify your setup by logging process.env to the console.
And you’re done.

