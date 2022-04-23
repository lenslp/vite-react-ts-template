import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// 旧模式
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root'),
// );

// 并发模式
ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
