// 日期组件的国际化配置
export interface CalendarType {
    formatYear: string;
    formatMonth: string;
    today: string;
    month: {
        January: string;
        February: string;
        March: string;
        April: string;
        May: string;
        June: string;
        July: string;
        August: string;       
        September: string;
        October: string;
        November: string;
        December: string;
        // Record 同时该对象还可以包含
        // 其他任意的键值对，键为字符串，值为任意类型
    } & Record<string, any>;
    week: {
        monday: string;
        tuesday: string;
        wednesday: string;
        thursday: string;
        friday: string;
        saturday: string;
        sunday: string;
    } & Record<string, any>
}
