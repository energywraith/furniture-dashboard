import { useMemo } from "react";
import { getCalendar } from "./helpers";
import { THIS_MONTH, THIS_YEAR } from "./consts";

const useCalendar = (month = THIS_MONTH, year = THIS_YEAR) => {
  const calendar = useMemo(() => getCalendar(month, year), [month, year]);

  return calendar;
};

export { useCalendar };
