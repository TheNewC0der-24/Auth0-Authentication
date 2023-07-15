import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

// Components
import Header from './Components/Header/Header';
import Welcome from './Components/Welcome';

// Pages
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Contact from './Pages/ContactUs/Contact';

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/welcome" replace />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
