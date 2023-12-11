import { Brand } from "@/components/common/Brand";

const Footer = () => {
  return (
    <footer className="bg-base-white py-7 border-t border-neutral-500">
      <div className="container flex items-center gap-x-6">
        <Brand className="h-6" />
        <span className="text-paragraph-2 text-gray-700">
          2022 ©ELTAP Spółka z ograniczoną odpowiedzialnością Sp.k.
        </span>
      </div>
    </footer>
  );
};

export { Footer };
