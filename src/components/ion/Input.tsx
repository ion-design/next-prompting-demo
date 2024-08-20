// ion/Input: Generated with Ion on 8/13/2024, 1:29:37 PM
import clsx from "clsx";
import * as React from "react";
import { twMerge } from "tailwind-merge";

import Hint from "./Hint";
import Label from "./Label";

interface InputContainerProps {
  error?: boolean | string;
  disabled?: boolean;
}
/* ---------------------------------- Component --------------------------------- */

export const inputContainerClasses = ({
  error,
  disabled,
}: InputContainerProps) =>
  twMerge(
    clsx(
      [
        "flex gap-2",
        "items-center",
        "w-full",
        "rounded-radius-sm",
        "border",
        "px-3",
        "text-sm",
        "transition-shadow",
        "text-foreground",
        "overflow-hidden",
        "h-9",
        "hover:border-outline",
        "transition-all",
        "bg-background",
      ],
      "",
      "file:bg-transparent",
      {
        "focus-within:danger-focus border-danger hover:border-danger focus-within:border-danger-stroke":
          error,
        "focus-within:primary-focus focus-within:bg-background focus-within:border-stroke-primary focus-within:hover:border-stroke-primary border-stroke":
          !error,
      },
      {
        "border-stroke-disabled bg-disabled pointer-events-none": disabled,
      }
    )
  );

export const InputContainer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLSpanElement> & InputContainerProps
>(({ className, error, disabled, ...props }, ref) => (
  <span
    ref={ref}
    className={twMerge(
      inputContainerClasses({
        error,
        disabled,
      }),
      className
    )}
    {...props}
  />
));
InputContainer.displayName = "InputContainer";

/* ---------------------------------- Type --------------------------------- */

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  /** Icon to the left of the input text */
  iconLeading?: React.ReactNode;
  /** Icon to the right of the input text */
  iconTrailing?: React.ReactNode;
  /** Label of the input */
  label?: string;
  /** Helper text, to the right of the label */
  helper?: string;
  /** Hint/description below the input  */
  hint?: string;
  /** Display hint icon to the left of the hint
   * @default false
   */
  showHintIcon?: boolean;
  /** Display required mark to the right of the label */
  required?: boolean;
  /** Display the input with an error state */
  error?: boolean | string;
  /** Classname of the container (use this to position the input) */
  className?: string;
  /** Classname of the input (use this to restyle the input) */
  inputClassName?: string;
}

/* ---------------------------------- Component --------------------------------- */

export const inputClassNames = clsx(
  "h-full w-full flex-shrink bg-transparent focus:outline-none disabled:pointer-events-none",
  "placeholder:text-subtle disabled:text-on-disabled",
  "disabled:placeholder:text-on-disabled"
);

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      inputClassName,
      type,
      error,
      required = false,
      helper,
      label,
      hint,
      showHintIcon = false,
      iconLeading,
      iconTrailing,
      ...props
    },
    ref
  ) => {
    const generatedId = React.useId();
    const id = props.id ?? generatedId;
    const ariaInvalid = props["aria-invalid"] ?? !!error;

    return (
      <div className={className}>
        {label && (
          <Label
            id={`${id}__label`}
            htmlFor={id}
            required={required}
            helper={helper}
            disabled={props.disabled}
            className="mb-1"
          >
            {label}
          </Label>
        )}
        <InputContainer
          className={clsx("bg-background", inputClassName)}
          error={error}
          disabled={props.disabled}
        >
          {iconLeading && (
            <span
              className={clsx("text-foreground", {
                "text-on-disabled": props.disabled,
              })}
            >
              {iconLeading}
            </span>
          )}
          <input
            id={id}
            ref={ref}
            aria-required={required}
            aria-invalid={ariaInvalid}
            aria-describedby={hint ? `${id}__hint` : undefined}
            className={inputClassNames}
            type={type}
            {...props}
          />
          {iconTrailing && (
            <span
              className={clsx("text-foreground", {
                "text-on-disabled": props.disabled,
              })}
            >
              {iconTrailing}
            </span>
          )}
        </InputContainer>
        {hint && (
          <Hint
            id={`${id}__hint`}
            error={error}
            className="mt-1"
            showIcon={showHintIcon}
            disabled={props.disabled}
          >
            {hint}
          </Hint>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export default Input;
