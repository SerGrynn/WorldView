"use client";
import { fetchCountry } from "@/services/apiRequests";
import { Country } from "@/types/country";
import { useState, useEffect } from "react";

export default function Page({ params }: { params: { ccn3: string } }) {
  //recup param sous une variable
  const code = params.ccn3;

  const [country, setCountry] = useState<Country | null>(null);

  // Récup le pays en fonction du code ccn3
  useEffect(() => {
    if (code) {
      fetchCountry(code).then((data: Country[]) => {
        setCountry(data[0]);
      });
    }
  }, []);

  return (
    <div>
      {country ? (
        <div>
          <p className="text-center text-4xl">Details</p>
          <p className="text-3xl">{country.name.common}</p>
          <img src={country.flags.png} alt={country.flags.alt}></img>
          <div className="text-2xl">
            <p>Basic Country Information</p>
            <p>
              Official :{country.name.official} <br />
              Commun : {country.name.common}
            </p>
            {country.name.nativeName ? Object.keys(country.name.nativeName).map((key, i) => (
              <p key={i}>{country.name.nativeName[key].official}</p>
            )): "No Native name"}
            <p>tld : {country.tld}</p>
            <br />
          </div>
          <div className="text-2xl">
            <p>Geographical Data</p>
            <p>
              latitude & longitude : {country.latlng[0]}, {country.latlng[1]}
            </p>
            <p>Superficie : {country.area}</p>
            <div className="flex gap-2">
              <p>Borders :</p>
              {country.borders ? Object.keys(country.borders).map((key, i) => (
                <p className="" key={i}>
                  {country.borders[key]}
                </p>
              )): "No borders"}
            </div>
            <p>Region: {country.region}</p>
            <p> Subregion : {country.subregion}</p>
          </div>
          <br />

          <div className="text-2xl">
            <p>Political and Administrative Data</p>
            <p>Capital : {country.capital}</p>
            <p>Is it independent : {country.independent ? "Yes" : "No"}</p>
            <p>Is it a member of UN : {country.unMember ? "Yes" : "No"}</p>
          </div>

          <br />

          <div className="text-2xl">
            <p>Economic and Demographic Data</p>
            <p>Population : {country.population.toLocaleString()}</p>

            <div>
              {country.currencies ? Object.keys(country.currencies).map((key, i) => (
                <p key={i}>
                  Currency : {country.currencies[key].name}{" "}
                  {country.currencies[key].symbol}
                </p>
              )) : "No currencies"}
            </div>
            <div>
              {country.gini ? Object.keys(country.gini).map((key, i) => (
                <p className="" key={i}>
                  GINI coefficient : {country.gini[key]}
                </p>
              )): "None"}
            </div>

            <br />

            <div>
              <p> Cultural Data </p>

              {country.languages ? Object.keys(country.languages).map((key, i) => (
                <p className="" key={i}>
                  languages : {country.languages[key]}
                </p>
              )): "None"}
            </div>
            <div>
              <p> Demonyms : </p>
              {Object.keys(country.demonyms).map((key, i) => (
                <div key={i}>
                  <p className=""> F: {country.demonyms[key].f}</p>
                  <p> M: {country.demonyms[key].m} </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
