// ./client/src/actions.js
module.exports = {
  loadTasks,
};

function loadTasks() {
  return (dispatch) => {
    $.ajax({
      url: '/api/tasks.json',
      dataType: 'json',
      success: (res) => {
        dispatch(tasksloaded(res.tasks));
      },
      error: (xhr, status, err) => {
        console.log('/api/tasks.json', status, err.toString());
      },
    });
  };
}

function tasksloaded(tasks) {
  return { type: 'TASKS_LOADED', data: tasks };
}
