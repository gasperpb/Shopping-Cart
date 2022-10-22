import React, { useState } from "react";
import "./App.css";
import Amazon from "./components/Amazon";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";

function App() {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  return (
    <React.Fragment>
      <Navbar />j
      <Amazon />
      <Cart />
    </React.Fragment>
  );
}

export default App;
