import Image from "next/image";

// Type pour Props du component CountryCard
interface ICountryCardProps {
  title: string;
  flag: string;
  alt: string;
}

//Component CountryCard
export const CountryCard = ({ title, flag, alt }: ICountryCardProps) => {
  return (
    <div className="w-[500] h-[500]">
      <h2>{title}</h2>
      <Image
        quality={100}
        src={flag}
        alt={alt}
        width={300}
        height={300}
      ></Image>
    </div>
  );
};
