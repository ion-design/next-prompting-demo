import { Circle } from '@phosphor-icons/react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import clsx from 'clsx';
import * as React from 'react';

import Label from './Label';

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return <RadioGroupPrimitive.Root className={clsx('grid gap-2', className)} {...props} ref={ref} />;
});

RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

type RadioGroupItemProps = React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> & {
  /** Label of the radio */
  label?: string;
  /** Description, under the label, of the radio */
  description?: string;
  /** Helper text, to the right of the label */
  helper?: string;
  /** Display the radio with an error state */
  error?: string | boolean;
  /** Classname of the radio container (use this to position the radio) */
  className?: string;
  /** Classname of the HTML radio (use this to restyle the radio) */
  radioClassName?: string;
};

const RadioGroupItem = React.forwardRef<React.ElementRef<typeof RadioGroupPrimitive.Item>, RadioGroupItemProps>(
  ({ className, label, required, description, helper, error, ...props }, ref) => {
    const generatedId = React.useId();
    const id = props.id || generatedId;
    const ariaInvalid = props['aria-invalid'] || !!error;
    return (
      <span className="flex items-center space-x-2">
        <RadioGroupPrimitive.Item
          id={id}
          ref={ref}
          aria-required={required}
          aria-invalid={ariaInvalid}
          aria-describedby={description ? `${id}__description` : undefined}
          className={clsx(
            'bg-background focus-visible:primary-focus focus-visible:border-stroke-primary aspect-square h-4 w-4 rounded-full border border-outline text-subtle hover:border-stroke-strong aria-checked:border-primary aria-checked:bg-primary aria-checked:text-primary',
            'disabled:cursor-not-allowed disabled:border-none disabled:bg-disabled disabled:aria-checked:bg-disabled disabled:aria-checked:text-subtle',
            'transition-shadows transition-colors',
            error ? 'border-danger aria-checked:border-danger aria-checked:bg-danger' : 'border-stroke',
            className
          )}
          {...props}
        >
          <RadioGroupPrimitive.Indicator className="relative flex items-center justify-center">
            <Circle
              weight="fill"
              className={clsx(
                'parent h-2.5 w-2.5 rounded-full border-none fill-white text-current disabled:fill-blue-500',
                {
                  'fill-soft': props.disabled,
                }
              )}
            />
          </RadioGroupPrimitive.Indicator>
        </RadioGroupPrimitive.Item>
        {label && (
          <Label
            id={`${id}__label`}
            htmlFor={id}
            required={required}
            description={description}
            descriptionId={`${id}__description`}
            helper={helper}
            disabled={props.disabled}
          >
            {label}
          </Label>
        )}
      </span>
    );
  }
);
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };

// Animated with AI!