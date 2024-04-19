import React, { FC, useContext } from "react";
import { Dayjs } from "dayjs";
import allLocales from "./locale";
import context from "./Context/localeContext";

interface CalendarHeaderProps {
  curMonth: Dayjs;
  prevMonthHandler: () => void;
  nextMonthHandler: () => void;
  todayHandler: () => void;
}

const CalendarHeader: FC<CalendarHeaderProps> = (props) => {
  const { curMonth, prevMonthHandler, nextMonthHandler, todayHandler } = props;
  const { locale } = useContext(context);
  const CalendarContext = allLocales[locale];
  return (
    <div className="calendar-header">
      <div className="calendar-header-left">
        <div className="calendar-header-icon" onClick={prevMonthHandler}>
          &lt;
        </div>
        <div className="calendar-header-value">
          {curMonth.format(CalendarContext.formatMonth)}
        </div>
        <div className="calendar-header-icon" onClick={nextMonthHandler}>
          &gt;
        </div>
        <button className="calendar-header-btn" onClick={todayHandler}>
          今天
        </button>
      </div>
    </div>
  );
};

export default CalendarHeader;
