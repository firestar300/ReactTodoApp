var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoApp = require('TodoApp');

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
  });

  it('should add todo to the todos state on handleAddTodo', () => {
    var todoText = 'test text';
    var todoApp = TestUtils.renderIntoDocument(<TodoApp />);

    todoApp.setState({
      todos: []
    });
    todoApp.handleAddTodo(todoText);

    expect(todoApp.state.todos[0].text).toBe(todoText);
    expect(todoApp.state.todos[0].createdAt).toBeA('number');
  });

  it('should toggle completed value when handleToggle called', () => {
    var todoId = 11;
    var todoData = {
      id: todoId,
      text: 'Test features',
      completed: false,
      createdAt: 0,
      completedAt: undefined
    };
    var todoApp = TestUtils.renderIntoDocument(<TodoApp />);
    todoApp.setState({
      todos: [todoData]
    });

    expect(todoApp.state.todos[0].completed).toBe(false);
    todoApp.handleToggle(todoId);
    expect(todoApp.state.todos[0].completed).toBe(true);
    expect(todoApp.state.todos[0].completedAt).toBeA('number');
  });

  it('should completedAt get removed when toggle from true to false', () => {
    var todoId = 11;
    var todoData = {
      id: todoId,
      text: 'Test features',
      completed: true,
      createdAt: 0,
      completedAt: 100
    };
    var todoApp = TestUtils.renderIntoDocument(<TodoApp />);
    todoApp.setState({
      todos: [todoData]
    });

    expect(todoApp.state.todos[0].completed).toBe(true);
    todoApp.handleToggle(todoId);
    expect(todoApp.state.todos[0].completed).toBe(false);
    expect(todoApp.state.todos[0].completedAt).toNotBeA('number');
  });
});
