import { ChevronIcon } from "@/components/icons";
import { Month } from "./Month";

const DatePicker = () => {
  return (
    <div className="w-[739px] h-[354px] shadow-xs border border-neutral-700 flex flex-col p-6 text-gray-700">
      <div className="flex gap-x-2 h-full">
        <button className="border border-neutral-700 rounded p-2.5 shadow-xs h-fit">
          <ChevronIcon className="w-4 h-4 rotate-90" />
        </button>
        <Month>Czerwiec</Month>
        <Month>Lipiec</Month>
        <button className="border border-neutral-700 rounded p-2.5 shadow-xs h-fit">
          <ChevronIcon className="w-4 h-4 -rotate-90" />
        </button>
      </div>
    </div>
  );
};

export { DatePicker };
