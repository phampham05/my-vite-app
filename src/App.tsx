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




// src/App.tsx
import { useState } from 'react';
import './App.css'; // Đảm bảo file CSS được nhập vào đây

const App = () => {
  const [count, setCount] = useState<number>(0); // Sử dụng TypeScript với React

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className="App">
      <header className="App-header">
        <h1>React 17+ với TypeScript</h1>
        <p>Đây là một ví dụ đơn giản với React 17 và TypeScript!</p>

        <div className="counter">
          <button className="btn" onClick={decrement}>Giảm</button>
          <span className="count">{count}</span>
          <button className="btn" onClick={increment}>Tăng</button>
        </div>
      </header>
    </div>
  );
};

export default App;
