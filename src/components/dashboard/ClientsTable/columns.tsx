import Image from "next/image";

export const columns = {
  name: {
    label: "Nazwa",
    renderComponent: (value: string | number) => {
      return (
        <div className="flex items-center py-2 gap-x-4 text-gray-700">
          <Image
            src="/client-placeholder-32x32.png"
            width={32}
            height={32}
            alt={`${value} image`}
          />
          {value}
        </div>
      );
    },
  },
  quantity: {
    label: "Ilość",
  },
};
