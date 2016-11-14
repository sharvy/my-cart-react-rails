var AllItems = React.createClass({

  render: function() {
    var items = this.props.items.map(function(item) {
      return React.DOM.div({
        className: 'item',
        key: item.id
      },
        React.DOM.h2(null, item.name),
        React.DOM.p(null, item.description)
      );
    });

    return React.DOM.div(null, items);
  }
});