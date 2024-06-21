import React, { useState } from 'react';
import './TodoItem.css';

const TodoItem = ({ todo, dispatch }) => {
  const [editText, setEditText] = useState(todo.title);

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      {todo.isEditing ? (
        <>
          <input 
            type="text" 
            value={editText} 
            onChange={(e) => setEditText(e.target.value)} 
          />
          <button 
            onClick={() => dispatch({ type: 'SAVE_TODO', payload: { id: todo.id, text: editText } })}
          >
            Save
          </button>
        </>
      ) : (
        <>
          <input 
            type="checkbox" 
            checked={todo.completed} 
            onChange={() => dispatch({ type: 'TOGGLE_COMPLETE', payload: todo.id })} 
          />
          <span>{todo.title}</span>
          <button onClick={() => dispatch({ type: 'EDIT_TODO', payload: todo.id })}>Edit</button>
          <button 
            onClick={() => dispatch({ type: 'DELETE_TODO', payload: todo.id })} 
            disabled={!todo.completed}
          >
            Delete
          </button>
        </>
      )}
    </li>
  );
};

export default TodoItem;
