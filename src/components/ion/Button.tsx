import { cva } from 'class-variance-authority';
import clsx from 'clsx';
import * as React from 'react';
import { twMerge } from 'tailwind-merge';

/* ---------------------------------- Type --------------------------------- */

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode | React.ReactNode[];
  /** Icon to the left of the button text */
  iconLeading?: React.ReactNode;
  /** Icon to the right of the button text */
  iconTrailing?: React.ReactNode;
  /** Color of the button
   * @default 'primary'
   */
  color?: 'primary' | 'neutral' | 'danger';
  /** Variant of the button
   * @default 'filled'
   */
  variant?: 'filled' | 'outline' | 'gradient' | 'soft' | 'ghost' | 'link';
  /** Size of the button
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';
};

/* ---------------------------------- Component --------------------------------- */

export const buttonVariants = cva(
  [
    'flex',
    'items-center',
    'justify-center',
    'disabled:pointer-events-none',
    'whitespace-nowrap',
    'border',
    'h-fit',
    'w-fit',
    'disabled:text-on-disabled',
    'transform',
    'transition-shadows',
    'transition-colors',
    'transition-transform',
    'duration-200',
    'ease-in-out',
    'hover:scale-105',
    'focus:scale-105',
    'active:scale-95',
  ],
  {
    variants: {
      variant: {
        filled: 'disabled:bg-disabled border-transparent',
        outline: 'disabled:border-stroke-disabled',
        soft: 'disabled:bg-transparent disabled:border-stroke-disabled border-transparent',
        gradient: 'disabled:bg-disabled border-none',
        ghost: 'focus:bg-opacity-0 border-transparent',
        link: 'border-none disabled:text-disabled',
      },
      color: {
        primary: 'focus-visible:primary-focus',
        neutral: 'focus-visible:neutral-focus',
        danger: 'focus-visible:danger-focus',
      },
      size: {
        sm: 'gap-x-1 px-2 text-sm h-7 rounded-radius-xs',
        md: 'gap-x-1 px-3 text-sm h-9 rounded-radius-sm',
        lg: 'gap-x-2 px-4 text-base h-12 rounded-radius',
        'icon-sm': 'h-7 w-7 rounded-radius-xs',
        'icon-md': 'h-8 w-8 rounded-radius-sm',
        'icon-lg': 'h-10 w-10 rounded-radius',
        'link-sm': 'text-sm',
        'link-md': 'text-base',
        'link-lg': 'text-lg',
      },
    },
    compoundVariants: [
      ...(['primary', 'neutral', 'danger'] as const).flatMap((color) =>
        [
          {
            variant: ['link' as const],
            color: [color],
            className: [`hover:text-${color}-hover`, `active:text-${color}-pressed`, `text-${color}`, 'p-0 pr-1'],
          },

          {
            variant: ['ghost' as const],
            color: [color],
            className: [
              `text-${color}`,
              `hover:bg-${color}-accent`,
              `active:bg-${color}-container`,
              `active:text-on-${color}-container`,
            ],
          },
          {
            variant: ['soft' as const],
            color: [color],
            className: [
              `bg-${color}-container`,
              `text-on-${color}-container`,
              `hover:border-${color}-sub`,
              `active:bg-${color}-accent`,
            ],
          },
          {
            variant: ['outline' as const],
            color: [color],
            className: [
              `text-${color}`,
              color === 'neutral' ? `border-stroke` : `border-stroke-${color}`,
              `hover:bg-${color}-accent`,
              `active:bg-${color}-container  `,
              `active:text-on-${color}-container`,
              'bg-background',
            ],
          },
          {
            variant: ['filled' as const],
            color: [color],
            className: [
              `bg-${color}`,
              `text-on-${color}`,
              `hover:bg-${color}-hover`,
              `active:text-on-${color}-container`,
              `active:bg-${color}-pressed`,
              `active:text-on-${color}-pressed`,
            ],
          },
          {
            variant: ['gradient' as const],
            color: [color],
            className: [
              `bg-blend-overlay bg-gradient-to-r from-white/40 to-white/0 bg-${color}`,
              `text-on-${color}`,
              `hover:bg-${color}-hover`,
              `active:bg-${color}-pressed`,
            ],
          },
          {
            variant: ['link' as const],
            color: [color],
            className: [`text-${color}`, `hover:text-${color}-hover`, `active:text-${color}-pressed`],
          },
        ].flat()
      ),
    ],
  }
);

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, children, iconTrailing, iconLeading, color = 'primary', variant = 'filled', size = 'md', ...props },
    ref
  ) => {
    return (
      <button
        className={twMerge(
          clsx(
            buttonVariants({
              color,
              variant,
              size:
                (iconLeading || iconTrailing) && !children
                  ? `icon-${size}`
                  : variant === `link`
                  ? `link-${size}`
                  : size,
            }),
            className
          )
        )}
        ref={ref}
        {...props}
      >
        {iconLeading}
        {children}
        {iconTrailing}
      </button>
    );
  }
);
Button.displayName = 'Button';

export default Button;