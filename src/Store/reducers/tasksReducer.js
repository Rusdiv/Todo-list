const ADD_TASK = 'ADD_TASK';

const initialState = {
  tasks: [
    { name: 'Learn React', text: 'Learn React', checked: true },
    { name: 'Learn React', text: 'Learn React', checked: false },
  ],
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            name: action.newTaskName,
            text: action.newTaskText,
            checked: false,
          },
        ],
      };
    default:
      return state;
  }
};

export const addTaskAC = (newTaskName, newTaskText) => ({
  type: ADD_TASK,
  newTaskName,
  newTaskText,
});

export default tasksReducer;
