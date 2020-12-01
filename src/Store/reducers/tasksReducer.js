const ADD_TASK = 'ADD_TASK';
const TOGGLE_CHECK = 'TOGGLE_CHECK';
const ADD_TO_LOCAL_STATE = 'ADD_TO_LOCAL_STATE';
const REMOVE_TASK = 'REMOVE_TASK';

let initialState = JSON.parse(localStorage.getItem('tasks'));
let idCounter = 0;

if (initialState & initialState.tasks.length !== 0 ) {
  idCounter = initialState.tasks[initialState.tasks.length - 1].id;
} else {
  initialState = {
    tasks: [{ name: 'Learn React', text: 'Learn React', checked: true, id: 0 }],
  };
}

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_LOCAL_STATE:
      const tasks = JSON.stringify(state);
      localStorage.setItem('tasks', tasks);
      return {
        ...state,
      };
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
    case REMOVE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((item) => item.id !== action.id),
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

export const removeTaskAC = (id) => ({
  type: REMOVE_TASK,
  id,
});

export const addToLocalStateAC = () => ({
  type: ADD_TO_LOCAL_STATE,
});

export default tasksReducer;
