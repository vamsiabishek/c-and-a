export const getHeader = () => cy.get("[data-testid='header']");
export const searchInput = () => cy.get("input");
export const searchBtn = () => cy.get("button").contains("Search");
export const getCityName = () =>cy.get("[data-testid='city-name']");
export const getCityTemperature = () =>cy.get("[data-testid='city-temperature']");
export const getErrorMsg = () => cy.get("[data-testid='error-msg']");
