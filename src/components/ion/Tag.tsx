"use client";
// ion/Tag: Enhanced with animations on 4/27/2024
import { X } from "@phosphor-icons/react";
import { cva } from "class-variance-authority";
import clsx from "clsx";
import React from "react";

/* ---------------------------------- Type --------------------------------- */

export interface TagProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "type"> {
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
  "cursor-default flex w-fit flex-row items-center justify-center gap-x-1 rounded-lg border px-2 py-1 text-xs font-semibold leading-none transition-transform transition-opacity ease-in-out duration-200 transform hover:scale-105 active:scale-95 disabled:border-transparent disabled:bg-disabled",
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
        className: ["border-outline-sub", "hover:bg-container-high"],
      },
      {
        color: "neutral",
        variant: "filled",
        className: ["bg-container-high", "hover:border-outline-sub"],
      },
      {
        color: "primary",
        variant: "stroke",
        className: ["border-primary-sub", "hover:bg-primary-container"],
      },
      {
        color: "primary",
        variant: "filled",
        className: ["bg-primary-accent", "hover:border-primary-sub"],
      },
      {
        color: "success",
        variant: "stroke",
        className: ["border-success-sub", "hover:bg-success-container"],
      },
      {
        color: "success",
        variant: "filled",
        className: ["bg-success-accent", "hover:border-success-sub"],
      },
      {
        color: "danger",
        variant: "stroke",
        className: ["border-danger-sub", "hover:bg-danger-container"],
      },
      {
        color: "danger",
        variant: "filled",
        className: ["bg-danger-accent", "hover:border-danger-sub"],
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
          className
        )}
        {...props}
      >
        {iconLeading}
        {children}
        {onDismiss && (
          <X
            onClick={(e) => {
              // Prevent triggering the button's onClick
              e.stopPropagation();
              onDismiss(e);
            }}
            role="button"
            aria-label="Remove"
            className="h-3 w-3 transition-opacity ease-in-out duration-200 hover:opacity-80"
          />
        )}
      </button>
    );
  }
);
Tag.displayName = "Tag";

export default Tag;