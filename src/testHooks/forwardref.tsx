import { useRef, useEffect, forwardRef, ForwardRefRenderFunction } from "react";

// 定义 Guang 组件，它接受 props 和 ref 作为参数，并返回一个 div 元素
// 该 div 元素内部包含一个 input 元素，该 input 元素的 ref 被设置为传入的 ref

// 不过被 forwardRef 包裹的组件的类型就要用 React.forwardRefRenderFunction 了
// 定义一个泛型，用于接收 props 和 ref，并返回 JSX 结构
const Guang: ForwardRefRenderFunction<HTMLInputElement> = (props, ref) => {
  return (
    <div>
      <input ref={ref}></input>
    </div>
  );
};

// 使用 forwardRef 函数将 Guang 组件包装为 WrapedGuang 组件，使其能够接受 ref
const WrapedGuang = forwardRef(Guang);

// 定义 App 组件
function App() {
  // 创建一个 ref，初始化为 null，该 ref 将用于引用 HTMLInputElement
  const ref = useRef<HTMLInputElement>(null);

  // 使用 useEffect 钩子函数，当组件挂载和更新时，执行括号内的函数
  // 该函数打印当前 ref 引用的元素，并尝试调用其 focus 方法，使其获得焦点
  useEffect(() => {
    console.log("ref", ref.current);
    ref.current?.focus();
  }, []); // 空数组作为依赖项，意味着只在组件挂载时执行一次

  // 返回 App 组件的 JSX 结构
  return (
    <div className="App">
      <WrapedGuang ref={ref} /> {/* 将 ref 传递给 WrapedGuang 组件 */}
    </div>
  );
}

// 导出 App 组件，使其可以在其他文件中被导入和使用
export default App;
