import { memo, useEffect, useState } from "react";

function Aaa() {
  const [, setNum] = useState(1);

  useEffect(() => {
    setInterval(() => {
      setNum(Math.random());
    }, 2000);
  }, []);

  return (
    <div>
      <MemoBbb count={2}></MemoBbb>
    </div>
  );
}

function Bbb(props: { count: number }) {
  console.log("bbb render");

  return <h2>{props.count}</h2>;
}

// memo 的作用是只有 props 变的时候，才会重新渲染被包裹的组件
const MemoBbb = memo(Bbb);
export default Aaa;
