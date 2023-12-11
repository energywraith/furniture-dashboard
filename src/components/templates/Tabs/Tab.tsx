"use client";

import { NotificationCounter } from "@/components/common/NotificationCounter";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RefObject, useEffect, useRef } from "react";

interface ITab {
  path: string;
  label: string;
  notificationCount: number;
}

interface TabProps extends ITab {
  onPathChange: (ref: RefObject<HTMLAnchorElement>) => void;
}

const Tab = ({ path, label, notificationCount, onPathChange }: TabProps) => {
  const ref = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === path) {
      onPathChange(ref);
    }
  }, [path, pathname, onPathChange]);

  return (
    <Link
      ref={ref}
      href={path}
      className={`mt-6 text-body-m font-medium pt-2 pb-4 hover:text-gray-700 border-b border-transparent hover:border-gray-700 ${
        pathname === path ? "active text-info-600" : "text-gray-50"
      }`}
    >
      <li className="flex">
        {label}
        {notificationCount > 0 && (
          <NotificationCounter
            className="ml-2"
            count={notificationCount}
            isActive={pathname === path}
          />
        )}
      </li>
    </Link>
  );
};

export { Tab };

export type { ITab };
