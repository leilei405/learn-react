import { useEffect, useState } from "react";

function Aaa() {
  const [, setNum] = useState(1);

  useEffect(() => {
    setInterval(() => {
      setNum(Math.random());
    }, 2000);
  }, []);

  return (
    <div>
      <Bbb count={2}></Bbb>
    </div>
  );
}

function Bbb(props: { count: number }) {
  console.log("bbb render");
  return <h2>{props.count}</h2>;
}

export default Aaa;
