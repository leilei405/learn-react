import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  // 在这个例子中，副作用操作是设置一个定时器，每隔1000毫秒（1秒）执行一次。
  // 注意，这里的依赖数组为空，这意味着副作用操作只会在组件挂载时执行一次。
  useEffect(() => {
    setInterval(() => {
      // 在控制台打印当前的count值。
      console.log(count);
      // 使用setCount函数来更新count的值，使其增加1。
      setCount(count + 1); // 不更新

      // 第一种方式解决
      // setCount((prevCount) => prevCount + 1); // 更新
      // 第二种方式解决  // 可以用 useReducer 来解决
      // 因为它是 dispatch一个action，不直接引用state，所以也不会形成闭包
      // 第三种方式解决 count 做为依赖项
    }, 1000);
    // 依赖数组为空，表示副作用操作只会在组件挂载时执行一次。
  }, []);

  // 组件的渲染部分，返回一个包含count值的div元素。
  return <div>{count}</div>;
}

export default App;
// 这段代码的主要功能是创建一个计数器，每隔1秒更新一次，并在页面上显示当前的计数值。
// 然而，由于useEffect的依赖数组为空，定时器只会在组件挂载时执行一次，然后就不会再执行了。
// 如果你想让定时器持续执行，你需要在依赖数组中包含count或setCount，
// 这样每当count或setCount改变时，副作用操作就会重新执行。
