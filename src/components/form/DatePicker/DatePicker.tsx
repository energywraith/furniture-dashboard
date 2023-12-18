"use client";

import { useEffect, useMemo, useState } from "react";
import moment, { Moment } from "moment";
import { DatePickerContent } from "./DatePickerContent";
import { DateRange } from "./types";
import { getPreviousMonth } from "./helpers";

interface DatePickerProps {
  dateRange: DateRange;
  onChangeDate: (date: DateRange) => void;
}

const DatePicker = ({ dateRange, onChangeDate }: DatePickerProps) => {
  const [selectedDateRange, setSelectedDateRange] =
    useState<DateRange>(dateRange);

  const [selectedMonth, setSelectedMonth] = useState(
    dateRange.endDate || moment()
  );

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
    <DatePickerContent
      previousMonth={previousMonth}
      selectedMonth={selectedMonth}
      selectedDateRange={selectedDateRange}
      onSelectDate={onSelectDate}
      onMonthChange={setSelectedMonth}
    />
  );
};

export { DatePicker };
