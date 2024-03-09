import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import Project from './components/Project'
import About from './components/About'
import Contact from './components/Contact'
import Resume from './components/Resume'

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/project' element={<Project />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/Contact' element={<Contact />}/>
            <Route path='/Blog' element={<Blog />}/>
          </Routes>
        </div>
      </Router>
     
    </div>
  );
}

export default App;
