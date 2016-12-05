// ./client/src/components/todo-app.jsx
import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions.js';

import TaskList from './task-list.jsx';

// react-reduxのconnectを使うとReduxのsubscribeが必要ないらしい。 
// todoのリストはtask-listコンポーネントで表示させる。

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <TaskList tasks={this.props.tasks} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { tasks } = state;
  return {
    tasks,
  };
}

export default connect(mapStateToProps)(TodoApp);

componentDidMount() {
  this.props.dispatch(actions.loadTasks())
}

