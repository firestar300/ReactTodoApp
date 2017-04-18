var {combineReducers, compose, createStore} = require('redux');
var {searchTextReducer, showCompletedReducer, todosReducer} = require('reducers');

export var configure = (initialState = {}) => {
  var reducer = combineReducers({
    searchText: searchTextReducer,
    showCompleted: showCompletedReducer,
    todos: todosReducer
  });

  var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  var store = createStore(reducer, initialState, composeEnhancers());

  return store;
};
