import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateNotice from "./pages/CreateNotice"; // Página de criação de comunicados
import Notices from "./pages/Notices"; // Página de listagem de comunicados
import Header from "./Header";

function App() {
  return (
    <Router>
      <Header />
      <div style={{ padding: "16px" }}>
        <Routes>
          <Route path="/list-notices" element={<Notices />} />
          <Route path="/create-notice" element={<CreateNotice />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
