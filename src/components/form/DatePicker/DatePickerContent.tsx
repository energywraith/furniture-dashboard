import { HTMLProps, useMemo, useState } from "react";
import { ChevronIcon } from "@/components/icons";
import { MonthCalendar } from "./MonthCalendar";

import { getNextMonth, getPreviousMonth } from "./helpers";
import { Moment } from "moment";
import { DateRange } from "./types";
import moment from "moment";

interface DatePickerContentProps extends HTMLProps<HTMLDivElement> {
  selectedDateRange: DateRange;
  onSelectDate: (date: Moment, onClosePopup: () => void) => void;
  onClosePopup: () => void;
}

const DatePickerContent = ({
  className,
  selectedDateRange,
  onSelectDate,
  onClosePopup,
}: DatePickerContentProps) => {
  const [selectedMonth, setSelectedMonth] = useState(
    selectedDateRange.endDate || moment()
  );

  const previousMonth = useMemo(
    () => getPreviousMonth(selectedMonth),
    [selectedMonth]
  );

  const handleSelectDate = (date: Moment) => {
    onSelectDate(date, onClosePopup);
  };

  return (
    <div
      className={`shadow-xs border bg-base-white border-neutral-700 flex flex-col p-6 text-gray-700 rounded-lg ${className}`}
    >
      <div className="flex gap-x-2 h-full">
        <button
          className="border border-neutral-700 rounded p-2.5 shadow-xs h-fit"
          onClick={() =>
            setSelectedMonth((selectedMonth) => getPreviousMonth(selectedMonth))
          }
        >
          <ChevronIcon className="w-4 h-4 rotate-90" />
        </button>
        <MonthCalendar
          monthPeriod={previousMonth}
          selectedDateRange={selectedDateRange}
          onSelectDate={handleSelectDate}
          className="hidden md:block"
        />
        <MonthCalendar
          monthPeriod={selectedMonth}
          selectedDateRange={selectedDateRange}
          onSelectDate={handleSelectDate}
        />
        <button
          className="border border-neutral-700 rounded p-2.5 shadow-xs h-fit"
          onClick={() =>
            setSelectedMonth((selectedMonth) => getNextMonth(selectedMonth))
          }
        >
          <ChevronIcon className="w-4 h-4 -rotate-90" />
        </button>
      </div>
    </div>
  );
};

export { DatePickerContent };
