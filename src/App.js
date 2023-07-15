import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import { useAuth0 } from '@auth0/auth0-react';

// Components
import Header from './Components/Header/Header';
import Welcome from './Components/Welcome';

// Pages
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Contact from './Pages/ContactUs/Contact';

function App() {

  const { isAuthenticated } = useAuth0();

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={isAuthenticated ? <Home /> : <Navigate to="/" replace />} />
        <Route path="/about" element={isAuthenticated ? <About /> : <Navigate to="/" replace />} />
        <Route path="/contact" element={isAuthenticated ? <Contact /> : <Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
