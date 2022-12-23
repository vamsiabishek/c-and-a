import React, { useContext, useEffect, useState } from "react"
import { Box, SearchInput } from '@c-and-a/common-ui';
import useFetchWeatherData from "../../hooks/useFetchWeatherData";
import { WeatherContext } from "../../context/WeatherContext";

function CitySearch () {
  const [placeName, setPlaceName] = useState('');
  const [searchTxt, setSearchTxt] = useState('');
  const { data, errorMsg } = useFetchWeatherData(searchTxt);
  const { setWeather, setLoading, setErrorMsg } = useContext(WeatherContext);

  useEffect(() => {
    if(data) {
      setWeather({...data});
      setLoading(false);
    }
  }, [data]);

  useEffect(() => {
    setErrorMsg(errorMsg);
    setLoading(false);
  }, [errorMsg]);

  const fetchWeatherData = () => {
    if(placeName.trim().length === 0) {
      setErrorMsg('Please enter the city');
    } else {
      setErrorMsg(null);
    }
    setSearchTxt(placeName.trim());
  }

  return (
    <Box
      display="flex"
      justifyContent="flex-end"
      paddingTop="md"
    >
      <SearchInput 
        value={placeName}
        onChange={setPlaceName}
        onSearch={fetchWeatherData}
        placeHolder="enter city name"
      />
    </Box>
  )
}

export default CitySearch;