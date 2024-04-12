import { FC } from "react";

interface AaaProps {
  name: string;
  age: number;
  children: React.ReactNode;
}

const Aaa: FC<AaaProps> = (props) => {
  return (
    <div>
      姓名：{props.name} 年龄： {props.age}
      <div>{props.children}</div>
    </div>
  );
};

function App() {
  return (
    <div>
      <h1>TypeProps-1</h1>
      <Aaa name="张三" age={18} children={<div>组件</div>}></Aaa>
    </div>
  );
}

export default App;
