import React from "react";
// 导入useImperativeHandle钩子函数，它允许我们在父组件中访问子组件的实例方法
import { useRef, useEffect, useImperativeHandle } from "react";

// 定义一个接口RefProps，它有一个方法aaa，这个方法没有参数并且没有返回值
interface RefProps {
  aaa: () => void;
}

// Guang是一个React的ForwardRefRenderFunction组件，它接受props和一个ref作为参数
const Guang: React.ForwardRefRenderFunction<RefProps> = (props, ref) => {
  // 创建一个ref来引用input元素
  const inputRef = useRef<HTMLInputElement>(null);

  // 使用useImperativeHandle钩子函数，将aaa方法暴露给父组件
  useImperativeHandle(
    ref, // 父组件通过ref可以访问到这个方法
    () => {
      return {
        // aaa方法，当被调用时，会使input元素获取焦点
        aaa() {
          inputRef.current?.focus();
        },
      };
    },
    [inputRef] // 当inputRef改变时，aaa方法会被重新创建
  );

  // 渲染一个div元素，包含一个input元素，并将inputRef绑定到这个input元素上
  return (
    <div>
      <input ref={inputRef}></input>
    </div>
  );
};

// 使用React.forwardRef将Guang组件转化为可以接受ref的组件
const WrapedGuang = React.forwardRef(Guang);

// App是主组件
function App() {
  // 创建一个ref来引用WrapedGuang组件实例
  const ref = useRef<RefProps>(null);

  // 使用useEffect钩子函数，当组件挂载时，打印ref.current，并调用其aaa方法
  useEffect(() => {
    console.log("ref", ref.current);
    ref.current?.aaa();
  }, []); // 空依赖数组表示这个useEffect只在组件挂载时执行一次

  // 渲染一个div元素，包含一个WrapedGuang组件，并将ref绑定到这个组件上
  return (
    <div className="App">
      <WrapedGuang ref={ref} />
    </div>
  );
}

// 导出App组件
export default App;
