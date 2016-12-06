// react をinmport
import React from 'react';
// react-dom をimport
import { render } from 'react-dom';
// redux をimport
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import TodoApp from './components/todo-app.jsx';

// reducerを作成し、そのreducerや非同期処理に必要なredux-thunkを持ったStoreを作成。
// 作成されたStoreをreact-reduxのProviderを使ってtodo-appコンポーネントに渡す。

function reducer(state = { tasks: [] }, action) {
  switch (action.type) {
    case 'TASKS_LOADED':
      return Object.assign({}, state, { tasks: action.data });
    case 'TOGGLE_LOADING':
      return Object.assign({}, state, { isLoading: action.data });
    default:
      return state;
  }
}

const reduxStore = createStore(
  reducer,
  applyMiddleware(thunk)
);

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={reduxStore}>
      <TodoApp />
    </Provider>,
    document.getElementById('content')
  );
});
