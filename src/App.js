// import logo from './logo.svg';
import './App.css';
import Contact from './Contact';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Project from './Project';
import Nav from './Nav';
import { Route,Routes,BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' exact Component={Home}></Route>
        <Route path='/About' exact Component={About}></Route>
        <Route path='/Skills' exact Component={Skills}></Route>
        <Route path='/Project' exact Component={Project}></Route>
        <Route path='/Contact' exact Component={Contact}></Route>
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
