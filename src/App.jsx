import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css'
import Home from "./Componentes/pages/Home"
import Contact from "./Componentes/pages/Contact"
import Company from "./Componentes/pages/Company"
import NewProject from "./Componentes/pages/NewProject";
import Project from "./Componentes/pages/Project";
import Edit from "./Componentes/pages/Edit"


import Header from "./Componentes/layouts/Header";
import Footer from "./Componentes/layouts/Footer"


function App() {

  return (
    <>
      <Router>
        <Header navItems={["Home", "Company", "Projects", "New Project", "Contact"]} />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/newproject" element={<NewProject />} />
          <Route path="/project/:id" element={<Edit />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
