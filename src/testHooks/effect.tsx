import { useEffect, useState } from "react";

async function queryData() {
  const data = await new Promise<number>((resolve) => {
    setTimeout(() => {
      resolve(666);
    }, 2000);
  });
  return data;
}

function EffectCom() {
  const [num, setNum] = useState(0);

  // 之前的函数组件是纯函数，传入 props，返回对应的结果，再次调用，传入 props，依然返回同样的结果。
  // 现在有了 effect 之后，每次执行函数，额外执行了一些逻辑，这些逻辑就是副作用
  useEffect(() => {
    queryData().then((data) => {
      setNum(data);
    });
  }, []);

  return (
    <div>
      <h2>{num}</h2>
      <button onClick={() => setNum((prevNum) => prevNum + 1)}>增加</button>
    </div>
  );
}

export default EffectCom;
