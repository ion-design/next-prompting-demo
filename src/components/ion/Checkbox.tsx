import { Check, Minus } from '@phosphor-icons/react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import clsx from 'clsx';
import * as React from 'react';
import { twMerge } from 'tailwind-merge';

import Label from './Label';

/* ---------------------------------- Type --------------------------------- */

export interface CheckboxProps {
  /** Label of the checkbox */
  label?: string;
  /** Description, under the label, of the checkbox */
  description?: string;
  /** Helper text, to the right of the label */
  helper?: string;
  /** Display the checkbox with an error state */
  error?: string | boolean;
  /** Classname of the checkbox container (use this to position the checkbox) */
  className?: string;
  /** Classname of the HTML checkbox (use this to restyle the checkbox) */
  checkboxClassName?: string;
}

/* ---------------------------------- Component --------------------------------- */

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> & CheckboxProps
>(({ className, label, description, required, helper, error, ...props }, ref) => {
  const generatedId = React.useId();
  const id = props.id || generatedId;
  const ariaInvalid = props['aria-invalid'] || !!error;

  return (
    <span className={clsx('flex items-center gap-2', className)}>
      <CheckboxPrimitive.Root
        id={id}
        aria-required={required}
        aria-invalid={ariaInvalid}
        aria-describedby={description ? `${id}__description` : undefined}
        ref={ref}
        className={twMerge(
          clsx(
            'peer relative h-5 w-5 shrink-0 overflow-hidden rounded-radius-xs border border-stroke bg-background transition-colors transition-transform duration-300 ease-in-out hover:border-stroke-strong focus-visible:primary-focus focus-visible:border-stroke-primary',
            'data-[state=checked]:text-on-primary data-[state=indeterminate]:text-on-primary data-[state=indeterminate]:bg-primary data-[state=checked]:bg-primary',
            'data-[state=checked]:border-transparent data-[state=indeterminate]:border-transparent',
            'disabled:pointer-events-none disabled:border-stroke-disabled disabled:bg-disabled disabled:text-on-disabled',
            'disabled:data-[state=checked]:bg-disabled disabled:data-[state=indeterminate]:bg-disabled',
            'disabled:data-[state=checked]:text-on-disabled disabled:data-[state=indeterminate]:text-on-disabled',
            'group',
            !!error &&
              'border-danger hover:border-danger data-[state=checked]:bg-danger data-[state=indeterminate]:bg-danger',
            'transform transition-transform duration-300 ease-in-out',
            'hover:scale-105'
          )
        )}
        {...props}
      >
        <CheckboxPrimitive.Indicator
          className={clsx(
            'flex items-center justify-center',
            'transition-opacity duration-300 ease-in-out',
            'opacity-0 group-data-[state=checked]:opacity-100 group-data-[state=indeterminate]:opacity-100',
            'transform scale-95 group-data-[state=checked]:scale-100 group-data-[state=indeterminate]:scale-100'
          )}
        >
          <Check
            size={12}
            weight="bold"
            className={'z-10 transition-transform duration-300 ease-in-out transform group-data-[state=checked]:scale-100 scale-95'}
          />
          <Minus
            size={12}
            weight="bold"
            className={'transition-opacity duration-300 ease-in-out opacity-0 group-data-[state=indeterminate]:opacity-100'}
          />
        </CheckboxPrimitive.Indicator>
        <span className="absolute inset-0 transition-transform duration-300 ease-in-out transform scale-0 group-data-[state=checked]:scale-100 group-data-[state=indeterminate]:scale-100">
          {/* Optional: Add background ripple or other effects here */}
        </span>
      </CheckboxPrimitive.Root>
      {label && (
        <Label
          id={`${id}__label`}
          htmlFor={id}
          required={required}
          disabled={props.disabled}
          description={description}
          descriptionId={`${id}__description`}
          helper={helper}
        >
          {label}
        </Label>
      )}
    </span>
  );
});
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export default Checkbox;