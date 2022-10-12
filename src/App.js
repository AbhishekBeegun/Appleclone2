import {BrowserRouter ,Routes ,Route} from 'react-router-dom';
import Home from './Home';
import Iphone from './Iphone';
import Soon from './Soon';


function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route exact path ="/" element ={<Home/>}/>
    <Route exact path ="/iphone14" element ={<Iphone/>}/>
    <Route exact path ="/*" element={<Soon/>}/>
    </Routes>
    </BrowserRouter>
   
    
  );
}

export default App;
