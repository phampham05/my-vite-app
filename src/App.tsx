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




import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="app-title">Chào Mừng Bạn Đến Với Ứng Dụng Của Tôi!</h1>
        <p className="app-description">
          Đây là một ví dụ về một ứng dụng React đẹp mắt với CSS hiện đại.
        </p>
        <button className="cta-button">Bắt đầu ngay</button>
      </header>
      <main className="app-main">
        <section className="feature">
          <h2>Chức Năng Nổi Bật</h2>
          <p>Ứng dụng này hỗ trợ các tính năng đặc biệt giúp bạn tiết kiệm thời gian.</p>
        </section>
        <section className="feature">
          <h2>Giao Diện Người Dùng Thân Thiện</h2>
          <p>Chúng tôi luôn chú trọng đến trải nghiệm người dùng với thiết kế tinh tế và dễ sử dụng.</p>
        </section>
      </main>
      <footer className="app-footer">
        <p>&copy; 2025 Ứng Dụng Của Tôi. Tất cả quyền lợi được bảo lưu.</p>
      </footer>
    </div>
  );
};

export default App;

