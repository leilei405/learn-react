import React from "react";
import dayjs from "dayjs";
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
// 日期第一版
// import CalendarDate from "./components/CalendarDate1";
// 日期第二版
// import Calendar from "./components/Calendar";
// import ManageUserList from "./TestApi/manage1";
// import TestComPonent from "./components/Form/TestCom";
// import { RequestCom } from "./TestApi/index3";

// import TestForm from "./TestApi/manage2";
// import UserList from "./TestApi/register";
import { HeartBeat } from "./TestApi/time/心跳组件";
function App() {
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
      {/* <CalendarDate /> */}
      {/* <Calendar
        value={dayjs("2023-11-8")}
        locale="en-US"
        // dateRender={(value) => {
        //   return (
        //     <div>
        //       <p style={{ background: "yellowgreen", height: "300px" }}>
        //         {value.format("YYYY/MM/DD")}
        //       </p>
        //     </div>
        //   );
        // }}
        // dateInnerContent={(value) => {
        //   return (
        //     <div>
        //       <p style={{ background: "yellowgreen", height: "30px" }}>
        //         {value.format("YYYY/MM/DD")}
        //       </p>
        //     </div>
        //   );
        // }}
      /> */}
      {/* <ManageUserList /> */}

      {/* <TestForm /> */}
      {/* <RequestCom /> */}
      <HeartBeat />
    </div>
  );
}

export default App;
