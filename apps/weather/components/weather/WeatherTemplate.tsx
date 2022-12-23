import React, { useContext } from 'react';
import { Loader, Box, theme, Text } from '@c-and-a/common-ui';
import CitySearch from './CitySearch';
import WeatherDetails from './WeatherDetails';
import { WeatherContext } from '../../context/WeatherContext';

export function WeatherTemplate() {
  
  const { loading } = useContext(WeatherContext);

  if(loading) {
    return <Loader />
  }

  return (
      <Box 
        paddingX="lg" 
        paddingY="md" 
        paddingBottom="lg" 
        borderRadius="xl"
        data-testid="weather-container"
        background={theme.colors.white}
        width={550}
        boxShadow={`0px 0px 15px ${theme.colors.grey_2}`}
        boxSizing="border-box"
        height="fit-content"
        display="flex"
        flexDirection="column"
      >
        <Text fontSize="xxl" padding="sm" data-testid="header">Weather</Text>
        <CitySearch />
        <WeatherDetails />
      </Box>
  );
}

export default WeatherTemplate;