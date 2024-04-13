import React, { useEffect } from "react";

const Test1 = () => {
  useEffect(() => {
    // 2023/7/30 00:00:00 ==> 转成日期格式的字符串
    // 7月为啥第二个参数传6呢？
    // 因为Date的month是从0开始计数的,取值是0-11
    console.log(new Date(2023, 6, 30).toLocaleString(), "转成日期格式的字符串");

    // 日期date是从1到31
    // 有个小技巧,当你date传0的时候，取到的是上个月的最后一天
    console.log(new Date(2023, 6, 1).toLocaleString(), "==传1=="); // 2023/7/1
    console.log(new Date(2023, 6, 0).toLocaleString(), "==传0=="); // 2023/6/31
    console.log(new Date(2023, 6, -1).toLocaleString(), "==传-1=="); // 2023/6/29 上个月倒数第二天
    console.log(new Date(2023, 6, -2).toLocaleString(), "==传-2=="); // 2023/6/28 上个月倒数第三天 以此递减

    // 2023年一月31天、二月28天、三月31天
    // 除了日期外，也能通过getFullYear、getMonth拿到年份和月份
    console.log(new Date().getFullYear(), "==拿到年份=="); // 当前年份
    console.log(new Date().getMonth() + 1, "==拿到月份=="); // 当前月份
    console.log(new Date().getDay(), "==拿到星期几=="); // 当前星期几
  }, []);
  return <div>{"3214"}</div>;
};

export default Test1;
