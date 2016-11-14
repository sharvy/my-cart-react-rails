var Body = React.createClass({
  getInitialState: function() {
    return {
      items: []
    }
  },

  comparator: function(a, b) {
    if (a.created_at < b.created_at)
      return 1;

    if (a.created_at > b.created_at)
      return -1;

    return 0;
  },

  componentDidMount: function() {
    $.getJSON('/api/v1/items.json', (items) => {

      items = items.sort(this.comparator);

      this.setState({
        items: items
      });
    });
  },

  handleSubmit: function(item) {
    var items;

    items = React.addons.update(this.state.items, {
      $push: [item]
    });

    items = items.sort(this.comparator);

    return this.setState({
      items: items
    });
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