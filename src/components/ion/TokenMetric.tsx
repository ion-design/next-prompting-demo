// Generated with Ion on 8/13/2024, 4:29:48 PM
// Figma Link: https://www.figma.com/design/BsgE00bYWTmwm4RY0WmYN6?node-id=1:3282
import clsx from "clsx";

import { motion } from "framer-motion";

type TokenMetricProps = {
  metric?: string;
  badge: React.ReactNode;
  title?: string;
  className?: string;
};

function TokenMetric({
  metric = "Metric",
  badge,
  title = "Title",
  className = "",
}: TokenMetricProps) {
  return (
    <motion.div
      className={clsx(
        "bg-background w-[240px] flex flex-col justify-center gap-1 p-5 rounded-radius border border-stroke-strong shadow-[0_1px_8px_0_rgba(0,0,0,0.1)]",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="text-sm text-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.3 }}
      >
        {title}
      </motion.div>
      <div className="w-full flex justify-between items-center">
        <motion.div
          className="text-xl font-semibold text-foreground"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.3 }}
        >
          {metric}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.3 }}
        >
          {badge}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default TokenMetric;

// Animated with AI!