import React, { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home"
import {ToastContainer} from 'react-toastify';
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./style/Style.scss"
import Skill from "./pages/Skill";
import Site from "./pages/Site";
import Contact from "./components/Contact";

const App = () => {
  const [todos, setTodos] = useState([])

  useEffect(()=>{
    fetch("http://localhost:5000/api/todo")
    .then((res) => res.json())
    .then((data)=>{
      console.log(data);
      setTodos(data);
    });
  },[]);
  return (
    <>
      <ToastContainer
        position="bottom-right"
        theme="light"
        pauseOnHover
        autoClose={2000}
      />
        <Header />
        <div className="container">
          <Home />
          <Skill />
          <Site />
          <Contact />
        </div>
        <Footer />
    </>
  );
};

export default App;