import * as SliderPrimitive from '@radix-ui/react-slider';
import clsx from 'clsx';
import * as React from 'react';

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={clsx('relative flex w-full touch-none select-none items-center', className)}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-disabled">
      <SliderPrimitive.Range className="absolute h-full bg-primary" />
    </SliderPrimitive.Track>

    <SliderPrimitive.Thumb className="focus-visible:primary-focus focus-visible:primary-focus block h-4 w-4 rounded-full border-2 border-primary bg-background p-1 transition-colors disabled:pointer-events-none disabled:opacity-50">
      <div className="absolute bottom-[5px] right-[5px] h-1.5 w-1.5 rounded-full bg-primary" />
    </SliderPrimitive.Thumb>
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export default Slider;

// Animated with AI!