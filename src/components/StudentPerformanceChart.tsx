```tsx
// src/components/StudentPerformanceChart.tsx

// Create a bar chart that tracks student performance in a class. Use tremor for the bar chart.

import React from 'react';
import { BarChart, Card, Title, Subtitle } from '@tremor/react';
import { motion } from 'framer-motion';

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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02, boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)' }}
      className="student-performance-chart"
    >
      <Card className="bg-background shadow-medium rounded-radius-md">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <Title className="text-foreground">Student Performance</Title>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Subtitle className="text-secondary">Scores in Math, Science, and English</Subtitle>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-6"
        >
          <BarChart
            className="mt-6"
            data={chartdata}
            index="name"
            categories={["Math Score", "Science Score", "English Score"]}
            colors={["blue", "green", "red"]}
            valueFormatter={dataFormatter}
            yAxisWidth={48}
          />
        </motion.div>
      </Card>
    </motion.div>
  );
};

export default StudentPerformanceChart;
```