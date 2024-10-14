import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginPage } from "./login";
import { ListPage } from "./list";
import { RickAndMortyPage } from "./rick-and-morty";
import { DetailPage } from "./detail";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/list" element={<ListPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/rick-and-morty" element={<RickAndMortyPage />} />
      </Routes>
    </Router>
  );
};
