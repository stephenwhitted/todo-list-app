import React, { useState } from 'react';
import { useImmerReducer } from 'use-immer';
import './App.css';
import TodoInput from './TodoInput';
import TodoList from './TodoList';


  const initialState = {
    todos: [],
  };

 
const todoReducer = (draft, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      draft.todos.unshift({
        id: Date.now(),
        text: action.payload,
        completed: false,
        isEditing: false,
      });
      break;
    case 'TOGGLE_COMPLETE':
      const todo = draft.todos.find(todo => todo.id === action.payload);
      todo.completed = !todo.completed;
      break;
    case 'DELETE_TODO':
      draft.todos = draft.todos.filter(todo => todo.id !== action.payload);
      break;
    case 'EDIT_TODO':
      draft.todos.find(todo => todo.id === action.payload).isEditing = true;
      break;
    case 'SAVE_TODO':
      const editingTodo = draft.todos.find(todo => todo.id === action.payload.id);
      editingTodo.text = action.payload.text;
      editingTodo.isEditing = false;
      break;
    default:
      break;
  }
};

const App = () => {
  const [state, dispatch] = useImmerReducer(todoReducer, initialState);
  const [newTodo, setNewTodo] = usestate('');

  const handleAddTodo = () => {
    if (newTodo.trim  ()) {
      dispatch({ type: 'ADD_TODO', payload: newTodo });
      setNewTodo ('');
    
  }
};
  return (
      <div className="todo-app">
        <h1>Create Todo List</h1>
        <TodoInput newTodo={newTodo} setNewTodo={setNewTodo} handleAddTodo={handleAddTodo} />
       <TodoList todos={state.todos} dispatch={dispatch} />
       </div>
  );
};


export default App;