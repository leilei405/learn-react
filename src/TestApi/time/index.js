import React, { useEffect } from "react";
export const HeartBeat = () => {
  useEffect(() => {
    let timer = 0;
    function fn() {
      console.log("hello");
      timer = setTimeout(fn, 1000); // 心跳组件避免使用setInterval,有坑
    }
    timer = setTimeout(fn, 1000);

    return () => {
      clearTimeout(timer);
    };
  });
  return <div>心跳组件</div>;
};
