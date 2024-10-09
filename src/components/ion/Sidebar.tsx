// ion/Sidebar: Generated with Ion on 8/5/2024, 8:46:42 PM
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
  return (
    <aside
      className={clsx(
        "sticky top-0 flex h-full w-fit shrink-0 flex-col justify-between",
        {
          "bg-primary-pressed": filled,
          "border-r border-stroke-disabled": !filled,
        },
        className
      )}
    >
      {children}
    </aside>
  );
}

// Animated with AI!