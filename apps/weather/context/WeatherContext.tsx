import React, { createContext, useState } from 'react';
import { IWeather, IWeatherContext } from '@c-and-a/shared-types';

const initialData = {
  weather: undefined,
  setWeather: (weather: IWeather) => {
    // do nothing
  },
  loading: false,
  setLoading: (loading: boolean) => {
    // do nothing
  },
  errorMsg: null,
  setErrorMsg: (msg: string) => {
    // do nothing
  },
}

export const WeatherContext = createContext<IWeatherContext>(initialData);

export default function WeatherContextProvider({ children }) {
  const [weather, setWeather] = useState<IWeather>();
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  return (
    <WeatherContext.Provider value={{ weather, setWeather, loading, setLoading, errorMsg, setErrorMsg }}>
      {children}
    </WeatherContext.Provider>
  )
}