// src/components/StudentPerformanceChart.tsx

import React from 'react';
import { BarChart, Card, Title, Subtitle } from '@tremor/react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
  hover: {
    scale: 1.02,
    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const subtitleVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
};

const chartVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, delay: 0.4 },
  },
};

const StudentPerformanceChart = () => {
  const chartdata = [
    {
      name: "Alice",
      "Math Score": 85,
      "Science Score": 92,
      "English Score": 78,
    },
    {
      name: "Bob",
      "Math Score": 75,
      "Science Score": 88,
      "English Score": 90,
    },
    {
      name: "Charlie",
      "Math Score": 92,
      "Science Score": 79,
      "English Score": 85,
    },
    {
      name: "David",
      "Math Score": 88,
      "Science Score": 95,
      "English Score": 82,
    },
    {
      name: "Eve",
      "Math Score": 79,
      "Science Score": 84,
      "English Score": 93,
    },
  ];

  const dataFormatter = (number: number) => `${number}%`;

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      className="student-performance-chart"
    >
      <motion.div
        variants={containerVariants}
        className="bg-background shadow-medium rounded-radius-md"
      >
        <motion.div variants={titleVariants}>
          <Title className="text-foreground">Student Performance</Title>
        </motion.div>
        <motion.div variants={subtitleVariants}>
          <Subtitle className="text-secondary">Scores in Math, Science, and English</Subtitle>
        </motion.div>
        <motion.div variants={chartVariants} className="mt-6">
          <BarChart
            data={chartdata}
            index="name"
            categories={["Math Score", "Science Score", "English Score"]}
            colors={["blue", "green", "red"]}
            valueFormatter={dataFormatter}
            yAxisWidth={48}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default StudentPerformanceChart;