# Endless scroll   

This project is made as a part of a recruitment task.  
It was created using React(bootstrapped with [Create React App](https://github.com/facebook/create-react-app)) and Bootstrap CSS. 

## Running fake REST API

To fully render the page you need to run the fake REST API (or provide a real one). 
Run the fake REST API using JSON Server. (https://www.npmjs.com/package/json-server).  

Instal JSON server using 
### `$ npm install -g json-server` in terminal 

And then: 
### `$ json-server https://pastebin.pl/view/raw/e1658aa0 --port 3004` 
*Notice! If you want/need to use a different host/port, change the URL in file: `config/serverConfig.js`.*

## Running the App

Wait for the server to run and then start the App by running `npm start` from the project root.