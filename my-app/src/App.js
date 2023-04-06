import { Routes ,Route } from 'react-router-dom'; 
import HomePage from "./pages/HomePage.js";
import AboutPage from "./pages/AboutPage.js";
import Navbar from "./components/Navbar/Navbar.js";

import "./App.css";

function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  );
}

export default App;
