import React from 'react'
import Hello from './helloPage'

var App = React.createClass({
  render: function() {

    var Child = Hello;

      return (
        <div>
          <div className="">
            <Child />
          </div>
        </div>
      );
  }
});

module.exports = App;
