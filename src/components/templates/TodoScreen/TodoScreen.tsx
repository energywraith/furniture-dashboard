import { ReactNode } from "react";

interface TodoScreenProps {
  children: ReactNode;
}

const TodoScreen = ({ children }: TodoScreenProps) => {
  return (
    <main className="flex items-center justify-center p-24">
      <h1 className="text-info-900 text-headline-m">{children}</h1>
    </main>
  );
};

export { TodoScreen };
