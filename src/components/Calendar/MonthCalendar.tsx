import { useContext } from "react";
import { Dayjs } from "dayjs";
import { CalendarProps } from ".";
import csn from "classnames";
import LocaleContext from "../../Context/localeContext";
import allLocales from "../../locale";

interface MonthCalendarProps extends CalendarProps {
  selectHandler?: (date: Dayjs) => void;
  curMonth: Dayjs;
}

interface DayInfoProps {
  date: Dayjs;
  currentMonth: boolean;
}

function getAllDays(date: Dayjs) {
  // 获取当月天数
  // const daysInMonth = date.daysInMonth();
  // 获取当月第一天的星期
  const startDate = date.startOf("month");
  // 获取当月第一天的星期
  const day = startDate.day();

  // 固定 6 * 7 个日期
  const daysInfo: Array<DayInfoProps> = new Array(6 * 7);

  // 就是要在之前填充星期日、星期一、星期二，这3天的日期
  // 就是先-1、-2、-3 计算本月第一天之前的日期，然后从第一天开始+1、+2、+3计算之后日期
  for (let i = 0; i < day; i++) {
    daysInfo[i] = {
      // subtract方法就可以计算当前日期 -1、-2、-3 的日期
      // 添加currentMonth标识是否是当前月份的
      date: startDate.subtract(day - i, "day"),
      currentMonth: false,
    };
  }

  // 这个循环就是填充剩下的日期的，从startDate开始+1、+2、+3计算日期
  for (let i = day; i < daysInfo.length; i++) {
    const calcDate = startDate.add(i - day, "day");
    daysInfo[i] = {
      date: startDate.add(i - day, "day"),
      currentMonth: calcDate.month() === date.month(),
    };
  }
  // debugger;
  return daysInfo;
}

// 渲染日历
function renderDays(
  days: DayInfoProps[],
  dateRender: MonthCalendarProps["dateRender"],
  dateInnerContent: MonthCalendarProps["dateInnerContent"],
  value: Dayjs,
  selectHandler: MonthCalendarProps["selectHandler"]
) {
  const rows = [];
  for (let i = 0; i < 6; i++) {
    const row = [];
    for (let j = 0; j < 7; j++) {
      const item = days[i * 7 + j];
      row[j] = (
        <div
          className={
            "calendar-month-body-cell " +
            (item.currentMonth ? "calendar-month-body-cell-current" : "")
          }
          onClick={() => selectHandler?.(item.date)}
        >
          {dateRender ? (
            dateRender(item.date)
          ) : (
            // 定制日期单元格 内容会被添加到单元格内 只在全屏日历模式下生效
            <div className="calendar-month-body-cell-date">
              <div
                className={csn(
                  "calendar-month-body-cell-date-value",
                  value.format("YYYY-MM-DD") === item.date.format("YYYY-MM-DD")
                    ? "calendar-month-body-cell-date-selected"
                    : ""
                )}
              >
                {item.date.date()}
              </div>
              <div className="calendar-month-body-cell-date-content">
                {dateInnerContent?.(item.date)}
              </div>
            </div>
          )}
        </div>
      );
    }
    rows.push(row);
  }
  return rows.map((row) => (
    <div className="calendar-month-body-row">{row}</div>
  ));
}

function MonthCalendar(props: MonthCalendarProps) {
  // 传入到renderDays方法中dateInnerContent, dateRender
  // value传入到renderDays方法中  实现onChange逻辑
  const { curMonth, dateInnerContent, dateRender, value, selectHandler } =
    props;
  const { locale } = useContext(LocaleContext);
  const CalendarLocale = allLocales[locale];

  const weekList = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  // 获取42天的日期
  const allDays = getAllDays(curMonth);

  return (
    <div className="calendar-month">
      <div className="calendar-month-week-list">
        {weekList.map((week) => (
          <div className="calendar-month-week-list-item" key={week}>
            {CalendarLocale.week[week]}
          </div>
        ))}
      </div>
      <div className="calendar-month-body">
        {renderDays(
          allDays,
          dateRender,
          dateInnerContent,
          value,
          selectHandler
        )}
      </div>
    </div>
  );
}

export default MonthCalendar;
