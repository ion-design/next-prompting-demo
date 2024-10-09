'use client';

import { motion } from 'framer-motion';
import SubscribeToContinueCard from "@/components/Subscribe";

const pageVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

function TestPage() {
  return (
    <motion.div
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      className="bg-container gap-4 py-4 h-screen w-screen flex justify-center items-center"
    >
      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="flex flex-col gap-8"
      >
        <SubscribeToContinueCard />
      </motion.div>
    </motion.div>
  );
}

export default TestPage;