"use client";

import { Brand } from "@/components/common/Brand";
import { HeaderMenu } from "./HeaderMenu";
import { Input } from "@/components/form/Input";
import { BellIcon, SearchIcon, UserIcon } from "@/components/icons";
import { TooltipMenu } from "@/components/templates/TooltipMenu";

const Header = () => {
  return (
    <header className="pb-1.5 md:pb-0 border-b border-secondary-200">
      <div className="container grid grid-cols-[40px_auto_auto_auto] gap-x-4 md:gap-x-5 gap-y-1.5 items-center py-1.5 md:py-4 md:flex">
        <HeaderMenu className="row-start-2" />
        <Brand className="h-7 md:h-12 row-start-1 col-span-3" />
        <Input
          type="text"
          placeholder="Wyszukaj..."
          Icon={SearchIcon}
          classes={{
            root: "w-full col-span-3 row-start-2 md:ml-4",
          }}
        />
        <div className="row-start-1 justify-self-end flex">
          <TooltipMenu Icon={BellIcon} tooltipText="Powiadomienia" />
          <TooltipMenu Icon={UserIcon} tooltipText="Moje konto" />
        </div>
      </div>
    </header>
  );
};

export { Header };
