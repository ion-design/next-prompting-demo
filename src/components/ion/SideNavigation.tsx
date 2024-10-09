```tsx
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
import { motion } from "framer-motion";

import Avatar from "@/components/ion/Avatar";
import Button from "@/components/ion/Button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ion/Navigation";

import Sidebar from "./Sidebar";

const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

function SideNavigation() {
  function contactClickHandler(e: MouseEvent<HTMLButtonElement>) {
    alert("contactClickHandler fired");
  }

  return (
    <Sidebar>
      <div className="bg-background flex-1 h-full w-[250px] px-4 flex flex-col justify-between">
        <NavigationMenu>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={listVariants}
            className="w-full flex flex-col gap-1 py-4"
          >
            <div className="text-base font-semibold text-secondary px-3 pt-4">
              Main
            </div>
            <NavigationMenuList className="w-full flex flex-col gap-1">
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
                <motion.div key={index} variants={itemVariants}>
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      className="w-full cursor-pointer"
                      iconLeading={iconLeading}
                      iconTrailing={<CaretRight size={16} weight={"bold"} />}
                      href={link}
                    >
                      {children}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </motion.div>
              ))}
              <div className="text-base font-semibold text-secondary px-3 pt-4">
                Main
              </div>
              <motion.div variants={itemVariants}>
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
              </motion.div>
              <motion.div variants={itemVariants}>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    iconTrailing={<CaretRight size={16} weight={"bold"} />}
                    iconLeading={<User size={14} weight={"fill"} />}
                    className="w-full cursor-pointer"
                  >
                    Profiles
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </motion.div>
            </NavigationMenuList>
          </motion.div>
        </NavigationMenu>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
          className="w-full flex flex-col gap-3 p-5"
        >
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
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
          >
            <Avatar
              subtitle="Gold Member"
              title="Samraaj"
              size="lg"
              src="/images/dashboard-example/samraaj.png"
            />
          </motion.div>
        </motion.div>
      </div>
    </Sidebar>
  );
}
export default SideNavigation;
```