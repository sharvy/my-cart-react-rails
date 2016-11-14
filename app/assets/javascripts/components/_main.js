var Main = React.createClass({
  render: function() {
    return React.DOM.div({
      className: 'main'
    },
      React.createElement(Header),
      React.createElement(Body)
    );
  }
});