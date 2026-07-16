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
// const taskReducer = (state, action): state => { return {}}

const taskReducer = (state: TaskState, action: TaskAction): TaskState => {
  return state;
};
