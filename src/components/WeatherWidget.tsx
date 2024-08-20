/* Build a weather widget that changes its appearance based on the current weather conditions, including animated rain, snow, or sunshine effects using CSS animations and SVG. */
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-background w-80 p-6 rounded-radius-md shadow-medium overflow-hidden relative"
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-foreground">Weather</h2>
        {getWeatherIcon()}
      </div>
      <div className="mb-4">
        <div className="text-4xl font-bold text-primary">{weather.temperature}°C</div>
        <div className="text-secondary capitalize">{weather.condition}</div>
      </div>
      <div className="flex justify-between text-secondary">
        <div className="flex items-center">
          <Drop size={20} className="mr-2" />
          <span>{weather.humidity}%</span>
        </div>
        <div className="flex items-center">
          <Wind size={20} className="mr-2" />
          <span>{weather.windSpeed} km/h</span>
        </div>
      </div>
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
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="absolute inset-0 pointer-events-none"
  >
    {[...Array(20)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute top-0 w-0.5 h-8 bg-blue-400 rounded-full"
        style={{
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 2}s`,
        }}
        animate={{
          y: ['0%', '100%'],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 1 + Math.random(),
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    ))}
  </motion.div>
);

const SnowAnimation = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="absolute inset-0 pointer-events-none"
  >
    {[...Array(30)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute top-0 w-2 h-2 bg-white rounded-full"
        style={{
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 3}s`,
        }}
        animate={{
          y: ['0%', '100%'],
          x: ['-10px', '10px', '-10px'],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 3 + Math.random() * 2,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    ))}
  </motion.div>
);

const SunAnimation = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.5 }}
    className="absolute top-4 right-4 w-16 h-16 bg-yellow-300 rounded-full"
    style={{
      boxShadow: '0 0 20px rgba(255, 204, 0, 0.6)',
    }}
  >
    <motion.div
      className="absolute inset-0"
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
    >
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-4 bg-yellow-400"
          style={{
            top: '50%',
            left: '50%',
            transformOrigin: '0 32px',
            transform: `rotate(${i * 45}deg)`,
          }}
        />
      ))}
    </motion.div>
  </motion.div>
);

export default WeatherWidget;
