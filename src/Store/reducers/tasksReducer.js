const ADD_TASK = 'ADD_TASK';
const TOGGLE_CHECK = 'TOGGLE_CHECK';

const initialState = {
  tasks: [{ name: 'Learn React', text: 'Learn React', checked: true, id: 1 }],
};

// const initialState = localStorage.getItem('tasks');

let idCounter = 1;

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
            id: ++idCounter,
          },
        ],
      };
    case TOGGLE_CHECK:
      return {
        ...state,
        tasks: state.tasks.map((item) => {
          if (item.id === action.id) {
            return {
              ...item,
              checked: !item.checked,
            };
          }
          return {
            ...item,
          };
        }),
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

export const toggleCheckAC = (id) => ({
  type: TOGGLE_CHECK,
  id,
});

export default tasksReducer;
