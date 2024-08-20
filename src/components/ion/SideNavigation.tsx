"use client";
// Generated with Ion on 8/5/2024, 8:46:42 PM
// Figma Link: https://www.figma.com/design/BsgE00bYWTmwm4RY0WmYN6?node-id=forced_ion/SideNavigation/default_1:10135
import {
  CaretRight,
  Gear,
  Handshake,
  House,
  Money,
  ShoppingCart,
  User,
} from "@phosphor-icons/react/dist/ssr";
import { type MouseEvent } from "react";

import Avatar from "@/components/ion/Avatar";
import Button from "@/components/ion/Button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ion/Navigation";

import Sidebar from "./Sidebar";

function SideNavigation() {
  function contactClickHandler(e: MouseEvent<HTMLButtonElement>) {
    alert("contactClickHandler fired");
  }

  return (
    <Sidebar>
      <div className="bg-background flex-1 h-full w-[250px] px-4 flex flex-col justify-between">
        <NavigationMenu>
          <NavigationMenuList className="w-full flex flex-col gap-1 py-4">
            <div className="text-base font-semibold text-secondary px-3 pt-4">
              Main
            </div>
            {[
              {
                children: "Dashboard",
                iconLeading: <House size={14} weight={"fill"} />,
                link: "/dashboard-example",
              },
              {
                children: "Buy",
                iconLeading: <ShoppingCart size={14} weight={"fill"} />,
                link: "/dashboard-example",
              },
              {
                children: "Sell",
                iconLeading: <Money size={14} weight={"fill"} />,
                link: "/dashboard-example",
              },
              {
                children: "Swap",
                iconLeading: <Handshake size={14} weight={"fill"} />,
                link: "/dashboard-example",
              },
            ].map(({ children, iconLeading, link }, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink
                  className="w-full cursor-pointer"
                  iconLeading={iconLeading}
                  iconTrailing={<CaretRight size={16} weight={"bold"} />}
                  href={link}
                >
                  {children}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
            <div className="text-base font-semibold text-secondary px-3 pt-4">
              Main
            </div>
            <NavigationMenuItem>
              <NavigationMenuLink
                iconTrailing={<CaretRight size={16} weight={"bold"} />}
                iconLeading={<Gear size={14} weight={"fill"} />}
                className="w-full cursor-pointer"
                href="/settings"
              >
                Settings
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                iconTrailing={<CaretRight size={16} weight={"bold"} />}
                iconLeading={<User size={14} weight={"fill"} />}
                className="w-full cursor-pointer"
              >
                Profiles
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="w-full flex flex-col gap-3 p-5">
          <Button
            variant="soft"
            color="neutral"
            size="sm"
            onClick={contactClickHandler}
            className="w-full"
          >
            Contact
          </Button>
          <div className="w-full flex items-start">
            <img
              src="/images/dashboard-example/Line-1.svg"
              alt="Line 1"
              className="flex-1 h-2.5 w-full"
            />
          </div>
          <Avatar
            subtitle="Gold Member"
            title="Samraaj"
            size="lg"
            src="/images/dashboard-example/samraaj.png"
          />
        </div>
      </div>
    </Sidebar>
  );
}
export default SideNavigation;
