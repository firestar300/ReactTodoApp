var React = require('react');

var AddTodo = React.createClass({
  onFormSubmit: function(e) {
    e.preventDefault();

    var text = this.refs.text.value;

    if(text.length > 0) {
      this.refs.text.value = '';
      this.props.onAddTodo(text);
    } else {
      this.refs.text.focus();
    }
  },
  render: function() {
    return(
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input placeholder="What do you need to do ?" ref="text" />
          <button className="button expanded" type="submit">Add Todo</button>
        </form>
      </div>
    );
  }
});

module.exports = AddTodo;
