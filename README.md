# Endless scroll   

This project is made as a part of a recruitment task.  
It was created using React(bootstrapped with [Create React App](https://github.com/facebook/create-react-app)) and Bootstrap CSS. 

## Installing dependencies
Run `$ npm install` from the project root (assuming `npm` installed).

## Running fake REST API

To fully render the page you need to run the fake REST API (or provide a real one). 
Run the fake REST API using JSON Server. (https://www.npmjs.com/package/json-server).  

### Installing the server
Run `$ npm install -g json-server` in terminal (or install & use locally) to install the json API.

### Running the server
Run `$ json-server https://pastebin.com/raw/pX2qKdMp --port 3004` in terminal.
*Notice! If you want/need to use a different host/port, change the URL in file: `config/serverConfig.js`.*

## Running the App
Wait for the fake server to run and then start the App by running `$ npm start` from the project root.

