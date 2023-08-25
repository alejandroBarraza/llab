## Cloning and Running the Application in local

Clone the project into local

Install all the npm packages. Go into the project folder and type the following command to install all npm packages (front end and backend folder)

```bash
npm install
```

In order to run the application int the backend type the following command

```bash
npm start
```

In order to run the application ind the frontend type the following command

```bash
npm run dev
```

The Application backend Runs on **localhost:4000** and frontend runs on **localhost:5173**

## Use of Technologies

The backend is developed using Express.js along with a Sqllite database, making it easier to execute when evaluating. Sequelize is being employed to handle the database, both for queries and migrations.

On the frontend, React is being used in conjunction with Vite and Redux Toolkit. During the project's development, I had to make a last-minute change in Redux due to initially using RTK Query. RTK Query manages states in a cached manner, unlike Redux Toolkit, which was requested in the test for global interface state management. Redux Thunk is also being used for asynchronous tasks.
