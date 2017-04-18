var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var AddTodo = React.createClass({
  onFormSubmit: function(e) {
    e.preventDefault();
    var {dispatch} = this.props;
    var text = this.refs.text.value;

    if(text.length > 0) {
      this.refs.text.value = '';
      dispatch(actions.addTodo(text));
    } else {
      this.refs.text.focus();
    }
  },
  render: function() {
    var {dispatch} = this.props;

    return(
      <div className="container__footer">
        <form onSubmit={this.onFormSubmit}>
          <input type="text" placeholder="What do you need to do ?" ref="text" />
          <button className="button expanded" type="submit">Add Todo</button>
          <button className="button expanded alert" type="button" onClick={() => {
              dispatch(actions.removeTodos())
            }}>Delete all todos</button>
        </form>
      </div>
    );
  }
});

export default connect()(AddTodo);
