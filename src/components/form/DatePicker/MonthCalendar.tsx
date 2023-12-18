import { Day } from "./Day";
import { WEEK_DAYS } from "./consts";
import {
  getMonthLabel,
  getWeekdayLabel,
  isSameDay,
  isSameMonth,
} from "./helpers";
import { DateRange } from "./types";
import { useCalendar } from "./useCalendar";
import { Moment } from "moment";

interface MonthCalendarProps {
  monthPeriod: Moment;
  selectedDateRange: DateRange;
  onSelectDate: (date: Moment) => void;
}

const MonthCalendar = ({
  monthPeriod,
  selectedDateRange,
  onSelectDate,
}: MonthCalendarProps) => {
  const calendar = useCalendar(monthPeriod);

  return (
    <div>
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

          return (
            <Day
              key={date.format()}
              disabled={!isDateSameMonth}
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
