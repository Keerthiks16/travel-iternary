import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Create from "./pages/Create";
import OnBoarding from "./pages/OnBoarding";
import Favourites from "./pages/Favourites";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/search" element={<OnBoarding />} />
            <Route path="/create" element={<Create />} />
            <Route path="/favorites" element={<Favourites />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
