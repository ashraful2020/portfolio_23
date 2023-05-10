import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeTemplate, Sidebar } from "./components";

// All routes
import { Home, About, Project, Blog, Contact, NotFound } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar />
      <ThemeTemplate />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/project" element={<Project />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
