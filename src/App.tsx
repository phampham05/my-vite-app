// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App




// App.tsx
import { useState, useEffect } from 'react';
import './App.css';

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

const App = () => {
  // State để lưu danh sách công việc
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState('');

  // Hàm để thêm công việc vào danh sách
  const addTodo = () => {
    if (!newTodo.trim()) return;
    const newTodoItem: Todo = {
      id: Date.now(), // Tạo ID duy nhất cho mỗi công việc
      text: newTodo,
      completed: false,
    };
    setTodos([...todos, newTodoItem]);
    setNewTodo('');
  };

  // Hàm để xoá công việc khỏi danh sách
  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Hàm để đánh dấu công việc là đã hoàn thành
  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Lưu danh sách công việc vào localStorage khi thay đổi
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  // Đồng bộ danh sách công việc vào localStorage mỗi khi danh sách thay đổi
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="todo-container">
      <h1>Ứng dụng Quản Lý Công Việc</h1>
      <input
        type="text"
        className="todo-input"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Nhập công việc mới"
      />
      <button className="add-btn" onClick={addTodo}>
        Thêm
      </button>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`todo-item ${todo.completed ? 'completed' : ''}`}
          >
            <span
              className="todo-text"
              onClick={() => toggleTodo(todo.id)}
            >
              {todo.text}
            </span>
            <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>
              Xoá
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

