/* src/components/WeatherWidget.tsx */
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CloudSun, CloudRain, CloudSnow, Thermometer, Wind, Drop } from '@phosphor-icons/react';

const WeatherWidget = () => {
  const [weather, setWeather] = useState({
    condition: 'sunny',
    temperature: 25,
    humidity: 60,
    windSpeed: 10,
  });

  useEffect(() => {
    const fetchWeather = () => {
      const conditions = ['sunny', 'rainy', 'snowy'];
      const randomCondition = conditions[Math.floor(Math.random() * conditions.length)];
      setWeather({
        condition: randomCondition,
        temperature: Math.floor(Math.random() * 35) - 5,
        humidity: Math.floor(Math.random() * 100),
        windSpeed: Math.floor(Math.random() * 30),
      });
    };

    fetchWeather();
    const interval = setInterval(fetchWeather, 5000);

    return () => clearInterval(interval);
  }, []);

  const getWeatherIcon = () => {
    switch (weather.condition) {
      case 'rainy':
        return <CloudRain size={48} weight="fill" />;
      case 'snowy':
        return <CloudSnow size={48} weight="fill" />;
      default:
        return <CloudSun size={48} weight="fill" />;
    }
  };

  const temperatureColor = weather.temperature > 25
    ? 'text-red-500'
    : weather.temperature < 5
    ? 'text-blue-500'
    : 'text-primary';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="bg-background w-80 p-6 rounded-radius-md shadow-medium overflow-hidden relative"
    >
      <motion.div
        className="flex justify-between items-center mb-4"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold text-foreground">Weather</h2>
        <motion.div
          key={weather.condition}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {getWeatherIcon()}
        </motion.div>
      </motion.div>
      <motion.div
        className="mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <motion.div
          className={`text-4xl font-bold ${temperatureColor}`}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          {weather.temperature}°C
        </motion.div>
        <motion.div
          className="text-secondary capitalize"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          {weather.condition}
        </motion.div>
      </motion.div>
      <motion.div
        className="flex justify-between text-secondary"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <motion.div
          className="flex items-center"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <Drop size={20} className="mr-2" />
          <span>{weather.humidity}%</span>
        </motion.div>
        <motion.div
          className="flex items-center"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <Wind size={20} className="mr-2" />
          <span>{weather.windSpeed} km/h</span>
        </motion.div>
      </motion.div>
      <AnimatePresence>
        {weather.condition === 'rainy' && <RainAnimation />}
        {weather.condition === 'snowy' && <SnowAnimation />}
        {weather.condition === 'sunny' && <SunAnimation />}
      </AnimatePresence>
    </motion.div>
  );
};

const RainAnimation = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 0.7 }}
    exit={{ opacity: 0 }}
    className="absolute inset-0 pointer-events-none"
  >
    {[...Array(20)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute top-0 w-0.5 h-8 bg-blue-400 rounded-full"
        style={{
          left: `${Math.random() * 100}%`,
        }}
        initial={{ y: '-10%' }}
        animate={{ y: '110%' }}
        transition={{
          duration: 1.5 + Math.random(),
          repeat: Infinity,
          delay: Math.random() * 2,
          ease: 'linear',
        }}
      />
    ))}
  </motion.div>
);

const SnowAnimation = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 0.6 }}
    exit={{ opacity: 0 }}
    className="absolute inset-0 pointer-events-none"
  >
    {[...Array(30)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-2 h-2 bg-white rounded-full"
        style={{
          left: `${Math.random() * 100}%`,
        }}
        initial={{ y: '-10%', x: Math.random() * 20 - 10 }}
        animate={{ y: '110%', x: Math.random() * 20 - 10 }}
        transition={{
          duration: 3 + Math.random() * 2,
          repeat: Infinity,
          delay: Math.random() * 3,
          ease: 'linear',
        }}
      />
    ))}
  </motion.div>
);

const SunAnimation = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.8 }}
    className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-yellow-300 to-yellow-400 rounded-full shadow-lg"
  >
    <motion.div
      className="absolute inset-0"
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
    >
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-4 bg-yellow-500 rounded"
          style={{
            top: '50%',
            left: '50%',
            transformOrigin: '0 32px',
            rotate: `${i * 45}deg`,
          }}
          animate={{ rotate: `${i * 45}deg` }}
          transition={{ duration: 20, loop: Infinity, ease: 'linear' }}
        />
      ))}
    </motion.div>
  </motion.div>
);

export default WeatherWidget;