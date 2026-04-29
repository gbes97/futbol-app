import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import MatchDetail from './MatchDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/partido/:id" element={<MatchDetail />} />
      </Routes>
    </Router>
  );
}

export default App;