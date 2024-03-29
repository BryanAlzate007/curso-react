import React from 'react';
import './App.css'
import { TodoItem } from './TodoItem';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButon';

const defaultTodos = [
  {text: 'Primera tarea', completed: true},
  {text: 'Tomar el curso de trading', completed: false},
  {text: 'tercera tarea', completed: false}
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    } 
  );

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    );
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  };

  return ( 
  <>
    <TodoCounter completed={completedTodos} total={totalTodos} />
    <TodoSearch 
      searchValue={searchValue}
      setSearchValue={setSearchValue}
    />

    <div className='Todo'>
      <TodoList >
        {searchedTodos.map(todo => (
          <TodoItem 
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onCompleted={() => completeTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </div> 
  </>
  );
}


export default App;
