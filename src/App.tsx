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




import React from "react";
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Welcome to My React App</h1>
        <p>Let’s build something amazing together!</p>
      </header>
      <main className="app-main">
        <h2>Features</h2>
        <ul>
          <li>Responsive Design</li>
          <li>Interactive Components</li>
          <li>Modern UI/UX</li>
        </ul>
      </main>
      <footer className="app-footer">
        <p>&copy; 2025 My React App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
