import { TodoClass } from "./todo-class";

export const TODOS : TodoClass[] = [];

const todo1 = new TodoClass('porco dio');
const todo2 = new TodoClass('non capisco un cazzo');
const todo3 = new TodoClass('di sto corso di merda');

TODOS.push(todo1);
TODOS.push(todo2);
TODOS.push(todo3)

