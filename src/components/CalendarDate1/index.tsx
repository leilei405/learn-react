import React, { useEffect, useImperativeHandle, useRef, useState } from "react";
import { monthNames } from "./data";
import "./index.css";

// 日历组件props类型
interface CalendarProps {
  value?: Date;
  onChange?: (date: Date) => void;
}

// 提供ref来暴露一些Calendar组件的api
export interface CalendarRef {
  getDate: () => Date;
  setDate: (date: Date) => void;
}

const InternalCalendar: React.ForwardRefRenderFunction<
  CalendarRef,
  CalendarProps
> = (props, ref) => {
  const { value = new Date(), onChange } = props;
  const [date, setDate] = useState(value);

  useImperativeHandle(ref, () => {
    return {
      getDate() {
        return date;
      },
      setDate(date: Date) {
        setDate(date);
      },
    };
  });

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

    // 这个月有多少天
    const daysCount = daysOfMonth(date.getFullYear(), date.getMonth());

    // 这个月第一天是星期几
    const firstDay = firstDayOfMonth(date.getFullYear(), date.getMonth());

    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="empty"></div>);
    }

    for (let i = 1; i <= daysCount; i++) {
      // 点击day的时候，调用bind了对应日期的onChange函数
      const clickHandler = onChange?.bind(
        null,
        new Date(date.getFullYear(), date.getMonth(), i)
      );

      if (i === date.getDate()) {
        days.push(
          <div key={i} onClick={clickHandler} className="day selected">
            {i}
          </div>
        );
      } else {
        days.push(
          <div key={i} onClick={clickHandler} className="day">
            {i}
          </div>
        );
      }
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
};

const Calendar = React.forwardRef(InternalCalendar);

function Test() {
  const calendarRef = useRef<CalendarRef>(null);

  useEffect(() => {
    console.log(calendarRef.current?.getDate().toLocaleDateString());

    setTimeout(() => {
      calendarRef.current?.setDate(new Date(2024, 3, 1));
    }, 3000);
  }, []);

  return (
    <div>
      <Calendar ref={calendarRef} value={new Date("2024-8-15")}></Calendar>
    </div>
  );
}
export default Test;
