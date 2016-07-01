import React from 'react'
import Hello from './helloPage'
require('../style.less')

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
