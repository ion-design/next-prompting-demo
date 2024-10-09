// ion/Hint: Updated with animations on 4/27/2024
import { Info } from "@phosphor-icons/react";
import clsx from "clsx";
import { useEffect, useState } from "react";

/* ---------------------------------- Type --------------------------------- */

interface HintProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Display hint icon to the left of the hint
   * @default false
   */
  showIcon?: boolean;
  /** Display the hint with an error state */
  error?: boolean | string;
  /** Display the hint with a disabled state */
  disabled?: boolean;
}

/* ---------------------------------- Component --------------------------------- */

function Hint({
  className,
  children,
  error,
  showIcon = false,
  disabled,
  ...props
}: HintProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger fade-in animation on mount
    setIsVisible(true);
  }, []);

  return (
    <p
      className={clsx(
        "flex items-center gap-1 text-[11px] leading-[16px] opacity-0 transition-opacity duration-500 ease-in-out",
        {
          "text-danger": error,
          "text-secondary": !error && !disabled,
          "text-on-disabled": disabled,
          "opacity-100": isVisible,
          "animate-pulse": !!error, // Subtle pulse when there's an error
        },
        className
      )}
      {...props}
    >
      {showIcon && (
        <Info
          className={clsx(
            "h-3 w-3 transition-transform duration-300 ease-in-out",
            {
              "transform animate-bounce": !!error, // Slight bounce on error
            }
          )}
          weight="bold"
        />
      )}
      {children}
    </p>
  );
}

export default Hint;