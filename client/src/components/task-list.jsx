// ./client/src/components/task-list.jsx
import React from 'react';

export default class TaskList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        {this.props.tasks.map(task => (
          <li key={task.id}>
            {task.name}
          </li>
        ))}
      </ul>
    );
  }
}
