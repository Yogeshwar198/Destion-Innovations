import React, { useContext, useState } from 'react';
import { StoreContext } from '../context/store';




const Todo = () => {
  const [todos, setTodos] = useState([]); // State to store the list of todos
  const [newTodo, setNewTodo] = useState(''); // State for new todo input
  const [editIndex, setEditIndex] = useState(null); // State to track which todo is being edited
  const [editText, setEditText] = useState(''); // State for the text of the todo being edited

  const {sidebarToggle, visible } = useContext(StoreContext)

  // Function to handle adding a new todo
  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]); // Add new todo to the list
      setNewTodo(''); // Clear the input field
    }
  };

  // Function to handle deleting a todo
  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index); // Remove the todo at the given index
    setTodos(updatedTodos); // Update the list of todos
  };

  // Function to handle setting the todo for editing
  const editTodo = (index) => {
    setEditIndex(index); // Set the index of the todo being edited
    setEditText(todos[index]); // Set the current text of the todo
  };

  // Function to handle updating the edited todo
  const updateTodo = () => {
    if (editText.trim() !== '') {
      const updatedTodos = [...todos];
      updatedTodos[editIndex] = editText; // Update the todo text at the given index
      setTodos(updatedTodos); // Update the list of todos
      setEditIndex(null); // Reset the edit index
      setEditText(''); // Clear the edit input field
    }
  };

  return (
    <div className={`p-4 ${visible ? (sidebarToggle ? '' : 'ml-64') : ''}`}>
      <h2 className="text-2xl font-bold mb-4">Todo App</h2>
      <div className="mb-4 text-center">
        <input
          type="text"
          className="border-2 p-2 rounded w-[50vw] outline-none"
          placeholder="Add a new task"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button
          className="bg-black active:bg-slate-700 text-white px-4 py-2 rounded mt-2 ml-4"
          onClick={addTodo}
        >
          Add Todo
        </button>
      </div>

      <ul className="list-disc pl-6">
        {todos.map((todo, index) => (
          <li key={index} className="mb-2 flex justify-between items-center">
            {editIndex === index ? (
              <div className="flex-1 text-center">
                <input
                  type="text"
                  className="border p-2 rounded w-[50vw]"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
              </div>
            ) : (
              <span className="flex-1">{todo}</span>
            )}
            <div className="ml-4">
              {editIndex === index ? (
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded mr-2"
                  onClick={updateTodo}
                >
                  Update
                </button>
              ) : (
                <button
                  className="bg-yellow-700 text-white px-4 py-2 rounded mr-2"
                  onClick={() => editTodo(index)}
                >
                  Edit
                </button>
              )}
              <button
                className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={() => deleteTodo(index)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
