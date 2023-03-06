import React, { useContext } from "react";
import Counter from "./components/Counters";
import Navbar from "./components/Navbar";
import { SomeContext } from "./index";

function App() {
  const { name, age } = useContext(SomeContext);
  console.log(name, age);
  return (
    <div className="App">
      <Navbar />
      <Counter />
    </div>
  );
}

export default App;
