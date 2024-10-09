```tsx
'use client';

import { motion } from 'framer-motion';
import SubscribeToContinueCard from "@/components/Subscribe";

function TestPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="bg-container gap-4 py-4 h-screen w-screen flex justify-center items-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <motion.div
        className="flex flex-col gap-8"
        variants={contentVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
      >
        <SubscribeToContinueCard />
      </motion.div>
    </motion.div>
  );
}

export default TestPage;
```