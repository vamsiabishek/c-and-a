import { act, renderWithProviders, screen } from "test-utils";
import WeatherTemplate from "../WeatherTemplate";
import fetch from "jest-fetch-mock";

const setWeather = jest.fn();
const setErrorMsg = jest.fn();
const setLoading = jest.fn();

describe("WeatherTemplate component", () => {
  const weatherContext = {
    setWeather,
    setErrorMsg,
    setLoading,
    loading: false
  }
  test("should render weather container with title weather and input to search city", async () => {
    fetch.mockResponseOnce("{}");
    await act( async () => await renderWithProviders(<WeatherTemplate />, weatherContext));

    expect(screen.getByText("Weather")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("enter city name")).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveTextContent('Search')
  })
})