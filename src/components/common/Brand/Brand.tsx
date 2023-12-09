import { SVGProps } from "react";
import { BrandIcon } from "@/components/icons";

interface BrandProps extends SVGProps<SVGSVGElement> {}

const Brand = ({ className }: BrandProps) => (
  <BrandIcon className={`h-7 md:h-12 ${className}`} />
);

export { Brand };
