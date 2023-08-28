
import './App.css';

// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Viewall from './components/Viewall';
import Home from './components/Home';
import Hats from './components/Hats';
import Skate from './components/Skate';
import Eyewear from './components/Eyewear';
import Apparel from './components/Apparel';
import Accessories from './components/Accessories';
import Collabration from './components/Collabration';
import Umsteals from './components/Umsteals';
import About from './components/About';
import Umsteals1 from './components/Umsteals1';
import Topseller from './components/Topseller';
import Newarrival from './components/Newarrival';
import Bestseller from './components/Bestseller';
import Knowmore from './components/Knowmore';
import Latestblock from './components/Latestblock';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
      
        <Routes>
        {/* <Route index='/' element ={ </>} /> */}
        <Route path='/home' element ={ <Home/>} />
          <Route path="Viewall" element={<Viewall/>} />
          <Route path="/hats&caps" element={<Hats/>} />
          <Route path="/skatboad" element={<Skate/>} />
          <Route path="/eyewear" element={<Eyewear/>} />
          <Route path="/apparel" element={<Apparel/>} />
          <Route path="/accessories" element={<Accessories/>} />
          <Route path="/collabrations" element={<Collabration/>} />
          <Route path="/steals" element={<Umsteals/>} />
          <Route path="/about us" element={<About/>} />
          <Route path='/UMSTEALS1' element={<Umsteals1/>} />
          <Route path='/TOPSELLERS2' element={<Topseller/>} />
          <Route path='/NEWARRIVALS3' element={<Newarrival/>} />
          <Route path='/bestseller' element={<Bestseller/>}/>
          <Route path='/knowmore' element={<Knowmore/>}/>
          <Route path='/latestblock' element={<Latestblock/>}></Route>
        </Routes>
      </BrowserRouter>



    </div>

  );
}

export default App;
