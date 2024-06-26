import React from 'react';
import './TodoInput.css';

const TodoInput = ({ newTodo, setNewTodo, handleAddTodo }) => {
  return (
    <div className="todo-input">
      <input 
        type="text" 
        value={newTodo} 
        onChange={(e) => setNewTodo(e.target.value)} 
        placeholder="Add task" 
      />
      <button onClick={handleAddTodo}>Add</button>
    </div>
  );
};

export default TodoInput;
