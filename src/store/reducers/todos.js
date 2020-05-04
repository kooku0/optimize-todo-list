export const CREATE = "todo/CREATE";
export const REMOVE = "todo/REMOVE";
export const TOGGLE = "todo/TOGGLE";

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

export const actionCreators = {
  create,
  toggle,
  remove,
};

// reducers

const initialState = {
  todoItems: [],
};

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE:
      return {
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
    default:
      return state;
  }
}
