```tsx
"use client";
// ion/Divider: Enhanced with animations
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import clsx from "clsx";
import * as React from "react";
import { useState, useEffect } from "react";

/* ---------------------------------- Component --------------------------------- */

const Divider = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root> & {
    children?: React.ReactNode;
  }
>(({ className, children, decorative = true, ...props }, ref) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className={clsx(
        "relative w-full",
        mounted
          ? "opacity-100 translate-y-0 transition-opacity transition-transform duration-700 ease-out"
          : "opacity-0 translate-y-2",
        className
      )}
    >
      <div className={clsx("absolute inset-0 flex items-center p-[inherit]")}>
        <SeparatorPrimitive.Root
          ref={ref}
          decorative={decorative}
          orientation={"horizontal"}
          className={clsx(
            "bg-outline-sub",
            "h-[1px] w-full",
            mounted
              ? "opacity-100 transition-opacity duration-700 ease-out"
              : "opacity-0"
          )}
          {...props}
        />
      </div>

      <div className="relative flex justify-center text-xs uppercase">
        <span
          className={clsx(
            "bg-background px-3 text-soft",
            mounted
              ? "opacity-100 translate-y-0 transition-opacity transition-transform duration-700 ease-out"
              : "opacity-0 translate-y-2"
          )}
        >
          {children}
        </span>
      </div>
    </div>
  );
});
Divider.displayName = SeparatorPrimitive.Root.displayName;

export default Divider;
```