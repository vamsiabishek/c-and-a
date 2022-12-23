import React from 'react';
import { Box, ThemeProvider, theme } from '@c-and-a/common-ui';
import WeatherTemplate from '../components/weather/WeatherTemplate';
import WeatherContextProvider from '../context/WeatherContext';


export function Index() {
  return (
    <ThemeProvider>
      <WeatherContextProvider>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          padding="md"
          boxSizing="border-box"
          background={theme.colors.grey_1}
          minHeight="100vh"
        >
          <WeatherTemplate />
        </Box>
      </WeatherContextProvider>
    </ThemeProvider>
  );
}

export default Index;
