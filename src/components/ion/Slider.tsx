```typescript
import * as SliderPrimitive from '@radix-ui/react-slider';
import clsx from 'clsx';
import * as React from 'react';

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={clsx(
      'relative flex w-full touch-none select-none items-center',
      className,
      'transition-all duration-300 ease-in-out'
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-disabled transition-colors duration-300 ease-in-out">
      <SliderPrimitive.Range className="absolute h-full bg-primary transition-width duration-300 ease-in-out" />
    </SliderPrimitive.Track>

    <SliderPrimitive.Thumb
      className={clsx(
        'focus-visible:primary-focus block h-4 w-4 rounded-full border-2 border-primary bg-background p-1',
        'transition-transform transition-colors duration-300 ease-in-out',
        'hover:scale-110 focus:scale-110',
        'disabled:pointer-events-none disabled:opacity-50'
      )}
    >
      <div className="absolute bottom-[5px] right-[5px] h-1.5 w-1.5 rounded-full bg-primary transition-opacity duration-300 ease-in-out" />
    </SliderPrimitive.Thumb>
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export default Slider;
```