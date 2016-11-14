var NewItem = React.createClass({
  addItem: function() {

    var newItem = {
      name: this.refs.name.value,
      description: this.refs.description.value
    };

    $.ajax({
      url: '/api/v1/items',
      method: 'POST',
      data: {
        item: newItem
      },
      success: (item) => {
        this.props.handleSubmit(item);
      }
    });
  },

  render: function() {

    return React.DOM.div({
     className: 'new-item'
    },
      React.DOM.input({
        type: 'text',
        ref: 'name',
        placeholder: 'Item name'
      }), React.DOM.input({
        type: 'text',
        ref: 'description',
        placeholder: 'Item description'
      }), React.DOM.button({
        onClick: this.addItem
      }, 'Add Item')
    );
  }
});