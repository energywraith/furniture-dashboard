import { ReactNode } from "react";

interface PageProps {
  children: ReactNode;
}

const Page = ({ children }: PageProps) => {
  return <main className="container h-full pt-10">{children}</main>;
};

export { Page };
