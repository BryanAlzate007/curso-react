import './App.css'
import { TodoItem } from './TodoItem';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButon';

function App() {
  return (
  <>
    <TodoCounter />
    <TodoSearch />

    <div className='Todo'>
      <TodoList >
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </TodoList>

      <CreateTodoButton />
    </div> 
  </>
  );
}


export default App;
