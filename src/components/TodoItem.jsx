const TodoItem = ({ todo, dispatch }) => {
    const [editText, setEditText] = useState(todo.text);
  
    let todoContent;
    if (todo.isEditing) {
      todoContent = (
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
      );
    } else {
      todoContent = (
        <>
          <input 
            type="checkbox" 
            checked={todo.completed} 
            onChange={() => dispatch({ type: 'TOGGLE_COMPLETE', payload: todo.id })} 
          />
          <span>{todo.text}</span>
          <button onClick={() => dispatch({ type: 'EDIT_TODO', payload: todo.id })}>Edit</button>
          <button 
            onClick={() => dispatch({ type: 'DELETE_TODO', payload: todo.id })} 
            disabled={!todo.completed}
          >
            Delete
          </button>
        </>
      );
    }
  
    return (
      <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
        {todoContent}
      </li>
    );
  };
  
  export default TodoItem;
  