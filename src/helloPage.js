import React from 'react';

var Hello = React.createClass({
  render: function() {
    return (
        <div>
          <input id="myInput" type="text" />
          <h2>Nothing to see here folks</h2>
          <div id="someId">Some content</div>
        </div>
    );
  }
});

module.exports = Hello;
