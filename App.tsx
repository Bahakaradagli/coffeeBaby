import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Search from './Search';
import CafeDetail from './CafeDetail';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/:cafeId/:branchId/:drinkId" element={<CafeDetail />} />
      </Routes>
    </Router>
  );
}
