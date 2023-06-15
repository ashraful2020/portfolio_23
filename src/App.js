import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Sidebar, ThemeTemplate } from "./components";

// All routes
import { About, Blog, Contact, Home, NotFound, Project } from "./pages";

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
