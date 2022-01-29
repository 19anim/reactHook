import { useState } from 'react';
import './App.css';
import ColorBox from './components/colorBox';
import Login from './components/login';

function App() {
  const [accounts, setAccounts] = useState([
    { userName: 'admin', passWord: '123', isAdmin: true },
    { userName: 'normaluser', passWord: '456', isAdmin: false }
  ]);

  return (
    <div className="App">
      <Login loginAccounts={accounts} />
    </div >
  );
}

export default App;
