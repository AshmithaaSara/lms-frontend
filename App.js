// import './App.css';
import Login from './Pages/login';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import Register from './Pages/Registration/register';
import Homepage from './Homepage/Homepage';
import Course from './Course Page/Course';
import Quiz from './Quiz/Quiz';
import About from './Nav/about';
import Review from './Nav/review';
import Contact from './Nav/contact';


function App() {
  return (
    //  <div className="App">
    //    <Course></Course>
    //  </div>
    <Router>
      <Routes>
        <Route exact path="/" element={<Login/>} />
        <Route path="/register" element={<Register/>} />

        <Route path="/Login"element={<Login/>}/>
        <Route path='/home' element={<Homepage/>}></Route>
        <Route path="/Login" element={<Homepage/>}/>
        <Route path="/Course" element={<Course/>}/>
        <Route path="/Quiz" element={<Quiz/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/review" element={<Review/>}/>
      </Routes>
    </Router>
  );
}

export default App;