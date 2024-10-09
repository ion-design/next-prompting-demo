```typescript
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
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const contentVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
};

const iconVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const SubscribeToContinueCard = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = () => {
    // Add any subscription logic here
    setIsSubscribed(true);
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="bg-background w-full max-w-md mx-auto p-6 rounded-radius-md shadow-medium"
    >
      <AnimatePresence mode="wait">
        {!isSubscribed ? (
          <motion.div
            key="subscribe"
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          >
            <motion.div
              className="flex items-center justify-center mb-4"
              variants={iconVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              <LockSimple size={48} className="text-primary" weight="fill" />
            </motion.div>
            <motion.h2
              className="text-2xl font-semibold text-foreground text-center mb-4"
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              Unlock Exclusive Content!
            </motion.h2>
            <motion.p
              className="text-secondary text-center mb-6"
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4, duration: 0.4 }}
            >
              Don't miss out on premium insights, expert analysis, and exclusive offers. Subscribe now and stay ahead of the curve!
            </motion.p>
            <motion.div
              className="space-y-4"
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.5, duration: 0.4 }}
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
              >
                Subscribe Now
              </Button>
            </motion.div>
            <motion.p
              className="text-subtle text-sm text-center mt-4"
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.6, duration: 0.4 }}
            >
              Limited time offer: Get 30% off your first month!
            </motion.p>
          </motion.div>
        ) : (
          <motion.div
            key="success"
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="text-center"
          >
            <motion.div
              className="flex items-center justify-center mb-4"
              variants={iconVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              <Check size={48} className="text-success" weight="fill" />
            </motion.div>
            <motion.h2
              className="text-2xl font-semibold text-foreground mb-4"
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              Thank You for Subscribing!
            </motion.h2>
            <motion.p
              className="text-secondary mb-6"
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4, duration: 0.4 }}
            >
              You've made a great decision. Get ready for exclusive content and amazing offers!
            </motion.p>
            <motion.div
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.5, duration: 0.4 }}
            >
              <Button
                variant="outline"
                color="neutral"
                size="md"
                onClick={() => setIsSubscribed(false)}
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
```