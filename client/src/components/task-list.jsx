// ./client/src/components/task-list.jsx
import React from 'react';

export default class TaskList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.tasks.map(task =>
          <li key={task.id}>
            {task.name}
          </li>
        )}
      </ul>
    );
  }
}
