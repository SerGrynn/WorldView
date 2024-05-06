import { restCountries } from "./api";
// Type : GET
// Tout les pays
export const fetchAllCountries = async () => {
  return await restCountries.get("/all").then((response) => response.data);
};

export const fetchCountry = async (code : string) => {
  return await restCountries.get("/alpha/" + code).then((response) => response.data);
};
