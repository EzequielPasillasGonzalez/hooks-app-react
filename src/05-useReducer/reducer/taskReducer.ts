interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TaskState {
  todos: Todo[];
  length: number;
  completed: number;
  pending: number;
}

export type TaskAction =
  | { type: "ADD_TODO"; payload: string }
  | { type: "TOGLE_TODO"; payload: number }
  | { type: "DELETE_TODO"; payload: number };

//**  Siempre recibe dos parametros y siempre debe de
// ** devolver el primer tipo que recibe
// const taskReducer = (state, action): state => { return state }

export const getTasksInitialState = (): TaskState => {
  return {
    todos: [],
    completed: 0,
    length: 0,
    pending: 0,
  };
};

export const taskReducer = (
  state: TaskState,
  action: TaskAction,
): TaskState => {
  switch (action.type) {
    case "ADD_TODO": {
      const newTodo: Todo = {
        id: Date.now(),
        text: action.payload.trim(),
        completed: false,
      };

      // ! NO se puede modificar el state asi:
      // state.todos.push(newTodo);

      // ** Asi si se puede modificar el state
      const todos = [...state.todos, newTodo];
      return {
        ...state,
        todos,
        length: todos.length,
        completed: todos.filter((todo) => todo.completed).length,
        pending: todos.filter((todo) => !todo.completed).length,
      };
    }

    case "DELETE_TODO":
      const todos = state.todos.filter((todo) => todo.id != action.payload);

      return {
        ...state,
        todos,
        length: todos.length,
        completed: todos.filter((todo) => todo.completed).length,
        pending: todos.filter((todo) => !todo.completed).length,
      };

    case "TOGLE_TODO": {
      const newTodos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, completed: !todo.completed };
        }

        return todo;
      });
      return {
        ...state,
        todos: newTodos,
        length: newTodos.length,
        completed: newTodos.filter((todo) => todo.completed).length,
        pending: newTodos.filter((todo) => !todo.completed).length,
      };
    }

    default:
      return state;
  }
};
