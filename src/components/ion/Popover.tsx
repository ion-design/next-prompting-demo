// ion/Popover: Enhanced with Animations by ChatGPT on 4/27/2024
import * as PopoverPrimitive from "@radix-ui/react-popover";
import clsx from "clsx";
import * as React from "react";
import { twMerge } from "tailwind-merge";

const PopoverRoot = PopoverPrimitive.Root;

const PopoverTrigger = PopoverPrimitive.Trigger;

/* ---------------------------------- Component --------------------------------- */

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Content
    ref={ref}
    align={align}
    sideOffset={sideOffset}
    className={twMerge(
      clsx(
        "disabled:outline-disabled outline-none group relative z-50 flex w-[--radix-popover-trigger-width] min-w-[8rem] overflow-hidden rounded-radius bg-background p-2 shadow-medium transition-transform ease-out duration-200",
        "data-[state=open]:animate-in",
        "data-[state=closed]:animate-out",
        "data-[state=closed]:fade-out-0",
        "data-[state=open]:fade-in-0",
        "data-[state=closed]:zoom-out-95",
        "data-[state=open]:zoom-in-95",
        "data-[side=bottom]:slide-in-from-top-2",
        "data-[side=left]:slide-in-from-right-2",
        "data-[side=right]:slide-in-from-left-2",
        "data-[side=top]:slide-in-from-bottom-2",
        // Additional subtle animation for entrance
        "opacity-0",
        "transform scale-95",
        "data-[state=open]:opacity-100",
        "data-[state=open]:transform scale-100",
        // Enhanced shadow transition
        "transition-shadow duration-300 ease-in-out",
        "data-[state=open]:shadow-lg",
        "data-[state=closed]:shadow-medium",
        className
      )
    )}
    {...props}
  />
));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

export { PopoverRoot as Popover, PopoverContent, PopoverTrigger };