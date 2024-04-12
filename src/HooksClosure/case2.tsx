import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      console.log(count);
      setCount(count + 1);
    }, 1000);
    // 第三种方式解决 count 做为依赖项
    // 这种解法是能解决闭包陷阱的，但在这里并不合适，因为effect里跑的是定时器
    // 每次都重新跑定时器，那定时器就不是每 1s 执行一次了。
  }, [count]);

  return <div>{count}</div>;
}

export default App;
