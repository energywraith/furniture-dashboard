"use client";

import { ChevronIcon } from "@/components/icons";
import { MonthCalendar } from "./MonthCalendar";

import { getNextMonth, getPreviousMonth } from "./helpers";
import { useMemo, useState } from "react";
import moment from "moment";

const DatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(moment());
  const [selectedMonth, setSelectedMonth] = useState(moment());

  const previousMonth = useMemo(
    () => getPreviousMonth(selectedMonth),
    [selectedMonth]
  );

  console.log(selectedDate);

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
          selectedDate={selectedDate}
          onSelectDate={setSelectedDate}
        />
        <MonthCalendar
          monthPeriod={selectedMonth}
          selectedDate={selectedDate}
          onSelectDate={setSelectedDate}
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
