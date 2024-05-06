"use client";
import { useState, useEffect } from "react";
import { fetchAllCountries } from "../services/apiRequests";
import type { Country } from "../types/country";
import { CountryCard } from "../components/CountryCard";
import Link from 'next/link'

export default function Home() {
  const [data, setData] = useState<Country[]>([]);

  // Récupération de la requête api de tout les pays
  // Une seul execution
  useEffect(() => {
    fetchAllCountries().then((data) => {
      setData(data);
      console.log(data);
    });
  }, []);

  return (
    <div className="w-full flex flex-col justify-center items-center gap-6">
      {data &&
        data.map((country) => {
          return (
            <Link href={`/country/${country.ccn3}`} key={country.ccn3}>
              <CountryCard
                title={country.name.common}
                flag={country.flags.svg}
                alt={country.flags.alt}
              />
              More details
            </Link>
          );
        })}
        
    </div>
  );
}
