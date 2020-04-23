# Interview Scheduler

Scheduler is a appointment scheduler app made for students to reserve available appointment times with mentors.
The functionality includes displaying number of appointments remaining per day, viewing scheduled appointments ( with student name and mentor name displayed)We can create a new appointment or edit and delete existing appointments. While actions are being performed from the front-end to the back-end a spinner with said action is displayed to let the user know something is happening. In case of an error, an error message is displayed and the user can close the message to return to previous state.

The front-end is using React, with Normalize.css, classnames and Babel. Components were created in isolation using Storybook. The back-end is PostgresSQL and requests are made using Axios. Unit and integration testing was performed with React and Jest and end-to-end testing with Cypress.

## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

npm start

## Running Jest Test Framework

npm test

## Running Storybook Visual Testbed

npm run storybook

## ScreenShots

Main layout with a couple of appointments
!['Main layout with a couple of appointments']
('https://github.com/notayogilee/scheduler/blob/master/Screenshots/Layout.resized.png')

User creating an appointment

User deleting an appointment

Deleting action spinner

Delete confirmation

Delete error
