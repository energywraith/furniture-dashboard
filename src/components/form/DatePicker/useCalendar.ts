import { useMemo } from "react";
import { getCalendar } from "./helpers";
import { Moment } from "moment";

const useCalendar = (monthPeriod: Moment) => {
  const calendar = useMemo(() => getCalendar(monthPeriod), [monthPeriod]);

  return calendar;
};

export { useCalendar };
