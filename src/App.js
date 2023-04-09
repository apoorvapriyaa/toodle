import './App.css';
import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import Footer from './components/Footer';
import AddItem from './components/AddItem';
import Heading from './components/Heading';

function App() {
  let initTodo
  if (localStorage.getItem("todos") === null) {
    initTodo = []
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"))
  }

  const onDelete = (todo) => {
    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const addItem = (title, desc) => {
    let sno
    if (todos.length === 0) {
      sno = 0
    } else {
      sno = todos[todos.length - 1].sno + 1
    }
    const myItem = {
      sno: sno,
      title: title,
      description: desc
    }
    setTodos([...todos, myItem])
  }

  const [todos, setTodos] = useState(initTodo)

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])



  return (
    <>
      <div className="workspace my-4">
        <Heading />
        <AddItem addItem={addItem} />
        <TodoList todos={todos} onDelete={onDelete} />
        <Footer />
      </div>
    </>
  );
}

export default App;
