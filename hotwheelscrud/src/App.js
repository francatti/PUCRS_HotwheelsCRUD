import Navbar from './components/Navbar/Navbar';
import CarsList from './pages/CarsList';
import Home from './pages/Home';
import About from './pages/About';
import AddCar from './pages/AddCar';
import Car from './pages/Car';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {

  return (
    <Router>
 
    <div className='flex min-h-screen flex-col bg-primary-100 antialiased' >
      
      <Navbar />
      <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/CarsList" element={<CarsList />} />
      <Route path="/AddCar" element={<AddCar />} />
      <Route path="/cars/:id" element={<Car/>} />
      </Routes>  
    </div>


  </Router>
  );
}