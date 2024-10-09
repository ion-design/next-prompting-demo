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
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.2,
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const metricVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

const badgeVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
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
        "bg-background w-[240px] flex flex-col justify-center gap-2 p-6 rounded-lg border border-stroke-strong shadow-lg",
        className
      )}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
      whileTap={{ scale: 0.98 }}
    >
      <motion.div
        className="text-sm text-foreground font-medium"
        variants={titleVariants}
      >
        {title}
      </motion.div>
      <div className="w-full flex justify-between items-center">
        <motion.div
          className="text-2xl font-semibold text-foreground"
          variants={metricVariants}
        >
          {metric}
        </motion.div>
        <motion.div
          variants={badgeVariants}
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
        >
          {badge}
        </motion.div>
      </div>
      {/* Optional subtle background animation for luxury feel */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-lg pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        style={{ backdropFilter: "blur(10px)" }}
      />
    </motion.div>
  );
}

export default TokenMetric;