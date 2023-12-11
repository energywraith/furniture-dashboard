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

interface TabProps extends ITab {}

const Tab = ({ path, label, notificationCount }: TabProps) => {
  const ref = useRef(null);
  const pathname = usePathname();

  return (
    <Link
      ref={ref}
      href={path}
      className={`block mt-6 text-body-m font-medium pt-2 pb-4 ${
        pathname === path
          ? "active text-info-600 border-b-2 border-info-600"
          : "text-gray-50 border-b border-transparent hover:text-gray-700 hover:border-gray-700"
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
