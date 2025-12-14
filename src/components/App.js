import React, { useState } from "react";
import "./../styles/App.css";
import Step from "./Step";

const App = () => {
  const [step, setStep] = useState(1);
  return (
    <div id={`step${step}`}>
      {/* Do not remove the main div */}
      {/* <form onSubmit={(e) => e.preventDefault()}> */}
      <Step setStep={setStep} step={step} />
      {/* </form> */}
    </div>
  );
};

export default App;
