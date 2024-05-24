import React, { useState, useEffect } from "react";
import { mock } from "./mock";
import { generateListAndPaths } from "./utils";
const App = () => {
  const { paths, listItems } = generateListAndPaths(mock);

  console.log("Paths:", paths);
  console.log("List Items:", listItems);
  return (
    <div>
      <h3>商品信息结构化</h3>
    </div>
  );
};

export default App;
