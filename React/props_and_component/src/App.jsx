import React from "react";
import "./App.css";
import CustumizableButton from "./components/CustumizableButton";
function App() {
  return (
    <div>
      {/* Button that accepts name and color props to show its label and bg color */}
      <CustumizableButton name={"Primary Button"} color={"blue"} />
      <CustumizableButton name={"Secondary Button"} color={"green"} />
    </div>
  );
}

export default App;
