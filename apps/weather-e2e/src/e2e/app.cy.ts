import { getHeader, searchInput, searchBtn, getCityName, getCityTemperature, getErrorMsg } from '../support/app.po';

describe('weather', () => {
  beforeEach(() => cy.visit('/'));

  it('should display Weather header and search input', () => {
    getHeader().should('contain', 'Weather');
    searchInput().should('be.visible');
    searchBtn().should('be.visible');
  });

  it('should display city not available error message when invalid city name is entered ', () => {
    searchInput().type('abc');
    searchBtn().click();
    getErrorMsg().should('have.text', 'city not found');
  });

  it('should display please enter city error message on empty search', () => {
    searchBtn().click();
    getErrorMsg().should('have.text', 'Please enter the city');
  });

  it('should display city weather details on searching for a city', () => {
    searchInput().type('dusseldorf');
    searchBtn().click();
    getCityName().should('be.visible');
    getCityTemperature().should('be.visible');
  });

});
