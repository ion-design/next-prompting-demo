```tsx
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

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const metricVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

const badgeVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 },
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
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      whileHover={{
        scale: 1.05,
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
        transition: { duration: 0.3 },
      }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="text-sm text-foreground"
        variants={titleVariants}
      >
        {title}
      </motion.div>
      <div className="w-full flex justify-between items-center">
        <motion.div
          className="text-xl font-semibold text-foreground"
          variants={metricVariants}
        >
          {metric}
        </motion.div>
        <motion.div
          variants={badgeVariants}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {badge}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default TokenMetric;
```