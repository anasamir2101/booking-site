import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Bus from './components/sidebar_components/Bus';
import Flights from './components/sidebar_components/Flights';
import Car from '../src/components/sidebar_components/Car';
import Train from './components/sidebar_components/Train';
import Hotels from './components/sidebar_components/Hotels';
import Events from './components/sidebar_components/Events';
import Tours from './components/sidebar_components/Tours';
import Movies from './components/sidebar_components/Movies';

function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <Routes>
        <Route path='/' element={<Bus />} />
        <Route path='/bus' element={<Bus />} />
        <Route path='/flights' element={<Flights />} />
        <Route path='/train' element={<Train />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/car' element={<Car />} />
        <Route path='/hotels' element={<Hotels />} />
        <Route path='/events' element={<Events />} />
        <Route path='/tours' element={<Tours />} />
      </Routes>
    </>
  );
}

export default App;
