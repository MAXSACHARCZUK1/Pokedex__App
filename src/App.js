import HomeTrainer from './components/login/HomeTrainer';
import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Pokedex from './components/pokedex/Pokedex';
import PokedexDetail from './components/pokedexDetail/PokedexDetail';
import PrivateRoutes from './components/privateRoutes/PrivateRoutes';


function App() {
  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomeTrainer />} />

          <Route element={<PrivateRoutes />}>
            <Route path="/pokedex" element={<Pokedex />} />
            <Route path="/pokedex/:name" element={<PokedexDetail />} />
          </Route>

        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
