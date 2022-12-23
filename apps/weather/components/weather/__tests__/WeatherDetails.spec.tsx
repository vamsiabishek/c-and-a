import { act, renderWithProviders, screen } from "test-utils";
import WeatherDetails from "../WeatherDetails";
import fetch from "jest-fetch-mock";
import { weatherMock } from "apps/weather/mocks/weather";

describe("WeatherDetails component", () => {

  test("should render weather container with weather details", async () => {
    await act( async () => await renderWithProviders(<WeatherDetails />, { weather: weatherMock }));

    expect(screen.getByText(weatherMock.name)).toBeInTheDocument();
    expect(screen.getByText(weatherMock.main.temp, { exact: false })).toBeInTheDocument();
  });

  test("should show the error message when city search is invalid", async () => {
    await act( async () => await renderWithProviders(<WeatherDetails />, { errorMsg: "invalid search message" }));

    expect(screen.getByText("invalid search message")).toBeInTheDocument();
  });

  test("should return nothing when there are no weather details or error message", async () => {
    let renderer = null;
    await act( async () => renderer = await renderWithProviders(<WeatherDetails />, {}));

    expect(renderer.container.innerHTML).toBe("");
  });
})