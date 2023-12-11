"use client";

import { CloseIcon, IconProps } from "@/components/icons";
import { HTMLProps, SyntheticEvent, useRef, useState } from "react";

interface InputProps extends HTMLProps<HTMLInputElement> {
  classes?: {
    root?: string;
    input?: string;
  };
  Icon?: React.FC<IconProps>;
}

const Input = ({ type, placeholder, disabled, classes, Icon }: InputProps) => {
  const ref = useRef<HTMLInputElement | null>(null);

  const [hasContent, setHasContent] = useState(false);

  const onClearContent = () => {
    if (!ref.current) return;

    ref.current.value = "";
    setHasContent(false);
  };

  const onInput = (e: SyntheticEvent<HTMLInputElement>) => {
    if (e.currentTarget.value.length > 0) {
      setHasContent(true);
      return;
    }

    setHasContent(false);
  };

  return (
    <div className={`relative ${classes?.root}`}>
      <input
        ref={ref}
        type={type}
        placeholder={placeholder}
        className={`peer text-paragraph-1 w-full py-3 px-4 bg-neutral-200 text-base-black placeholder:text-neutral-900 hover:bg-info-100 focus:outline-info-600 focus:bg-base-white disabled:bg-neutral-600 disabled:text-neutral-800 rounded-s pr-24 ${classes?.input}`}
        disabled={disabled}
        onInput={onInput}
      />
      <div className="absolute inset-y-0 right-0 flex pr-4 divide-x divide-neutral-900 py-2 text-neutral-900 peer-hover:divide-neutral-950 peer-focus:text-base-black peer-focus:divide-base-black peer-disabled:text-neutral-800 peer-disabled:divide-neutral-800">
        {hasContent && (
          <button
            onClick={onClearContent}
            className="px-2 first:pl-0 last:pr-0"
          >
            <CloseIcon className="flex items-center h-full" />
          </button>
        )}
        {Icon && (
          <Icon className="flex items-center h-full px-2 first:pl-0 last:pr-0" />
        )}
      </div>
    </div>
  );
};

export { Input };
