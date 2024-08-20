// ion/Tabs: Generated with Ion on 8/5/2024, 8:46:42 PM
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cva } from "class-variance-authority";
import clsx from "clsx";
import * as React from "react";

const Tabs = TabsPrimitive.Root;

/* ---------------------------------- Types --------------------------------- */

type TabType = "filled" | "simple";

export interface TabsListProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> {
  /** Styles the children of the TabsList
   * @default 'filled'
   */
  type?: TabType;
}

/* ---------------------------------- Component --------------------------------- */

const TabTypeContext = React.createContext<TabType>("simple");

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  TabsListProps
>(({ className, type = "filled", children, ...props }, ref) => (
  <TabTypeContext.Provider value={type}>
    <TabsPrimitive.List
      ref={ref}
      className={clsx(
        "relative flex w-fit items-start",
        {
          "gap-1 rounded-radius-sm bg-container p-1 border-stroke-disabled border-[0.5px]":
            type === "filled",
        },
        className
      )}
      {...props}
    >
      {children}
      {type === "simple" && (
        <div className={"absolute bottom-0 z-0 h-px w-full bg-stroke"} />
      )}
    </TabsPrimitive.List>
  </TabTypeContext.Provider>
));
TabsList.displayName = TabsPrimitive.List.displayName;

/* ---------------------------------- Component --------------------------------- */

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={clsx("focus-visible:neutral-focus mt-2", className)}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

/* ---------------------------------- Type --------------------------------- */

export interface TabProps {
  /** Icon to the left of the tab children */
  iconLeading?: React.ReactNode;
  /** Icon to the right of the tab children */
  iconTrailing?: React.ReactNode;
}

/* ---------------------------------- Component --------------------------------- */

const tabClassnames = cva(
  "focus-visible:neutral-focus flex items-center justify-center whitespace-nowrap text-sm font-semibold text-subtle transition-all disabled:pointer-events-none",
  {
    variants: {
      type: {
        filled: [
          "rounded-radius-xs text-subtle bg-container gap-2 py-1 pl-3.5 pr-4",
          "hover:text-secondary",
          "data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-low",
          "disabled:text-on-disabled ",
          "h-7 px-5",
        ],
        simple: [
          "border-b-2 border-transparent gap-1",
          "transition-all data-[state=active]:z-[1]",
          "hover:text-foreground",
          "disabled:text-on-disabled",
          "data-[state=active]:border-primary data-[state=active]:text-primary",
          "h-9 px-3",
        ],
      },
      icon: {
        true: "",
        false: "",
      },
    },
    compoundVariants: [
      {
        type: "filled",
        icon: true,
        className: "px-2.5",
      },
    ],
  }
);

const Tab = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> & TabProps
>(({ className, children, iconLeading, iconTrailing, ...props }, ref) => {
  const type = React.useContext(TabTypeContext);

  return (
    <TabsPrimitive.Trigger
      ref={ref}
      className={clsx(tabClassnames({ type, icon: !children }), className)}
      {...props}
    >
      {iconLeading}
      {children}
      {iconTrailing}
    </TabsPrimitive.Trigger>
  );
});
Tab.displayName = TabsPrimitive.Trigger.displayName;

export { Tab, Tabs, TabsContent, TabsList };
