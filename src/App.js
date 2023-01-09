import React from 'react'
import './App.css';
import TodoApp from './components/todo/TodoApp'
import Counter from './components/counter/Counter';

/*
function App() {
  return (
    <div className="App">
      <TodoApp />
    </div>
  );
}
*/

function App(){
  return (
    <div className='App'>
      <Counter/>
    </div>
  )
}
export default App;
