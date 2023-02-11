import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UpImage from './components/UpImages'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<UpImage />} />
      </Routes>
    </Router>
  );
}

export default App;
