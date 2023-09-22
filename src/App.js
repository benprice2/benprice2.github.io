import './css/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import WeatherApp from './pages/WeatherApp';



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={Home}/>
        <Route path='/WeatherApp' element={WeatherApp}/>
      </Routes>
    </BrowserRouter>
  );
}
