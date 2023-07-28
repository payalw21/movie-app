import {useState} from 'react';
import Navbar from "./components/NavBar";
import Movies from "./components/Movies";



function App() {
  const [toggle, setToggle] = useState(true);
  function toggleHandler(){
    setToggle(prev => !prev);
  }

  return (
    <div className="App">
      <Navbar toggle={toggle} setToggle={toggleHandler}/>
      <Movies toggle={toggle} />
    </div>
  );
}

export default App;
