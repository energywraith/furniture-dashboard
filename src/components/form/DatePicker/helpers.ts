import moment, { Moment } from "moment";
import {
  CALENDAR_MONTHS,
  CALENDAR_MONTHS_SHORT,
  CALENDAR_WEEKS,
  WEEK_DAYS,
} from "./consts";

export const getMonthLabel = (date: Moment, short?: boolean) =>
  short
    ? CALENDAR_MONTHS_SHORT[
        date.format("MMMM") as keyof typeof CALENDAR_MONTHS_SHORT
      ]
    : CALENDAR_MONTHS[date.format("MMMM") as keyof typeof CALENDAR_MONTHS];

export const getWeekdayLabel = (key: string) =>
  WEEK_DAYS[key as keyof typeof WEEK_DAYS];

export const formatDate = (date: Moment) =>
  `${date.format("D")} ${getMonthLabel(date, true)} ${date.format("YYYY")}`;

export const isDate = (date: Moment) => {
  return moment(date).isValid();
};

export const isSameMonth = (date: Moment, basedate = moment()) => {
  if (!isDate(date) || !isDate(basedate)) return false;
  return moment(basedate).isSame(date, "month");
};

export const isSameDay = (date: Moment, basedate = moment()) => {
  if (!isDate(date) || !isDate(basedate)) return false;
  return moment(basedate).isSame(date, "day");
};

export const getPreviousMonth = (date = moment()) => {
  return moment(date).subtract(1, "months");
};

export const getNextMonth = (date = moment()) => {
  return moment(date).add(1, "months");
};

export const getCalendar = (monthPeriod = moment()) => {
  const calendar = [];

  const firstDayOfStartDate = monthPeriod.clone().set("date", 1);

  const startDate = firstDayOfStartDate
    .clone()
    .isoWeekday(1)
    .startOf("isoWeek");
  const endDate = firstDayOfStartDate.clone().endOf("month");

  const day = startDate.clone().subtract(1, "day");

  while (day.isBefore(endDate, "day") || calendar.length < CALENDAR_WEEKS * 7) {
    calendar.push(day.add(1, "day").clone());
  }

  return calendar;
};
