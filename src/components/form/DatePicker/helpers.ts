import { CALENDAR_WEEKS, THIS_MONTH, THIS_YEAR } from "./consts";

export const getMonthDays = (month = THIS_MONTH, year = THIS_YEAR) => {
  const months30 = [4, 6, 9, 11];
  const leapYear = year % 4 === 0;
  return month === 2
    ? leapYear
      ? 29
      : 28
    : months30.includes(month)
    ? 30
    : 31;
};

export const getMonthFirstDay = (month = THIS_MONTH, year = THIS_YEAR) => {
  return +new Date(`${year}-${month}-1`).getDay() + 1;
};

export const isDate = (date: Date) => {
  const isDate = Object.prototype.toString.call(date) === "[object Date]";
  const isValidDate = date && !Number.isNaN(date.valueOf());

  return isDate && isValidDate;
};

export const isSameMonth = (date: Date, basedate = new Date()) => {
  if (!(isDate(date) && isDate(basedate))) return false;
  const basedateMonth = +basedate.getMonth() + 1;
  const basedateYear = basedate.getFullYear();
  const dateMonth = +date.getMonth() + 1;
  const dateYear = date.getFullYear();
  return +basedateMonth === +dateMonth && +basedateYear === +dateYear;
};

export const isSameDay = (date: Date, basedate = new Date()) => {
  if (!(isDate(date) && isDate(basedate))) return false;
  const basedateDate = basedate.getDate();
  const basedateMonth = +basedate.getMonth() + 1;
  const basedateYear = basedate.getFullYear();
  const dateDate = date.getDate();
  const dateMonth = +date.getMonth() + 1;
  const dateYear = date.getFullYear();
  return (
    +basedateDate === +dateDate &&
    +basedateMonth === +dateMonth &&
    +basedateYear === +dateYear
  );
};

export const getDateISO = (date = new Date()) => {
  if (!isDate(date)) return null;
  return [date.getFullYear(), +date.getMonth() + 1, +date.getDate()].join("-");
};

export const getPreviousMonth = (month: number, year: number) => {
  const prevMonth = month > 1 ? month - 1 : 12;
  const prevMonthYear = month > 1 ? year : year - 1;
  return { month: prevMonth, year: prevMonthYear };
};

export const getNextMonth = (month: number, year: number) => {
  const nextMonth = month < 12 ? month + 1 : 1;
  const nextMonthYear = month < 12 ? year : year + 1;
  return { month: nextMonth, year: nextMonthYear };
};

export const getCalendar = (month = THIS_MONTH, year = THIS_YEAR) => {
  const monthDays = getMonthDays(month, year);
  const monthFirstDay = getMonthFirstDay(month, year);

  const daysFromPrevMonth = monthFirstDay - 1;
  const daysFromNextMonth =
    CALENDAR_WEEKS * 7 - (daysFromPrevMonth + monthDays);

  const { month: prevMonth, year: prevMonthYear } = getPreviousMonth(
    month,
    year
  );
  const { month: nextMonth, year: nextMonthYear } = getNextMonth(month, year);
  const prevMonthDays = getMonthDays(prevMonth, prevMonthYear);

  const prevMonthDates = [...new Array(daysFromPrevMonth)].map((n, index) => {
    const day = index + 1 + (prevMonthDays - daysFromPrevMonth);
    return [prevMonthYear, prevMonth, day];
  });

  const thisMonthDates = [...new Array(monthDays)].map((n, index) => {
    const day = index + 1;
    return [year, month, day];
  });

  const nextMonthDates = [...new Array(daysFromNextMonth)].map((n, index) => {
    const day = index + 1;
    return [nextMonthYear, nextMonth, day];
  });

  return [...prevMonthDates, ...thisMonthDates, ...nextMonthDates];
};
