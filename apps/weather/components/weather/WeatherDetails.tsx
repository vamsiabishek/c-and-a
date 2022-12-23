import React, { useContext } from "react"
import { Box, Text, Icon, Error, ErrorMessage } from '@c-and-a/common-ui';
import WeatherInfoWithIcon from "./WeatherInfoWithIcon";
import { WeatherContext } from "../../context/WeatherContext";
import { ErrorBoundary } from "react-error-boundary";

function WeatherDetails() {
  const { weather, errorMsg } = useContext(WeatherContext);

  if(errorMsg) {
    return (
      <ErrorMessage message={errorMsg}/>
    )
  }
  
  if(!weather) {
    return null;
  }

  const { 
    name, 
    weather: weatherDetails, 
    main: { temp, pressure, humidity }, 
    wind: { speed }, 
    sys: { sunset } 
  } = weather;

  const getTime = (timeStamp) => {
    return `${new Date(timeStamp * 1000).getHours()}:${new Date(timeStamp * 1000).getMinutes()}`
  }

  return (
    <ErrorBoundary fallbackRender={Error}>
      <Box
        display="flex"
        justifyContent="center"
        padding="md"
        flexDirection="column"
      >
        <Box
          display="flex"
          justifyContent="center"
          padding="md"
          alignItems="center"
        >
          <Text textTransform="capitalize" fontSize="lg" data-testid="city-name">{name} </Text>
          <Text fontSize="xl" ml="md" data-testid="city-temperature">{temp}°c</Text>
          <Text fontSize="md" ml="sm" mr="sm" color="grey">| {weatherDetails[0].description}</Text>
          <Icon src={`http://openweathermap.org/img/wn/${weatherDetails[0].icon}.png`} />
        </Box>
        <Box
          display="flex"
          flexWrap="wrap"
          pt="md"
        >
          <WeatherInfoWithIcon name="sunset" value={getTime(sunset)} width="50%" icon="/icons/sunset.svg"/>
          <WeatherInfoWithIcon name="humidity" value={`${humidity}%`} width="50%" icon="/icons/humidity.svg"/>
          <WeatherInfoWithIcon name="wind" value={`${speed} meter/sec`} width="50%" icon="/icons/wind.svg"/>
          <WeatherInfoWithIcon name="pressure" value={pressure} width="50%" icon="/icons/pressure.svg"/>
        </Box>
      </Box>
    </ErrorBoundary>
  )
}

export default WeatherDetails;