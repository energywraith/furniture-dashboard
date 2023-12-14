import { RefObject, useEffect } from "react";

interface useClickOutsideProps {
  ref: RefObject<HTMLDivElement>;
  onClickOutside: () => void;
}

const useClickOutside = ({ ref, onClickOutside }: useClickOutsideProps) => {
  useEffect(() => {
    /**
     * Invoke Function onClick outside of element
     */
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClickOutside();
      }
    }
    // Bind
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // dispose
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, onClickOutside]);
};

export { useClickOutside };
