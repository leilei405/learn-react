// 跨任意层组件传递数据，我们一般用 Context。
import { createContext, useContext } from "react";

const countContext = createContext({ a: "", b: "" });

function Aaa() {
  return (
    <div>
      <countContext.Provider value={{ a: "1", b: "2" }}>
        <Bbb></Bbb>
      </countContext.Provider>
    </div>
  );
}

function Bbb() {
  const { a } = useContext(countContext);
  return (
    <div>
      test的值为： {a}
      <Ccc></Ccc>
    </div>
  );
}

function Ccc() {
  const { b } = useContext(countContext);
  return <h2>context 的值为：{b}</h2>;
}

export default Aaa;
// 用 createContext 创建 context 对象，用 Provider 修改其中的值，
// function 组件使用 useContext 的 hook 来取值
// class 组件使用 Consumer 来取值。
// 配置数据基本都是用 Context 传递。
