// import { useEffect, useState, useRef, useLayoutEffect } from "react";
import { useState } from "react";
import { useInterval } from "./useInterval";
function App() {
  const [count, setCount] = useState(0);

  const updateCount = () => {
    setCount(count + 1);
  };
  // const ref = useRef(updateCount);

  // useLayoutEffect(() => {
  //   ref.current = updateCount;
  // });

  // useEffect(() => {
  //   const timer = setInterval(() => ref.current(), 1000);

  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);

  useInterval(updateCount, 1000);

  return <div>{count}</div>;
}

// 通过useRef创建ref对象，保存执行的函数
// 每次渲染在useLayoutEffect里更新ref.current的值为最新函数。
// 这样，定时器执行的函数里就始终引用的是最新的 count。
// useEffect只跑一次，保证setIntervel不会重置，是每秒执行一次。
// 执行的函数是从ref.current取的，这个函数每次渲染都会更新，引用着最新的count。
// useLayoutEffect是在渲染前同步执行的，用这个hook能确保在所有useEffect之前执行

export default App;
