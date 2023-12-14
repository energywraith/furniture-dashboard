import Label from "@/components/common/Label/Label";
import { getRandomLabelVariant } from "@/components/common/Label/variants";
import Image from "next/image";

export const columns = {
  name: {
    label: "Produkt",
    renderComponent: (value: string | number) => {
      return (
        <div className="flex items-center py-[0.84rem] md:py-[0.2rem] gap-x-4 text-gray-700">
          <Image
            src="/product-placeholder-40x40.jpg"
            width={40}
            height={40}
            alt={`${value} image`}
            className="hidden md:block"
          />
          {value}
        </div>
      );
    },
  },
  categoryName: {
    label: "Podkategoria",
    renderComponent: (value: string | number) => {
      const variant = getRandomLabelVariant();
      return <Label variant={variant}>{value}</Label>;
    },
  },
  sku: {
    label: "SKU",
  },
  quantity: {
    label: "Ilość",
  },
};
