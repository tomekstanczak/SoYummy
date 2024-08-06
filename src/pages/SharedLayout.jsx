// SharedLayout.js

// Komponent jest renderowany do ścieżki "/". Zawiera Header i Footer i owija zagnieżdżone ścieżki z odpowiadającymi im stronami.
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Common/Header/Header";
import Footer from "../components/Common/Footer";

const SharedLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default SharedLayout;
