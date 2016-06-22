import React from 'react'
import Hello from './helloPage'
import Page1 from './page1'

var App = React.createClass({
  render: function() {

    var Child = Page1;

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
