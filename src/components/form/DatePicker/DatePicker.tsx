"use client";

import { ChevronIcon } from "@/components/icons";
import { MonthCalendar } from "./MonthCalendar";

import { getNextMonth, getPreviousMonth } from "./helpers";
import { useMemo, useState } from "react";
import { THIS_MONTH, THIS_YEAR } from "./consts";

const DatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedMonth, setSelectedMonth] = useState({
    month: THIS_MONTH,
    year: THIS_YEAR,
  });

  const previousMonthToSelected = useMemo(
    () => getPreviousMonth(selectedMonth.month, selectedMonth.year),
    [selectedMonth]
  );

  return (
    <div className="shadow-xs border border-neutral-700 flex flex-col p-6 text-gray-700">
      <div className="flex gap-x-2 h-full">
        <button
          className="border border-neutral-700 rounded p-2.5 shadow-xs h-fit"
          onClick={() =>
            setSelectedMonth((selectedMonth) =>
              getPreviousMonth(selectedMonth.month, selectedMonth.year)
            )
          }
        >
          <ChevronIcon className="w-4 h-4 rotate-90" />
        </button>
        <MonthCalendar
          year={previousMonthToSelected.year}
          month={previousMonthToSelected.month}
          selectedDate={selectedDate}
          onSelectDate={setSelectedDate}
        />
        <MonthCalendar
          year={selectedMonth.year}
          month={selectedMonth.month}
          selectedDate={selectedDate}
          onSelectDate={setSelectedDate}
        />
        <button
          className="border border-neutral-700 rounded p-2.5 shadow-xs h-fit"
          onClick={() =>
            setSelectedMonth((selectedMonth) =>
              getNextMonth(selectedMonth.month, selectedMonth.year)
            )
          }
        >
          <ChevronIcon className="w-4 h-4 -rotate-90" />
        </button>
      </div>
    </div>
  );
};

export { DatePicker };
