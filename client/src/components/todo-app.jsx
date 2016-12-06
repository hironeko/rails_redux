// ./client/src/components/todo-app.jsx
import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions.js';

import TaskList from './task-list.jsx';
import LoadingIndicator from './loading-indicator.jsx';


// react-reduxのconnectを使うとReduxのsubscribeが必要ないらしい。 
// todoのリストはtask-listコンポーネントで表示させる。

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(actions.loadTasks())
  }

  render() {
    return (
      <div>
        {this.props.isLoading ? <LoadingIndicator /> : null}
        <TaskList tasks={this.props.tasks} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { tasks, isLoading } = state;
  return {
    tasks,
    isLoading,
  };
}

export default connect(mapStateToProps)(TodoApp);
