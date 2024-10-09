// ion/Sidebar: Generated with Ion on 8/5/2024, 8:46:42 PM
import React, { useState, useEffect } from "react";
import clsx from "clsx";

export interface SidebarProps {
  className?: string;
  /** Fills the sidebar with a background color */
  filled?: boolean;
  children?: React.ReactNode | React.ReactNode[];
}

export default function Sidebar({
  children,
  filled = false,
  className,
}: SidebarProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Trigger the animation after the component mounts
    setIsMounted(true);
  }, []);

  return (
    <aside
      className={clsx(
        "sticky top-0 flex h-full w-fit shrink-0 flex-col justify-between",
        {
          "bg-primary-pressed transition-colors duration-300 ease-in-out":
            filled,
          "border-r border-stroke-disabled transition-colors duration-300 ease-in-out":
            !filled,
          "transition-transform transition-opacity duration-500 ease-out",
          "opacity-0 -translate-x-4": !isMounted,
          "opacity-100 translate-x-0": isMounted,
        },
        className
      )}
    >
      {children}
    </aside>
  );
}