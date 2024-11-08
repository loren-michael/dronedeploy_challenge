# DroneDeploy Challenge

Internship challenge for DroneDeploy

## Description

This is a simple application built for DroneDeploy's Intern Challenge. It uses a React frontend with a clean, responsive UI, and displays the provided drone data in card format. The backend uses Rails and PostgreSQL. There is a chat box that uses OpenAI to answer questions about the data provided. I was not able to finish full API service integration, and so instead included all information needed directly in the content in order to get relevant responses.

### Setup

To run this application, first clone the repository to your machine and navigate to the directory and run the following:

```
$ bundle install
```

Once finished installing, you will need to make sure there is data seeded into your database. Do this by navigating to the backend directory and executing the following in your console:

```
$ rails db:migrate db:seed
```

This will reset any data in the database and make sure you have good data to start with.

Then, start up a server to utilize the app:

```
rails s
```

Navigate back to the home directory for the repository and start the React server:

```
npm start --prefix client
```

The application should start in your browser and show you the DroneDeploy Challenge page. You should see 5 boxes that have image information from the database. Clicking on the Show Details button will expand the box to show all of the details, including a mock photo for each that I found. Click the button again to hide the details. At the bottom of the page is a chat that you can use to ask ChatGPT for information about the photos in the database. Unfortunately I was not able to set up full API integration in the time allotted, and instead simply included all of the data in the form of a string within the content tag of the chat creation.

### Future Plans

I plan to integrate a similar application into my portfolio in the future to show that I have learned how to integrate ChatGPT and OpenAI into an application. I would like to return to this project to learn how to get the backend fully integrated with OpenAI.
