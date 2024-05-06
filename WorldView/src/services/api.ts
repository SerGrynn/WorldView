import axios from "axios";

// Récup
export const restCountries = axios.create({
  baseURL: "https://restcountries.com/v3.1/"
});
