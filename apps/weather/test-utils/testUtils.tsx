import React, { PropsWithChildren } from 'react';
import { render, RenderResult } from '@testing-library/react';
import type { RenderOptions } from '@testing-library/react';
import { ThemeProvider } from '@c-and-a/common-ui';
import { IWeatherContext } from '@c-and-a/shared-types';
import { WeatherContext } from '../context/WeatherContext';

export const renderWithProviders = (
  ui: React.ReactElement,
  weatherContext?: IWeatherContext,
  {
    ...renderOptions
  }: RenderOptions = {}
): RenderResult => {
  function Wrapper({ children }: PropsWithChildren) {
    return (
      <ThemeProvider>
        <WeatherContext.Provider value={weatherContext}>
         {children}
        </WeatherContext.Provider>
      </ThemeProvider>
    );
  }
  
  return { ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}

export * from "@testing-library/react";

export default renderWithProviders;