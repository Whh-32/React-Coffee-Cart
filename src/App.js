import React from "react";

import "./App.css"
import Header from "./components/Header/Header";
import Navigation from "./components/Header/Navigation/Navigation";
import Slider from "./components/Slider/Slider";
import CategoryContain from "./components/Category/CategoryContain";
import Footer from "./components/Footer/Footer";
import Shop from "./components/Shop/Shop";
import CartProvider from "./components/Context/CartContextProvide";


function App() {
  return (
    <CartProvider>
      <Navigation />
      <Header />
      <Slider />
      <CategoryContain />
      <Shop />
      <Footer />
    </CartProvider>
  );
}

export default App;
