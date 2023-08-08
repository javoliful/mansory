# INSTRUCTIONS


## Install the dependencies 

Run `npm install`

## Development server

Run `npm start` for a dev server. Navigate to http://localhost:3000/. The app will automatically reload if you change any of the source files.


## Build

Run `npm build` to build the project. The build artifacts will be stored in the `build/` directory.

## Lint

Run `npm lint` to refactor code witn ESLint.

## Testing enviroment

The code has been deployed in Netlify to testing

https://warm-zuccutto-4e10f8.netlify.app/

## Javascript test: ToDo list

For the Javacript test, you have to reproduce the functionality of "todo_example.gif"

- All necessary resources for this test are in "js_test" folder

- No changes to "index.html" or "css/style.css" are required

- Choose the stack you want, it will be positively valued if you only use pure javascript

- The use of current ECMAScript specifications will be positively valued

- The use of some pattern, prototypes, OOP, class ES6 adds extra value to the test (everything you add will help us to know your javascript skills)

- The folder structure is chosen by you. We give you the entry point "js/app.js" but it's up to you choose another one

- Imagine that the application could grow over time, we don't care if you add a structure that is a bit elaborate and more complex than necessary


### Js test requirements

- The "hide" button hides and shows the task list, additionally the button text changes according to its state

- Tasks have three options, up, down, delete

- The "New Task" button should add a new task as the last item in the list

- The "New Task" input has to reset its content when adding a new task


### Extra requeriments

- Add a actions manage in order to hide the up button for the first position and down button for last position
- Add the possibility to press enter key in "add input" to add todo