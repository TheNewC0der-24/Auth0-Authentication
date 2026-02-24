import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from './Components/Header/Header';
import Welcome from './Components/Welcome';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Contact from './Pages/ContactUs/Contact';
import ProtectedRoute from "./ProtectedRoute";

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/welcome" replace />} />

        <Route path="/welcome" element={<Welcome />} />

        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        <Route
          path="/about"
          element={
            <ProtectedRoute>
              <About />
            </ProtectedRoute>
          }
        />

        <Route
          path="/contact"
          element={
            <ProtectedRoute>
              <Contact />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
