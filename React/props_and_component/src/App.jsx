import { useState } from "react";
import "./App.css";
import CustumizableButton from "./components/CustumizableButton";
import InputBox from "./components/InputBox";
import Display from "./components/Display";
function App() {
  const [text, setText] = useState("");
  return (
    <div>
      {/* Button that accepts name and color props to show its label and bg color */}
      <CustumizableButton name={"Primary Button"} color={"blue"} />
      <CustumizableButton name={"Secondary Button"} color={"green"} />
      <div >
        <h2>State Lifting</h2>
        <InputBox onChange={setText} />
        <Display text={text} />
      </div>
    </div>
  );
}

export default App;
