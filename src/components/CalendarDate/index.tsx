import React, { useState } from "react";
import { monthNames } from "./data";
import "./index.css";

function Calendar() {
  const [date, setDate] = useState(new Date());
  console.log(date, "===date===");
  console.log(5 * 4);

  // 点击回到上个月
  const handlePrevMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
  };

  // 点击去到下个月
  const handleNextMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
  };

  /**
   *
   * @param year
   * @param month
   * @returns
   */
  // 获取当前月有多少天x
  // 设置日期为下一个月的第一天（通过给月份加1并设置日期为0）
  const daysOfMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  /**
   *
   * @param year
   * @param month
   * @returns
   */
  const firstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };

  /**
   *
   * @returns 渲染日历的日期
   */
  const renderDays = () => {
    // 首先定义个数组，来存储渲染的内容
    const days = [];

    const daysCount = daysOfMonth(date.getFullYear(), date.getMonth());
    const firstDay = firstDayOfMonth(date.getFullYear(), date.getMonth());

    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="empty"></div>);
    }

    for (let i = 1; i <= daysCount; i++) {
      days.push(
        <div key={i} className="day">
          {i}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="calendar">
      <div className="header">
        <button onClick={handlePrevMonth}>&lt;</button>
        <div>
          {date.getFullYear()}年{monthNames[date.getMonth()]}
        </div>
        <button onClick={handleNextMonth}>&gt;</button>
      </div>
      <div className="days">
        <div className="day">日</div>
        <div className="day">一</div>
        <div className="day">二</div>
        <div className="day">三</div>
        <div className="day">四</div>
        <div className="day">五</div>
        <div className="day">六</div>
        {renderDays()}
      </div>
    </div>
  );
}

export default Calendar;
