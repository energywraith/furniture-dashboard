import { ChevronIcon } from "@/components/icons";
import { MonthCalendar } from "./MonthCalendar";

import { getNextMonth, getPreviousMonth } from "./helpers";
import { Moment } from "moment";
import { DateRange } from "./types";

interface DatePickerContentProps {
  previousMonth: Moment;
  selectedMonth: Moment;
  selectedDateRange: DateRange;
  onSelectDate: (date: Moment) => void;
  onMonthChange: (date: (currentDate: Moment) => Moment) => void;
}

const DatePickerContent = ({
  previousMonth,
  selectedMonth,
  selectedDateRange,
  onSelectDate,
  onMonthChange,
}: DatePickerContentProps) => {
  return (
    <div className="shadow-xs border border-neutral-700 flex flex-col p-6 text-gray-700">
      <div className="flex gap-x-2 h-full">
        <button
          className="border border-neutral-700 rounded p-2.5 shadow-xs h-fit"
          onClick={() =>
            onMonthChange((selectedMonth) => getPreviousMonth(selectedMonth))
          }
        >
          <ChevronIcon className="w-4 h-4 rotate-90" />
        </button>
        <MonthCalendar
          monthPeriod={previousMonth}
          selectedDateRange={selectedDateRange}
          onSelectDate={onSelectDate}
        />
        <MonthCalendar
          monthPeriod={selectedMonth}
          selectedDateRange={selectedDateRange}
          onSelectDate={onSelectDate}
        />
        <button
          className="border border-neutral-700 rounded p-2.5 shadow-xs h-fit"
          onClick={() =>
            onMonthChange((selectedMonth) => getNextMonth(selectedMonth))
          }
        >
          <ChevronIcon className="w-4 h-4 -rotate-90" />
        </button>
      </div>
    </div>
  );
};

export { DatePickerContent };
