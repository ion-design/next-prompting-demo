/* 
A card for a user to input their email and subscribe to a newsletter. There should be messaging on the card to encourage the user to subscribe and generate FOMO.

When the user subscribes, the card should show a checkmark icon and a thank you message.
*/

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LockSimple, Check } from '@phosphor-icons/react/dist/ssr';
import Button from '@/components/ion/Button';
import Input from '@/components/ion/Input';

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
      staggerChildren: 0.1,
    },
  },
};

const contentVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const SubscribeToContinueCard = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = () => {
    setIsSubscribed(true);
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="bg-background w-full max-w-md mx-auto p-6 rounded-radius-md shadow-medium"
    >
      <AnimatePresence mode="wait">
        {!isSubscribed ? (
          <motion.div
            key="subscribe"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <motion.div
              className="flex items-center justify-center mb-4"
              variants={contentVariants}
            >
              <LockSimple size={48} className="text-primary" weight="fill" />
            </motion.div>
            <motion.h2
              className="text-2xl font-semibold text-foreground text-center mb-4"
              variants={contentVariants}
              transition={{ delay: 0.1 }}
            >
              Unlock Exclusive Content!
            </motion.h2>
            <motion.p
              className="text-secondary text-center mb-6"
              variants={contentVariants}
              transition={{ delay: 0.2 }}
            >
              Don't miss out on premium insights, expert analysis, and exclusive offers. Subscribe now and stay ahead of the curve!
            </motion.p>
            <motion.div
              className="space-y-4"
              variants={contentVariants}
              transition={{ delay: 0.3 }}
            >
              <Input
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button
                variant="filled"
                color="primary"
                size="md"
                className="w-full"
                onClick={handleSubscribe}
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.02 }}
              >
                Subscribe Now
              </Button>
            </motion.div>
            <motion.p
              className="text-subtle text-sm text-center mt-4"
              variants={contentVariants}
              transition={{ delay: 0.4 }}
            >
              Limited time offer: Get 30% off your first month!
            </motion.p>
          </motion.div>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="text-center"
          >
            <motion.div
              className="flex items-center justify-center mb-4"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, ease: 'backOut' }}
            >
              <Check size={48} className="text-success" weight="fill" />
            </motion.div>
            <motion.h2
              className="text-2xl font-semibold text-foreground mb-4"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Thank You for Subscribing!
            </motion.h2>
            <motion.p
              className="text-secondary mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              You've made a great decision. Get ready for exclusive content and amazing offers!
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Button
                variant="outline"
                color="neutral"
                size="md"
                onClick={() => setIsSubscribed(false)}
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.02 }}
              >
                Close
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default SubscribeToContinueCard;