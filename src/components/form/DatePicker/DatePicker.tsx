"use client";

import { HTMLProps, useEffect, useState } from "react";
import { Moment } from "moment";
import { DatePickerContent } from "./DatePickerContent";
import { DateRange } from "./types";
import { ChevronIcon } from "@/components/icons";
import { Popup } from "@/components/common/Popup";

interface DatePickerProps extends HTMLProps<HTMLButtonElement> {
  dateRange: DateRange;
  maxDate?: Moment;
  onChangeDate: (date: DateRange) => void;
}

const DatePicker = ({
  disabled,
  dateRange,
  maxDate,
  onChangeDate,
}: DatePickerProps) => {
  const [selectedDateRange, setSelectedDateRange] =
    useState<DateRange>(dateRange);

  const onSelectDate = (date: Moment, onClosePopup: () => void) => {
    setSelectedDateRange((currentDateRange) => {
      if (currentDateRange.endDate === null) {
        onClosePopup();

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
    <Popup
      className="md:relative"
      renderContent={({ isContentVisible, onClosePopup }) =>
        isContentVisible && (
          <DatePickerContent
            maxDate={maxDate}
            selectedDateRange={selectedDateRange}
            onSelectDate={onSelectDate}
            onClosePopup={onClosePopup}
          />
        )
      }
      origin="center"
    >
      {() => (
        <div
          className={`w-72 border border-neutral-700 rounded-md shadow-xs flex justify-between items-center px-4 py-2 text-body-m gap-x-3 ${
            disabled ? "bg-neutral-600 text-neutral-800" : "text-gray-700"
          }`}
        >
          <span>
            {dateRange.startDate.format("D MMM YYYY")} -{" "}
            {dateRange.endDate?.format("D MMM YYYY")}
          </span>
          <ChevronIcon className="w-4 h-4" />
        </div>
      )}
    </Popup>
  );
};

export { DatePicker };
