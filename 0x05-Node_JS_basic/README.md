# NodeJS Basics

This project contains tasks for learning the basics of NodeJS.

## Tasks To Complete

- [x] **0. Executing basic JavaScript with NodeJS**<br/>
  [0-console.js](0-console.js) contains a module that exports a function named `displayMessage` which prints the string argument to `STDOUT`.

- [x] **1. Using Process stdin**<br/>
  [1-stdin.js](1-stdin.js) contains a script that will be executed through the command line with the following requirements:
  - Display the message `Welcome to Holberton School, what is your name?` followed by a new line.
  - Allow the user to input their name on a new line.
  - Display `Your name is: INPUT`.
  - When the user ends the program, display `This important software is now closing` followed by a new line.

- [x] **2. Reading a file synchronously with NodeJS**<br/>
  [2-read_file.js](2-read_file.js) contains a module that exports a function named `countStudents` with the following requirements:
  - Accept a path as an argument.
  - Attempt to read the database file synchronously.
  - The database file has the same format as [database.csv](database.csv).
  - If the database is not available, throw an error with the text `Cannot load the database`.
  - If the database is available, log `Number of students: NUMBER_OF_STUDENTS`.
  - Log the number of students in each field and the list in the format: `Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES`.
  - Ignore empty lines in the CSV file.

- [x] **3. Reading a file asynchronously with NodeJS**<br/>
  [3-read_file_async.js](3-read_file_async.js) contains a module that exports a function named `countStudents` with the following requirements:
  - Accept a path as an argument (same as in [2-read_file.js](2-read_file.js)).
  - Attempt to read the database file asynchronously.
  - The database file has the same format as [database.csv](database.csv).
  - Return a Promise.
  - If the database is not available, throw an error with the text `Cannot load the database`.
  - If the database is available, log `Number of students: NUMBER_OF_STUDENTS`.
  - Log the number of students in each field and the list in the format: `Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES`.
  - Ignore empty lines in the CSV file.

- [x] **4. Create a small HTTP server using Node's HTTP module**<br/>
  [4-http.js](4-http.js) contains a script that creates and exports a small HTTP server using the `http` module with the following requirements:
  - Assign the server to the variable `app` and export it.
  - The HTTP server should listen on port 1245.
  - Display `Hello Holberton School!` in the page body for any endpoint as plain text.

- [x] **5. Create a more complex HTTP server using Node's HTTP module**<br/>
  [5-http.js](5-http.js) contains a script that creates and exports a small HTTP server using the `http` module with the following requirements:
  - Assign the server to the variable `app` and export it.
  - The HTTP server should listen on port 1245.
  - Return plain text.
  - For the URL path `/`, display `Hello Holberton School!` in the page body.
  - For the URL path `/students`, display `This is the list of our students` followed by the same content as the file [3-read_file_async.js](3-read_file_async.js) (with and without the database). The name of the database must be passed as an argument to the file.
  - Ignore empty lines in the CSV file.

- [x] **6. Create a small HTTP server using Express**<br/>
  [6-http_express.js](6-http_express.js) contains a script that creates and exports a small HTTP server using the Express module with the following requirements:
  - Assign the server to the variable `app` and export it.
  - The HTTP server should listen on port 1245.
  - Display `Hello Holberton School!` in the page body for the endpoint `/`.

- [x] **7. Create a more complex HTTP server using Express**<br/>
  [7-http_express.js](7-http_express.js) contains a script that creates and exports a small HTTP server using the Express module with the following requirements:
  - Assign the server to the variable `app` and export it.
  - The HTTP server should listen on port 1245.
  - Return plain text.
  - For the URL path `/`, display `Hello Holberton School!` in the page body.
  - For the URL path `/students`, display `This is the list of our students` followed by the same content as the file [3-read_file_async.js](3-read_file_async.js) (with and without the database). The name of the database must be passed as an argument to the file.
  - Ignore empty lines in the CSV file.

- [x] **8. Organize a complex HTTP server using Express**<br/>
  Writing every part of a server within a single file is not sustainable. Create a full server in a directory named [`full_server`](full_server) with the requirements listed below. Since you have used ES6 and Babel in past projects, use `babel-node` to enable ES6 features like `import` or `export`.
  - **8.1 Organize the structure of the server**
    - Create 2 directories within the [full_server](full_server) folder:
      - [controllers](full_server/controllers/)
      - [routes](full_server/routes/)
    - Create a file [full_server/utils.js](full_server/utils.js) with a function named `readDatabase` that accepts a file path as an argument:
      - Read the database asynchronously.
      - Return a promise.
      - If the file is not accessible, reject the promise with the error.
      - If the file can be read, return an object of arrays of the first names of students per field.
  - **8.2 Write the App controller**<br/>
    Inside the file [full_server/controllers/AppController.js](full_server/controllers/AppController.js):
    - Create a class named `AppController`. Add a static method named `getHomepage`.
    - The method accepts `request` and `response` as arguments. It returns a 200 status and the message `Hello Holberton School!`.
  - **8.3 Write the Students controller**<br/>
    Inside the file [full_server/controllers/StudentsController.js](full_server/controllers/StudentsController.js), create a class named `StudentsController`. Add two static methods:
    - The first one is `getAllStudents`:
      - The method accepts `request` and `response` as arguments.
      - Return a status 200.
      - Call the function `readDatabase` from the [utils](full_server/utils.js) file and display on the page:
        - First line: `This is the list of our students`.
        - For each field (ordered alphabetically, case-insensitive), display the number of students in the field and the list of first names (ordered by appearance in the database file) in the format: `Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES`.
      - If the database is not available, return a status 500 and the error message `Cannot load the database`.
    - The second one is `getAllStudentsByMajor`:
      - The method accepts `request` and `response` as arguments.
      - Return a status 200.
      - Use a parameter that the user can pass to the browser `major`. The `major` can only be `CS` or `SWE`. If the user passes another parameter, return a 500 and the error `Major parameter must be CS or SWE`.
      - Call the function `readDatabase` from the [utils](full_server/utils.js) file and display on the page the list of first names for the students (ordered by appearance in the database file) in the specified field `List: LIST_OF_FIRSTNAMES_IN_THE_FIELD`.
      - If the database is not available, return a status 500 and the error message `Cannot load the database`.
  - **8.4 Write the routes**<br/>
    Inside the file [full_server/routes/index.js](full_server/routes/index.js):
    - Link the route `/` to the `AppController`.
    - Link the route `/students` and `/students/:major` to the `StudentsController`.
  - **8.5 Write the server reusing everything you created**<br/>
    Inside the file named [full_server/server.js](full_server/server.js), create a small Express server:
    - Use the routes defined in [full_server/routes/index.js](full_server/routes/index.js).
    - Use port `1245`.
  - **8.6 Update `package.json` (if you are running it from inside the folder `full_server`)**
    - If you are starting node from inside the folder [full_server](full_server/), update the command `dev` to: `nodemon --exec babel-node --presets babel-preset-env ./server.js ../database.csv`.
  - **Warning:**
    - Export your express app at the end of [server.js](full_server/server.js) (`export default app;`).
    - The database filename is passed as an argument to [server.js](full_server/server.js). For testing purposes, retrieve this filename at execution or when needed (when `getAllStudents` or `getAllStudentsByMajor` are called).
  - If you want to add tests to validate your integration, add this file: [.babelrc](.babelrc).
    ```json
    {
      "presets": [["env", {"exclude": ["transform-regenerator"]}]]
    }
    ```

