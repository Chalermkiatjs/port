
import './App.css';
import Navbar from './component/Navbar'
// import Home from './component/Home'
import About from './component/About'
import Work from './component/Work'
function Homepage(){
  return (
    <>
    <Navbar />
    {/* <Home/> */}
    <About />
    <Work/>
    </>
  );
}



export default Homepage;
