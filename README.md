# Interview Scheduler

Scheduler is a appointment scheduler app made for students to reserve available appointment times with mentors.
The functionality includes displaying number of appointments remaining per day, viewing scheduled appointments ( with student name and mentor name displayed)We can create a new appointment or edit and delete existing appointments. While actions are being performed from the front-end to the back-end a spinner with said action is displayed to let the user know something is happening. In case of an error, an error message is displayed and the user can close the message to return to previous state.

The front-end is using React, with Normalize.css, classnames and Babel. Components were created in isolation using Storybook. The back-end is PostgresSQL and requests are made using Axios. Unit and integration testing was performed with React and Jest and end-to-end testing with Cypress.

## Setup

1. Fork this repository, then clone your fork of this repository.
2. Install dependencies using the `npm install` command. 
3. If not installed, fork and clone the scheduler_api at https://github.com/lighthouse-labs/scheduler-api and follow instructions in README for database setup.
4. Start the database server using the scheduler_api which will open at http://localhost:8001.
5. In a different terminal, start the web server using the `npm start` command. The app will be served at http://localhost:8000/.
6. Go to http://localhost:8000/ in your browser.

## Running Webpack Development Server

npm start

## Running Jest Test Framework

npm test

## Running Storybook Visual Testbed

npm run storybook

## ScreenShots

Main layout with a couple of appointments
!['Main layout with a couple of appointments'](https://github.com/notayogilee/scheduler/blob/master/Screenshots/Layout.png?raw=true)

User creating an appointment
![User creating an appointment"](https://github.com/notayogilee/scheduler/blob/master/Screenshots/User_filled_form.png?raw=true)

Deleting action spinner
!['Deleting action spinner'](https://github.com/notayogilee/scheduler/blob/master/Screenshots/Deleting_action.png?raw=true)

Delete confirmation
!['Delete confirmation'](https://github.com/notayogilee/scheduler/blob/master/Screenshots/Delete_confirmation.png?raw=true)

Delete error
!['Delete error'](https://github.com/notayogilee/scheduler/blob/master/Screenshots/Delete_error.png?raw=true)
