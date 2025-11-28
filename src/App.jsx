import { Routes, Route } from "react-router-dom"
import Home from "./components/Home";
import PersonalDetails from "./components/PersonalDetails";
import Links from "./components/Links";
import Skills from "./components/Skills"
import WorkExperience from "./components/WorkExperience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Certifications from "./components/Certifications"

function App() {

  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/personal-details" element={<PersonalDetails />} />
      <Route path="/links" element={<Links />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="work-experience" element={<WorkExperience />} />
      <Route path="projects" element={<Projects />} />
      <Route path="education" element={<Education />} />
      <Route path="certifications" element={<Certifications />} />
    </Routes>
  );
};

export default App
