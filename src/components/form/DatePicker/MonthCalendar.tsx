import { HTMLProps, useMemo } from "react";
import { Moment } from "moment";
import { Day } from "./Day";
import { WEEK_DAYS } from "./consts";
import {
  getCalendar,
  getMonthLabel,
  getWeekdayLabel,
  isSameDay,
  isSameMonth,
} from "./helpers";
import { DateRange } from "./types";

interface MonthCalendarProps extends HTMLProps<HTMLDivElement> {
  monthPeriod: Moment;
  selectedDateRange: DateRange;
  maxDate?: Moment;
  onSelectDate: (date: Moment) => void;
}

const MonthCalendar = ({
  monthPeriod,
  selectedDateRange,
  maxDate,
  onSelectDate,
  className,
}: MonthCalendarProps) => {
  const calendar = useMemo(() => getCalendar(monthPeriod), [monthPeriod]);

  return (
    <div className={className}>
      <div className="bg-neutral-500 rounded-lg py-2.5 flex-grow text-center text-body-m font-semibold">
        {getMonthLabel(monthPeriod)} - {monthPeriod.format("Y")}
      </div>
      <div className="grid grid-cols-[36px_36px_36px_36px_36px_36px_36px] grid-rows-[36px_36px_36px_36px_36px_36px_36px] text-body-s font-medium text-neutral-700 mt-5 px-2 gap-1 text-center">
        {Object.keys(WEEK_DAYS).map((dayKey) => {
          return (
            <Day key={getWeekdayLabel(dayKey)} disabled>
              {getWeekdayLabel(dayKey)}
            </Day>
          );
        })}
        {calendar.map((date) => {
          const isDateSameMonth = isSameMonth(date, monthPeriod);
          const isDateSameDay =
            isSameDay(date, selectedDateRange.startDate) ||
            (selectedDateRange.endDate &&
              isSameDay(date, selectedDateRange.endDate));
          const isInRange = date.isBetween(
            selectedDateRange.startDate,
            selectedDateRange.endDate
          );
          const isBeforeMaxDate = maxDate ? date.isBefore(maxDate) : true;

          return (
            <Day
              key={date.format()}
              disabled={!isDateSameMonth || !isBeforeMaxDate}
              selected={isDateSameMonth && !!isDateSameDay}
              isInRange={!isDateSameDay && isInRange}
              onClick={() => {
                onSelectDate(date);
              }}
            >
              {date.format("D")}
            </Day>
          );
        })}
      </div>
    </div>
  );
};

export { MonthCalendar };
