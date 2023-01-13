import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

// Components
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';

// Pages
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Pricing from './Pages/Pricing/Pricing';
import Contact from './Pages/ContactUs/Contact';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
