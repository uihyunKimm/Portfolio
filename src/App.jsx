import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home"
import {ToastContainer} from 'react-toastify';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <>
      <ToastContainer
        position="bottom-right"
        theme="light"
        pauseOnHover
        autoClose={2000}
      />
        <Header />
          <Home />
          <Profile/>
        <Footer />
    </>
  );
};

export default App;