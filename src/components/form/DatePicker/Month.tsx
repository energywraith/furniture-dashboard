import { ReactNode } from "react";
import { Day } from "./Day";

interface MonthProps {
  children: ReactNode;
}

const Month = ({ children }: MonthProps) => {
  return (
    <div>
      <div className="bg-neutral-500 rounded-lg py-2.5 flex-grow text-center text-body-m font-semibold">
        {children}
      </div>
      <div className="grid grid-cols-[36px_36px_36px_36px_36px_36px_36px] grid-rows-[36px_36px_36px_36px_36px_36px_36px] text-body-s font-medium text-neutral-700 mt-5 px-2 gap-1 text-center">
        <Day disabled>Pon.</Day>
        <Day disabled>Wt.</Day>
        <Day disabled>Śr.</Day>
        <Day disabled>Czw.</Day>
        <Day disabled>Pt.</Day>
        <Day disabled>Sob.</Day>
        <Day disabled>Niedz.</Day>
        <Day disabled>29</Day>
        <Day disabled>30</Day>
        <Day disabled>31</Day>
        {Array.from(Array(30).keys()).map((day) => (
          <Day key={day + 1} selected={day === 13}>
            {day + 1}
          </Day>
        ))}
        <Day disabled>1</Day>
        <Day disabled>2</Day>
      </div>
    </div>
  );
};

export { Month };
