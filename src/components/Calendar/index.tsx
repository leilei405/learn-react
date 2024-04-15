import React, { FC } from "react";
import { Dayjs } from "dayjs";
import MonthCalendar from "./MonthCalendar";
import CalendarHeader from "./CalendarHeader";
import "./index.scss";

export interface CalendarProps {
  value: Dayjs;
}

const Calendar: FC<CalendarProps> = (props) => {
  return (
    <div className="calendar">
      <CalendarHeader />
      <MonthCalendar {...props} />
    </div>
  );
};

export default Calendar;
