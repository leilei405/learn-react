import { memo, useMemo, useEffect, useState } from "react";

function Aaa() {
  const [, setNum] = useState(1);
  const [count, setCount] = useState<number>(2);

  useEffect(() => {
    setInterval(() => {
      setNum(Math.random());
    }, 2000);
  }, []);

  const count2 = useMemo(() => {
    return count * 10;
  }, [count]);

  return (
    <div>
      <MemoBbb count={count2} setCount={setCount}></MemoBbb>
    </div>
  );
}

interface BbbProps {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

function Bbb(props: BbbProps) {
  const { count, setCount } = props;
  console.log("bbb render");

  return <h2 onClick={() => setCount(count + 2)}>{count}</h2>;
}

// memo 的作用是只有 props 变的时候，才会重新渲染被包裹的组件
const MemoBbb = memo(Bbb);
export default Aaa;
