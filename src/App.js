import './App.css';
import Home from './Pages/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SingleCocktail from './Pages/SingleCocktail';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/cocktail/:id" element={<SingleCocktail />} />
      </Routes>
    </Router>
  );
}

export default App;
