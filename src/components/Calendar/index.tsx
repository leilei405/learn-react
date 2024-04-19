import React, { CSSProperties, FC, ReactNode, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import csn from "classnames";
import MonthCalendar from "./MonthCalendar";
import CalendarHeader from "./CalendarHeader";
import LocaleContext from "./Context/localeContext";
import "./index.scss";

export interface CalendarProps {
  value: Dayjs;
  // style和className用于修改Calendar组件外层容器的样式
  style?: CSSProperties;
  className?: string | string[];

  // 定制日期显示 会完全覆盖日期单元格
  dateRender?: (date: Dayjs) => ReactNode;

  // 定制日期单元格 内容会被添加到单元格内 只在全屏日历模式下生效
  dateInnerContent?: (currentDate: Dayjs) => ReactNode;

  // 日期国际化
  locale?: string;

  // change事件
  onChange?: (date: Dayjs) => void;
}

const Calendar: FC<CalendarProps> = (props) => {
  const { className, style, locale, value, onChange } = props;
  const classNames = csn("calendar", className);
  const [curValue, setCurValue] = useState<Dayjs>(value);
  const [curMonth, setCurMonth] = useState<Dayjs>(value);

  // 改变时间
  function changeDate(date: Dayjs) {
    setCurValue(date);
    setCurMonth(date);
    onChange?.(date);
  }

  // 点击日期单元格
  function selectHandler(date: Dayjs) {
    changeDate(date);
  }

  // 点击日期切换月份到上个月
  function prevMonthHandler() {
    // setCurMonth((prev) => prev.subtract(1, "month"));
    setCurMonth(curMonth.add(1, "month"));
  }

  // 点击日期切换月份到下个月
  function nextMonthHandler() {
    // setCurMonth((prev) => prev.add(1, "month"));
    setCurMonth(curMonth.add(1, "month"));
  }

  // 点击今天
  function todayHandler() {
    const date = dayjs(Date.now());
    changeDate(date);
  }

  return (
    <LocaleContext.Provider
      value={{
        locale: locale || navigator.language,
      }}
    >
      <div className={classNames} style={style}>
        <CalendarHeader
          todayHandler={todayHandler}
          prevMonthHandler={prevMonthHandler}
          curMonth={curMonth}
          nextMonthHandler={nextMonthHandler}
        />
        <MonthCalendar
          {...props}
          value={curValue}
          curMonth={curMonth}
          selectHandler={selectHandler}
        />
      </div>
    </LocaleContext.Provider>
  );
};

export default Calendar;
