import { useState, useEffect } from 'react';
import { IWeather } from '@c-and-a/shared-types';      

const useFetchWeatherData = (city = "dusseldorf") => {
  const [data, setData] = useState<IWeather | undefined>();
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  //if(city.length === 0 ) city = "dusseldorf"

  const beforeFetch = () => {
    setLoading(true);
    setData(undefined);
    setErrorMsg(null);
  }

  useEffect(() => {
    if(city) {
      beforeFetch();
      fetch(`/api/weather?city=${city}`)
        .then(jsonData => jsonData.json())
        .then(res => {
          if(res.message) {
            setErrorMsg(res.message);
          } else {
            setData(res);
          }
          setLoading(false);
        });
    }
  }, [city])

  return { data, loading, errorMsg };
};

export default useFetchWeatherData;
