import { ReactNode } from "react";

interface PageProps {
  children: ReactNode;
}

const Page = ({ children }: PageProps) => {
  return (
    <main className="container h-full pt-7 pb-16 md:pt-10 md:pb-20">
      {children}
    </main>
  );
};

export { Page };
