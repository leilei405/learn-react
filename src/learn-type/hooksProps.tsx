import React, { FC, useEffect, useRef, useState } from "react";

const Com: FC = () => {
  // useState 一般都会进行类型推断  但是也可以进行手动声明  但是没必要
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState<number>(0);

  // useRef 返回的是一个对象  里面有一个current属性  可以理解为是一个指针
  const inputRef = useRef<HTMLInputElement>(null);
  const numRef = useRef<{ num: number }>();
  useEffect(() => {
    console.log(count1, "===count1===", setCount1(count1 + 1));

    numRef.current = { num: 1 };
    console.log(inputRef.current, "===inputRef===");
    console.log(numRef.current, "===numRef===");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1>{count}</h1>
      <div>
        <input type="text" ref={inputRef} />
      </div>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
    </div>
  );
};

export default Com;
// useRef我们知道，可以保存 dom 引用或者其他内容。
// 所以它的类型也有两种。
// 保存 dom 引用的时候，参数需要传个 null
// 保存其他内容的时候，参数需要传个类型。
// 当传入null的时候，返回的是RefObject，它的current是只读的
// 而不传null的时候，返回的MutableRefObject，它的current就可以改了
// 因为ref既可以保存dom引用，又可以保存其他数据，而保存dom引用又要加上readonly，所以才用null做了个区分。
// 传null就是dom引用，返回 RefObject，不传就是其他数据，返回 MutableRefObject。
// 所以，这就是一种约定，知道传null和不传null的区别就行了
