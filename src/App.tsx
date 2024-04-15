import React, { useEffect, useRef } from "react";
// React Hooks 学习
// import StateCom from "./testHooks/state";
// import EffectCom from "./testHooks/effect";
// import ReducerCom from "./testHooks/reducer";
// import NoUseReduceImmerCom from "./testHooks/reducer-no-use-immer";
// import UseReducerImmerCom from "./testHooks/reducer-use-immer";
// import RefCom from "./testHooks/ref";
// import ForwardRefCom from "./testHooks/forwardref";
// import ImperativeHandleCom from "./testHooks/imperativeHanlde";
// import ContextCom from "./testHooks//context";
// import MemoCom1 from "./testHooks/memo1";
// import MemoCom2 from "./testHooks/memo2";
// import MemoComChange from "./testHooks/memoChange";
// import CallbackCom from "./testHooks/callback";
// import MemoCom from "./testHooks/memohooks";

// Hook 的闭包陷阱
// import HookTrap1 from "./HooksClosure/case1";
// import HookTrap3 from "./HooksClosure/case3";

// React 中如何写TS类型
// import TypePropsCom1 from "./learn-type/typeProps1";
// import TypePropsCom2 from "./learn-type/hooksProps";
// import ImperativeHandleCom from "./learn-type/imperativeHandle";

// 组件断点测试
// import LaunchCom from "./launchTest/launch";

// 日期Api测试
// import Test1Com from "./TestApi/Date";

// 组件开发
import CalendarDate, { CalendarRef } from "./components/CalendarDate";
function App() {
  const calendarRef = useRef<CalendarRef>(null);
  useEffect(() => {
    console.log(calendarRef.current?.getDate().toLocaleDateString());

    setTimeout(() => {
      calendarRef.current?.setDate(new Date(2024, 3, 1));
    }, 3000);
  }, []);

  return (
    <div className="App">
      {/* <StateCom /> */}
      {/* <EffectCom /> */}
      {/* <ReducerCom /> */}
      {/* <NoUseReduceImmerCom /> */}
      {/* <UseReducerImmerCom /> */}
      {/* <RefCom /> */}
      {/* <ForwardRefCom /> */}
      {/* <ImperativeHandleCom /> */}
      {/* <ContextCom /> */}
      {/* <MemoCom1 /> */}
      {/* <MemoCom2 /> */}
      {/* <MemoComChange /> */}
      {/* <CallbackCom /> */}
      {/* <MemoCom /> */}
      {/* <HookTrap1 /> */}
      {/* <HookTrap3 /> */}
      {/* <TypePropsCom1 /> */}
      {/* <TypePropsCom2 /> */}
      {/* <ImperativeHandleCom /> */}
      {/* <LaunchCom /> */}
      {/* <Test1Com /> */}
      <CalendarDate
        value={new Date("2023-3-1")}
        onChange={(date: Date) => {
          alert(date.toLocaleDateString());
        }}
      />
      <CalendarDate
        ref={calendarRef}
        value={new Date("2023-8-1")}
        onChange={(date: Date) => {
          alert(date.toLocaleDateString());
        }}
      />
    </div>
  );
}

export default App;
