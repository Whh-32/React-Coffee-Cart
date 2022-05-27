import { Fragment } from "react";

import "./App.css"
import Header from "./components/Header/Header";
import Navigation from "./components/Header/Navigation/Navigation";
import Slider from "./components/Slider/Slider";
import CategoryContain from "./components/Category/CategoryContain";
import Footer from "./components/Footer/Footer";
import Shop from "./components/Shop/Shop";


function App() {
  return (
    <Fragment>
      <Navigation />
      <Header />
      <Slider />
      <CategoryContain />
      <Shop />
      <Footer />
    </Fragment>
  );
}

export default App;
