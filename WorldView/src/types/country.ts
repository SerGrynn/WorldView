// Fichier Typer

export type Country = {
  name: {
    common: string;
    official: string;
    nativeName: {
      [key: string]: {
        official: string;
        common: string;
      };
    };
  };
  latlng: number[];
  tld: string;
  area: number;
  borders: {
    [key: string]: string;
  };
  region: string;
  subregion: string;
  capital: string;
  ccn3: string;
  independent: boolean;
  unMember: boolean;
  population: number;
  currencies: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  gini: {
    [key: string]: string;
  };
  languages: {
    [key: string]: string;
  };
  demonyms: {
    [key: string]: {
      f: string;
      m: string;
    };
  };
  flags: {
    png: string;
    alt: string;
    svg: string;
  };
};
