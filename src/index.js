import "babel-polyfill";//for flipping IE
import $ from 'jquery';
import jQuery from 'jquery';
var App = require('./app');
var React = require('react');
var ReactDOM = require('react-dom')
//import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
//injectTapEventPlugin();

function render() {
  ReactDOM.render(<App />, document.getElementById('appEntrypt'));
}

window.addEventListener('hashchange', render);
render();


/*
var http = require('http');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello World\n");
});

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(8000);

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:8000/");
*/
