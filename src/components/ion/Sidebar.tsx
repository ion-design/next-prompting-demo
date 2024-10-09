```tsx
// ion/Sidebar: Updated with Animations
import clsx from "clsx";
import { motion } from "framer-motion";

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
  return (
    <motion.aside
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={clsx(
        "sticky top-0 flex h-full w-fit shrink-0 flex-col justify-between transition-colors duration-300",
        {
          "bg-primary-pressed": filled,
          "border-r border-stroke-disabled": !filled,
        },
        className
      )}
    >
      {children}
    </motion.aside>
  );
}
```