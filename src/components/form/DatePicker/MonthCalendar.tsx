import { useMemo } from "react";
import { Day } from "./Day";
import { CALENDAR_MONTHS, WEEK_DAYS } from "./consts";
import { isSameDay, isSameMonth } from "./helpers";
import { useCalendar } from "./useCalendar";

interface MonthCalendarProps {
  year: number;
  month: number;
  selectedDate: Date;
  onSelectDate: (date: Date) => void;
}

const MonthCalendar = ({
  year,
  month,
  selectedDate,
  onSelectDate,
}: MonthCalendarProps) => {
  const calendar = useCalendar(month, year);
  const calendarMonthDate = useMemo(
    () => new Date([year, month, 1].join("-")),
    [year, month]
  );

  return (
    <div>
      <div className="bg-neutral-500 rounded-lg py-2.5 flex-grow text-center text-body-m font-semibold">
        {Object.values(CALENDAR_MONTHS)[month - 1]} - {year}
      </div>
      <div className="grid grid-cols-[36px_36px_36px_36px_36px_36px_36px] grid-rows-[36px_36px_36px_36px_36px_36px_36px] text-body-s font-medium text-neutral-700 mt-5 px-2 gap-1 text-center">
        {Object.keys(WEEK_DAYS).map((dayKey) => {
          return (
            <Day key={`${month}-${dayKey}`} disabled>
              {WEEK_DAYS[dayKey as keyof typeof WEEK_DAYS]}
            </Day>
          );
        })}
        {calendar.map((dateArray) => {
          const date = new Date(dateArray.join("-"));
          const isDateSameMonth = isSameMonth(date, calendarMonthDate);
          const isDateSameDay = isSameDay(date, selectedDate);

          return (
            <Day
              key={dateArray.join("-")}
              disabled={!isDateSameMonth}
              selected={isDateSameMonth && isDateSameDay}
              onClick={() => {
                onSelectDate(date);
              }}
            >
              {date.getDay()}
            </Day>
          );
        })}
      </div>
    </div>
  );
};

export { MonthCalendar };
