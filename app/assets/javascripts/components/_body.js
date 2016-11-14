var Body = React.createClass({
  getInitialState: function() {
    return {
      items: []
    }
  },

  componentDidMount: function() {
    $.getJSON('/api/v1/items.json', (response) => {
      this.setState({
        items: response
      });
    });
  },

  handleSubmit: function(item) {
    console.log(item);
  },

  render: function() {
    return React.DOM.div({
      className: 'body'
    },
      React.createElement(NewItem, {
        handleSubmit: this.handleSubmit
      }),
      React.createElement(AllItems, {
        items: this.state.items
      })
    )
  }
});