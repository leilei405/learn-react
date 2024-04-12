import { memo, useCallback, useEffect, useState } from "react";

function Aaa() {
  const [, setNum] = useState(1);

  useEffect(() => {
    setInterval(() => {
      setNum(Math.random());
    }, 2000);
  }, []);

  const bCallback = useCallback(() => {
    console.log("callback");
  }, []);

  // 参数传递了一个function，每次都会重新渲染
  // memo 失效了
  // 因为每次 function 都是新创建的
  // 也就是每次 props 都会变，这样 memo 就没用了。
  // 这时候就需要 useCallback

  // 它的作用就是当 deps 数组依赖项不变的时候
  // 始终返回同一个 function，当 deps 变的时候
  // 才把 function 改为新传入的。
  // 这时候你会发现，memo又生效了

  return (
    <div>
      <MemoBbb count={2} callback={bCallback}></MemoBbb>
    </div>
  );
}

function Bbb(props: { count: number; callback: Function }) {
  console.log("bbb render");

  return <h2>{props.count}</h2>;
}

// memo 的作用是只有 props 变的时候，才会重新渲染被包裹的组件
const MemoBbb = memo(Bbb);
export default Aaa;
