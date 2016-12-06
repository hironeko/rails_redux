// ./client/src/actions.js
module.exports = {
  loadTasks,
};

function loadTasks() {
  return (dispatch) => {
    dispatch(toggleLoading(true));
    $.ajax({
      url: '/api/tasks.json',
      dataType: 'json',
      success: (res) => {
        dispatch(tasksloaded(res.tasks));
        // 追加
        dispatch(toggleLoading(false));
        // console.log(res);
      },
      error: (xhr, status, err) => {
        // 追加
        dispatch(toggleLoading(false));
        console.log('/api/tasks.json', status, err.toString());
      },
    });
  };
}

function tasksloaded(tasks) {
  return { type: 'TASKS_LOADED', data: tasks };
}

function toggleLoading(isLoading) {
  return { type: 'TOGGLE_LOADING', data: isLoading };
}


