import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Pets from './pages/Pets';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pets" element={<Pets />} />
    </Routes>
  );
}

export default App;
