import React from "react";
import StateCom from "./testHooks/state";
import EffectCom from "./testHooks/effect";
function App() {
  return (
    <div className="App">
      <h1>useState</h1>
      <StateCom />
      <hr />
      <h1>useEffect</h1>
      <EffectCom />
    </div>
  );
}

export default App;
