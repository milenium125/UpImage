import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UpImage from './components/UpImages'
import ShowImage from './components/ShowImage'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<UpImage />} />
        <Route path='/image/:name' element={<ShowImage />} />
      </Routes>
    </Router>
  );
}

export default App;
