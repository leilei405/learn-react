import React, { useRef, useEffect, useImperativeHandle } from "react";

interface GuangProps {
  name: string;
}

interface GuangRef {
  aaa: () => void;
}

const Guang: React.ForwardRefRenderFunction<GuangRef, GuangProps> = (
  props,
  ref
) => {
  console.log(props);
  console.log(ref);

  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(
    ref,
    () => {
      return {
        aaa() {
          inputRef.current?.focus();
        },
      };
    },
    [inputRef]
  );

  return (
    <div>
      <input ref={inputRef}></input>
      <div>{props.name}</div>
    </div>
  );
};

const WrapedGuang = React.forwardRef(Guang);

function App() {
  const ref = useRef<GuangRef>(null);

  useEffect(() => {
    console.log("ref", ref.current);
    ref.current?.aaa();
  }, []);

  return (
    <div className="App">
      <WrapedGuang name="guang" ref={ref} />
    </div>
  );
}

export default App;
