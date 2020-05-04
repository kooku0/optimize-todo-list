export const CREATE = "todo/CREATE";
export const REMOVE = "todo/REMOVE";
export const TOGGLE = "todo/TOGGLE";
export const CHANGE_INPUT = "todo/CHANGE_INPUT";

let autoId = 0;

export function create(text) {
  return {
    type: CREATE,
    payload: {
      id: autoId++,
      text,
      done: false,
    },
  };
}

export function remove(id) {
  return {
    type: REMOVE,
    meta: {
      id,
    },
  };
}

export function toggle(id) {
  return {
    type: TOGGLE,
    meta: {
      id,
    },
  };
}

export function changeInput(input) {
  return {
    type: CHANGE_INPUT,
    meta: {
      input,
    },
  };
}

export const actionCreators = {
  create,
  toggle,
  remove,
  changeInput,
};

// reducers

const initialState = {
  todoItems: [],
  input: "",
};

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE:
      return {
        input: "",
        todoItems: [...state.todoItems, action.payload],
      };
    case REMOVE:
      return {
        ...state,
        todoItems: state.todoItems.filter((todo) => todo.id !== action.meta.id),
      };
    case TOGGLE:
      return {
        ...state,
        todoItems: state.todoItems.map((todo) => {
          if (todo.id === action.meta.id) {
            todo.done = !todo.done;
          }
          return todo;
        }),
      };
    case CHANGE_INPUT:
      return {
        ...state,
        input: action.meta.input,
      };
    default:
      return state;
  }
}
