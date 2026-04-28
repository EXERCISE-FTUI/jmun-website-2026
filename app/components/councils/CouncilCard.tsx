import { Council } from "@/types";
import { capitalizeFirstLetter } from "@/utils";
import Image from "next/image";

interface CouncilCardProps {
  council: Council;
  nextOrganization?: string;
}

const CouncilCard: React.FC<CouncilCardProps> = ({ council }) => {
  const {
    topic,
    logo,
    expansion,
    organization,
    participant,
    level = "beginner",
    location,
    description,
  } = council;

  return (
    <div className="relative w-full flex justify-center items-center">
      <div className="w-full lg:w-[1200px] h-auto md:h-[560px] bg-biru-1/65 rounded-4xl overflow-hidden flex flex-row py-7 pl-7 max-md:py-4 max-md:pl-5 max-md:pr-5">
        <div className="w-full h-full flex flex-col gap-2 md:gap-5">
          <div className="w-full flex flex-col gap-1 max-md:gap-2 md:pr-1">
            <h1 className="text-3xl lg:text-7xl font-extrabold font-bodoni text-biru-3">
              {organization}
            </h1>
            {expansion && <p className="font-bodoni font-bold text-biru-3 lg:text-2xl">
              ({expansion})
            </p>}
            <div className="w-full md:hidden md:w-[300px] h-full flex flex-row gap-2">
              <div className="w-full rounded-full py-1 flex justify-center items-center bg-biru-3 border-1 border-kuning">
                <h1 className="text-[15px] font-bold font-bodoni text-white text-center">
                  {capitalizeFirstLetter(participant)}
                </h1>
              </div>

              <div className="w-full rounded-full py-1 flex justify-center items-center bg-biru-3 border-1 border-kuning">
                <h1 className="text-[15px] font-bold font-bodoni text-white text-center">
                  {capitalizeFirstLetter(level)}
                </h1>
              </div>

              <div className="w-full rounded-full py-1 flex justify-center items-center bg-biru-3 border-1 border-kuning">
                <h1 className="text-[15px] font-bold font-bodoni text-white text-center">
                  {capitalizeFirstLetter(location)}
                </h1>
              </div>
            </div>
            <p className="font-bodoni font-bold text-biru-3 lg:text-3xl">
              &quot;{topic}&quot;
            </p>

            <div className="md:hidden relative w-full h-[192px]">
              <Image
                src={logo}
                alt={`${organization} logo`}
                layout="fill"
                sizes="100vw"
                objectFit="contain"
                className="max-w-full"
              />
            </div>
          </div>

          <div className="w-full md:overflow-y-auto no-scrollbar-bg max-md:pr-0 pr-5">
            <p className="text-biru-3 leading-relaxed font-plus-jakarta lg:text-lg text-justify">
              {description}
            </p>
          </div>
        </div>

        <div className="w-[350px] max-md:hidden h-full flex flex-col justify-center items-center">
          <div className="relative w-full h-[300px]">
            <Image
              src={logo}
              alt={`${organization} logo`}
              layout="fill"
              objectFit="contain"
              className="max-w-full"
            />
          </div>

          <div className="w-[220px] h-full flex flex-col items-center mt-4 gap-2 p-2">
            <div className="w-full rounded-full py-1 flex justify-center items-center bg-biru-3 border-1 border-kuning">
              <h1 className="text-3xl mb-0.5 font-bold font-bodoni text-white text-center">
                {capitalizeFirstLetter(participant)}
              </h1>
            </div>

            <div className="w-full rounded-full py-1 flex justify-center items-center bg-biru-3 border-1 border-kuning">
              <h1 className="text-3xl mb-0.5 font-bold font-bodoni text-white text-center">
                {capitalizeFirstLetter(level)}
              </h1>
            </div>

            <div className="w-full rounded-full py-1 flex justify-center items-center bg-biru-3 border-1 border-kuning">
              <h1 className="text-3xl mb-0.5 font-bold font-bodoni text-white text-center">
                {capitalizeFirstLetter(location)}
              </h1>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default CouncilCard;
