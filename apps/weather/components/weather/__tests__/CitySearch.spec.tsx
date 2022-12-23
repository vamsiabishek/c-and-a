import { act, fireEvent, renderWithProviders, screen } from "test-utils";
import CitySearch from "../CitySearch";
import fetch from "jest-fetch-mock";
import { weatherMock } from "apps/weather/mocks/weather";

const setWeather = jest.fn();
const setErrorMsg = jest.fn();
const setLoading = jest.fn();

describe("CitySearch component", () => {

  const weatherContext = {
    setWeather,
    setErrorMsg,
    setLoading
  }

  beforeEach(() => {
    fetch.mockResponseOnce("{}");
  })

  test("should render weather container with input and a button to search city", async () => {
    await act( async () => await renderWithProviders(<CitySearch />, weatherContext));

    expect(screen.getByPlaceholderText("enter city name")).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveTextContent('Search')
  });

  test("should show the error message Please enter the city when search button is clicked without any city", async () => {
    await act( async () => await renderWithProviders(<CitySearch />, weatherContext));

    fireEvent.click(screen.getByRole('button'));

    expect(setErrorMsg).toHaveBeenCalled();
  });

  test("should set weather details when searched for a city", async () => {
    fetch.mockResponseOnce(JSON.stringify(weatherMock));
    await act( async () => await renderWithProviders(<CitySearch />, weatherContext));
    fireEvent.change(screen.getByPlaceholderText("enter city name"), {
      target: { value: "dusseldorf" }
    });
    await act( async () => await fireEvent.click(screen.getByRole('button')));

    expect(setWeather).toHaveBeenCalled();
  });

  test("should set error msg details when searched for an invalid city name", async () => {
    fetch.mockResponseOnce(JSON.stringify({message: "invalid city name"}));
    await act( async () => await renderWithProviders(<CitySearch />, weatherContext));
    fireEvent.change(screen.getByPlaceholderText("enter city name"), {
      target: { value: "abc" }
    });

    await act( async () => await fireEvent.click(screen.getByRole('button')));
  
    expect(setErrorMsg).toHaveBeenCalled();
  })
})