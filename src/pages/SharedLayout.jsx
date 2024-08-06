// SharedLayout.js

// Komponent jest renderowany do ścieżki "/". Zawiera Header i Footer i owija zagnieżdżone ścieżki z odpowiadającymi im stronami.
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Common/Header";
import Footer from "../components/Common/Footer/Footer";
import "./SharedLayout.css"; // Import stylów

const SharedLayout = () => {
  return (
    <div className="sharedLayoutWrapper">
      <Header />
      <main className="contentWrapper">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default SharedLayout;
