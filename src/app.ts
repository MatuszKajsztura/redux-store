import { renderTodos } from './utils';
import * as fromStore from './store';
import { removeTodo } from './store';

const input = document.querySelector('input') as HTMLInputElement;
const button = document.querySelector('button') as HTMLButtonElement;
const destroy = document.querySelector('.unsubscribe') as HTMLButtonElement;
const todoList = document.querySelector('.todos') as HTMLLIElement;


const reducers = {
  todos: fromStore.reducer 
}
const store = new fromStore.Store(reducers);

button.addEventListener(
  'click',
  () => {
    if (!input.value.trim()) return;

    const todo = { label: input.value, complete: false };
    
    store.dispatch(new fromStore.addTodo(todo))

    input.value = '';
  },
  false
);

const fnToUnsubscribe: any = store.subscribe(state => {
  return renderTodos(state.todos.data)
});
// function will be unsubscribed on destroy btn Click:::
destroy.addEventListener('click', fnToUnsubscribe, false);

todoList.addEventListener('click', function(event) {
  const target = event.target as HTMLButtonElement;
  if (target.nodeName.toLowerCase() === 'button') {
    const todo = JSON.parse(target.dataset.todo as any);
    store.dispatch(new fromStore.removeTodo(todo))
  }
});

store.subscribe(state => console.log('STATE: ', state));
