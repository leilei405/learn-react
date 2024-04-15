const dayjs = require("dayjs");

// 拿到这个月的天数
console.log(dayjs("2023-11-1").daysInMonth());

// 拿到这个月的第一天
console.log(dayjs("2023-11-1").startOf("month").format("YYYY-MM-DD"));

// 拿到这个月的最后一天
console.log(dayjs("2023-11-1").endOf("month").format("YYYY-MM-DD"));
