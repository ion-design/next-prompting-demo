/* Weather card that displays weather and a suggestion of what to wear at a zip code */
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CloudSun, CloudRain, CloudSnow, Wind, Drop, MapPin } from '@phosphor-icons/react';
import Input from '@/components/ion/Input';
import Divider from '@/components/ion/Divider';

const WeatherCard = () => {
  const [zipCode, setZipCode] = useState('');
  const [weather, setWeather] = useState({
    condition: '',
    temperature: 0,
    humidity: 0,
    windSpeed: 0,
  });
  const [loading, setLoading] = useState(false);

  const fetchWeather = async () => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    const conditions = ['sunny', 'rainy', 'snowy'];
    const randomCondition = conditions[Math.floor(Math.random() * conditions.length)];
    setWeather({
      condition: randomCondition,
      temperature: Math.floor(Math.random() * 35) - 5,
      humidity: Math.floor(Math.random() * 100),
      windSpeed: Math.floor(Math.random() * 30),
    });
    setLoading(false);
  };

  useEffect(() => {
    if (zipCode.length === 5) {
      fetchWeather();
    }
  }, [zipCode]);

  const getWeatherIcon = () => {
    switch (weather.condition) {
      case 'rainy':
        return <CloudRain size={48} weight="fill" className="text-primary" />;
      case 'snowy':
        return <CloudSnow size={48} weight="fill" className="text-primary" />;
      default:
        return <CloudSun size={48} weight="fill" className="text-primary" />;
    }
  };

  const getClothingSuggestion = () => {
    if (weather.temperature < 0) return "It's freezing! Wear a heavy coat, scarf, gloves, and warm boots.";
    if (weather.temperature < 10) return "It's cold. Wear a warm jacket, hat, and gloves.";
    if (weather.temperature < 20) return "It's cool. A light jacket or sweater should be fine.";
    if (weather.temperature < 30) return "It's warm. T-shirt and shorts or light pants are good.";
    return "It's hot! Wear light, breathable clothing and don't forget sunscreen!";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-background w-full max-w-md mx-auto p-6 rounded-radius-sm shadow-medium"
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <h2 className="text-2xl font-semibold text-foreground mb-4">Weather Check</h2>
      <div className="mb-4">
        <Input
          placeholder="Enter ZIP code"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
          iconLeading={<MapPin size={20} />}
        />
      </div>
      <AnimatePresence>
        {loading ? (
          <motion.div
            key="loading"
            className="text-center text-secondary flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="loader ease-linear rounded-full border-4 border-t-4 border-secondary h-6 w-6 mr-3"
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 1,
                ease: "linear",
              }}
            />
            Loading weather data...
          </motion.div>
        ) : weather.condition ? (
          <motion.div
            key="weather-info"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-between items-center mb-4">
              <motion.div
                className="text-4xl font-bold text-primary"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                {weather.temperature}°C
              </motion.div>
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                {getWeatherIcon()}
              </motion.div>
            </div>
            <motion.div
              className="mb-4"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="text-lg font-semibold text-foreground capitalize">{weather.condition}</div>
              <div className="text-secondary">
                <div className="flex items-center">
                  <Drop size={20} className="mr-2" />
                  <span>Humidity: {weather.humidity}%</span>
                </div>
                <div className="flex items-center">
                  <Wind size={20} className="mr-2" />
                  <span>Wind: {weather.windSpeed} km/h</span>
                </div>
              </div>
            </motion.div>
            <Divider />
            <motion.div
              className="bg-neutral-container p-4 rounded-radius-sm mt-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <p className="text-on-primary-container">{getClothingSuggestion()}</p>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="prompt"
            className="text-center text-secondary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            Enter a ZIP code to check the weather
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default WeatherCard;