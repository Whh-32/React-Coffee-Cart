import { Fragment } from "react";
import "./App.css"
import Header from "./components/Header/Header";
import Navigation from "./components/Header/Navigation/Navigation";
import Slider from "./components/Slider/Slider";
import Under from "./components/Ui/Under";


function App() {
  return (
    <Fragment>
      <Navigation />
      <Header />
      <Slider />
      <Under />
    </Fragment>
  );
}

export default App;
