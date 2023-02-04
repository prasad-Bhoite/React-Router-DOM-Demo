import Header from "./components/Header";
import Home from "./components/Home";
import  About  from "./components/About";
import Contact from "./components/Contact";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import User from "./components/User";


function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
    <Routes>
       <Route path="/" element = {<Home/>} /> 
       <Route path="/about" element = {<About/>} />
       <Route path="/contact" element = {<Contact/>} />
       <Route path="/user/:id" element = {<User/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
