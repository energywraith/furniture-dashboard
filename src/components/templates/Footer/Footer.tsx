import { Brand } from "@/components/common/Brand";

const Footer = () => {
  return (
    <footer className="container bg-base-white flex items-center gap-x-6 py-7">
      <Brand className="h-6" />
      <span className="text-paragraph-2 text-gray-700">
        2022 ©ELTAP Spółka z ograniczoną odpowiedzialnością Sp.k.
      </span>
    </footer>
  );
};

export { Footer };
