"use client";

import { ChevronIcon } from "@/components/icons";
import { MonthCalendar } from "./MonthCalendar";

import { getNextMonth, getPreviousMonth } from "./helpers";
import { useEffect, useMemo, useState } from "react";
import moment, { Moment } from "moment";
import { DateRange } from "./types";

interface DatePickerProps {
  dateRange: DateRange;
  onChangeDate: (date: DateRange) => void;
}

const DatePicker = ({
  dateRange,
  onChangeDate = () => {},
}: DatePickerProps) => {
  const [selectedDateRange, setSelectedDateRange] =
    useState<DateRange>(dateRange);

  const [selectedMonth, setSelectedMonth] = useState(moment());

  const previousMonth = useMemo(
    () => getPreviousMonth(selectedMonth),
    [selectedMonth]
  );

  const onSelectDate = (date: Moment) => {
    setSelectedDateRange((currentDateRange) => {
      if (currentDateRange.endDate === null) {
        if (currentDateRange.startDate.isAfter(date)) {
          return {
            startDate: date,
            endDate: currentDateRange.startDate,
          };
        }

        return {
          ...currentDateRange,
          endDate: date,
        };
      }

      return {
        startDate: date,
        endDate: null,
      };
    });
  };

  useEffect(() => {
    if (!selectedDateRange.endDate) {
      return;
    }

    onChangeDate(selectedDateRange);
  }, [selectedDateRange]);

  return (
    <div className="shadow-xs border border-neutral-700 flex flex-col p-6 text-gray-700">
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
            setSelectedMonth((selectedMonth) => getNextMonth(selectedMonth))
          }
        >
          <ChevronIcon className="w-4 h-4 -rotate-90" />
        </button>
      </div>
    </div>
  );
};

export { DatePicker };
