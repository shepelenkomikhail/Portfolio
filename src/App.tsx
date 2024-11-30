import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main.tsx";
import About from "./pages/About.tsx";
import Projects from "./pages/Projects.tsx";

function App() {

  return (
      <Router basename={"/"}>
          <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/aboutme" element={<About />} />
              <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
  )
}

export default App
