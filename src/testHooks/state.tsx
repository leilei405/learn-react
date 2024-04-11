import { useState } from "react";

function StateCom() {
  // useState 返回一个数组，包含 state 和 setXxx 的 api，一般我们都是用解构语法取。
  const [num1, setNum1] = useState(1);

  // 如果初始状态需要经过复杂计算得到，可以传个函数来计算初始值：
  // 这个函数只能写一些同步的计算逻辑，不支持异步
  const [num, setNum] = useState(() => {
    const num1 = 1 + 2;
    const num2 = 2 + 3;
    return num1 + num2;
  });

  const add = () => {
    setNum((state) => {
      console.log("当前状态值:", state);
      return state + 1;
    });
  };

  return (
    <div>
      <h2>{num1}</h2>
      <button onClick={() => setNum1(num1 + 1)}>增加1</button>
      <h2>{num}</h2>
      <button onClick={add}>增加2</button>
    </div>
  );
}

export default StateCom;
