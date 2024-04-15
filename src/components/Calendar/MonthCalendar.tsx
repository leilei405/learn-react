import { Dayjs } from "dayjs";
import { CalendarProps } from ".";

interface MonthCalendarProps extends CalendarProps {}
interface DayInfoProps {
  date: Dayjs;
  currentMonth: boolean;
}

function getAllDays(date: Dayjs) {
  // 获取当月天数
  const daysInMonth = date.daysInMonth();
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
function renderDays(days: DayInfoProps[]) {
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
        >
          {item.date.date()}
        </div>
      );
    }
    rows.push(row);
  }
  return rows.map((row, idx) => (
    <div key={`${Math.random()}-${idx}`} className="calendar-month-body-row">
      {row}
    </div>
  ));
}

function MonthCalendar(props: MonthCalendarProps) {
  const weekList = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];

  // 获取42天的日期
  const allDays = getAllDays(props.value);

  return (
    <div className="calendar-month">
      <div className="calendar-month-week-list">
        {weekList.map((week) => (
          <div className="calendar-month-week-list-item" key={week}>
            {week}
          </div>
        ))}
      </div>
      <div className="calendar-month-body">{renderDays(allDays)}</div>
    </div>
  );
}

export default MonthCalendar;
