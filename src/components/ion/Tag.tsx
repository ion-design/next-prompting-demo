```typescript
"use client";
// ion/Tag: Updated with animations, 4/27/2024
import { X } from "@phosphor-icons/react";
import { cva } from "class-variance-authority";
import clsx from "clsx";
import React from "react";

/* ---------------------------------- Type --------------------------------- */

export interface TagProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "type"> {
  /** Variant of the tag
   * @default 'stroke'
   */
  variant?: "stroke" | "filled";
  /** Color of the tag
   * @default 'neutral'
   */
  color?: "neutral" | "primary" | "success" | "danger";
  /** Icon to the left of the tag content */
  iconLeading?: React.ReactNode;
  /** Callback when the tag is dismissed, exposes close button */
  onDismiss?: React.MouseEventHandler<SVGSVGElement>;
}

/* ---------------------------------- Component --------------------------------- */

const tagClassNames = cva(
  "cursor-default flex w-fit flex-row items-center justify-center gap-x-1 rounded-lg border px-2 py-1 text-xs font-semibold leading-none transition-transform transition-opacity duration-300 ease-in-out disabled:border-transparent disabled:bg-disabled",
  {
    variants: {
      color: {
        neutral: ["text-foreground", "active:border-outline"],
        primary: ["text-primary", "active:border-primary"],
        success: ["text-success", "active:border-success"],
        danger: ["text-danger", "active:border-danger"],
      },
      variant: {
        stroke: ["bg-transparent", "active:bg-transparent"],
        filled: ["border-transparent"],
      },
    },
    compoundVariants: [
      {
        color: "neutral",
        variant: "stroke",
        className: ["border-outline-sub", "hover:bg-container-high hover:scale-105"],
      },
      {
        color: "neutral",
        variant: "filled",
        className: ["bg-container-high", "hover:border-outline-sub hover:scale-105"],
      },
      {
        color: "primary",
        variant: "stroke",
        className: ["border-primary-sub", "hover:bg-primary-container hover:scale-105"],
      },
      {
        color: "primary",
        variant: "filled",
        className: ["bg-primary-accent", "hover:border-primary-sub hover:scale-105"],
      },
      {
        color: "success",
        variant: "stroke",
        className: ["border-success-sub", "hover:bg-success-container hover:scale-105"],
      },
      {
        color: "success",
        variant: "filled",
        className: ["bg-success-accent", "hover:border-success-sub hover:scale-105"],
      },
      {
        color: "danger",
        variant: "stroke",
        className: ["border-danger-sub", "hover:bg-danger-container hover:scale-105"],
      },
      {
        color: "danger",
        variant: "filled",
        className: ["bg-danger-accent", "hover:border-danger-sub hover:scale-105"],
      },
    ],
  }
);

const Tag = React.forwardRef<HTMLButtonElement, TagProps>(
  (
    {
      className,
      variant = "stroke",
      color = "neutral",
      iconLeading,
      onDismiss,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={clsx(
          tagClassNames({
            variant,
            color,
          }),
          "hover:opacity-100 active:opacity-90",
          "opacity-0 animate-fadeIn",
          className
        )}
        {...props}
      >
        {iconLeading}
        {children}
        {onDismiss && (
          <X
            onClick={(e) => {
              // Don't fire the top-level onClick for the tag
              e.stopPropagation();
              onDismiss(e);
            }}
            role="button"
            aria-label="Remove"
            className="h-3 w-3 ml-1 transition-transform duration-200 hover:rotate-90"
          />
        )}
      </button>
    );
  }
);
Tag.displayName = "Tag";

export default Tag;
```

```css
/* Add the following CSS to your global stylesheet or relevant CSS module */

/* Fade-in animation */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.3s ease-out forwards;
}
```