import { useEffect, useRef, useState } from "react";

// useRef 一般是用来存一些不是用于渲染的内容的。
function App() {
  //不会触发重新渲染
  const inputRef = useRef<HTMLInputElement>(null);

  // ref 其实就是一个有 current 属性的对象，除了可以保存 dom 引用，也可以放别的内容
  const numRef = useRef<number>(0);
  const [, forceRender] = useState(0);

  useEffect(() => {
    inputRef.current?.focus();
  });

  return (
    <div>
      <input ref={inputRef}></input>
      <button
        onClick={() => {
          numRef.current += 1;
          // 每次点击按钮，都会触发 forceRender，从而重新渲染组件
          forceRender(Math.random());
        }}
      >
        {numRef.current}
      </button>
    </div>
  );
}

export default App;
