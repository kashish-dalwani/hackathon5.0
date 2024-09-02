import './App.css';
import Homepage2 from './components/Homepage2';
import Login from './components/Login';
import Register from './components/Register';
import Forget from './components/Forget';
import NewPass from './components/NewPass';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage2 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgetpassword" element={<Forget />} />
        <Route path="/newpassword" element={<NewPass />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
