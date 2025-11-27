import './App.css'
import { Routes, Route } from "react-router-dom"
import Home from "./components/Home";
import PersonalDetails from "./components/PersonalDetails";
import Links from "./components/Links";
import Skills from "./components/Skills"

function App() {

  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/personal-details" element={<PersonalDetails />} />
      <Route path="/links" element={<Links />} />
      <Route path="/skills" element={<Skills />} />
    </Routes>
  );
};

export default App
