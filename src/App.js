import './App.css';
import Homepage2 from './components/Homepage2';
import Login from './components/Login';
import Register from './components/Register';
import {
  Routes,Route
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage2 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
