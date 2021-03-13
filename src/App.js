//import React, { useState } from "react";
import "./styles.css";
import Library from "./components/library";
import Header from "./components/header/Header";
import Destaque from "./components/Destaque/Destaque";
import Footer from "./components/Footer/Footer";
import { titulos } from "./booksobj.js";   



export default function App() {

  const books = titulos;

  return (
    <div className="App">
      <Header books={books} />
      <Library books={books} />      
      <Destaque books={books} />
      <Footer />
    </div>
  );
}
// <Header books={titulos} 
// 