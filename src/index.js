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

var Hello = React.createClass({
  render: function() {
    return <div>Hello {this.props.name}</div>;
  }
});

ReactDOM.render(
  <Hello name="World" />,
  document.getElementById('container')
);
/*
function render() {
  ReactDOM.render(<App />, document.getElementById('appEntrypt'));
}

window.addEventListener('hashchange', render);
render();
*/
