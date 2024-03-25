import './TodoItem';
import './App.css';
import { TodoItem } from './TodoItem';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButon';

function App() {
  return (
    <div className="App">
      <TodoCounter />
      <TodoSearch />

      <TodoList >
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </TodoList>

      <CreateTodoButton />
    </div> 
  );
}


export default App;
