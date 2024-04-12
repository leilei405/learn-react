import React from "react";
import StateCom from "./testHooks/state";
import EffectCom from "./testHooks/effect";
import ReducerCom from "./testHooks/reducer";
import NoUseReduceImmerCom from "./testHooks/reducer-no-use-immer";
import UseReducerImmerCom from "./testHooks/reducer-use-immer";
function App() {
  return (
    <div className="App">
      <h1>useState</h1>
      <StateCom />
      <hr />
      <h1>useEffect</h1>
      <EffectCom />
      <h1>useReducer</h1>
      <ReducerCom />
      <h1>useReducer-no-use-Immer</h1>
      <NoUseReduceImmerCom />
      <h1>useReducer-use-Immer</h1>
      <UseReducerImmerCom />
    </div>
  );
}

export default App;
