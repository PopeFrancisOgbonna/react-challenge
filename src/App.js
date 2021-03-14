import Login from './Component/Login';
import './App.css';
import Menu from './Component/Menu';
import { useState } from 'react';

function App() {

  // Dashbord toggler
  const [dashboard, setDashboard] = useState('')
  const handleDashboard = (option) =>{
    setDashboard(option);
  }

  return (
    <div className="App">
      <Login  handleDashboard={handleDashboard} />
      <Menu mode={dashboard} />
    </div>
  );
}

export default App;
