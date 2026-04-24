import { Council, CouncilParticipant } from "@/types";
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

  const formatParticipant = (participant: CouncilParticipant) => {
    return participant === "single" ? "Single Delegate" : "Double Delegate";
  };

  return (
    <div className="relative w-full flex justify-center items-center">
      <div className="w-full lg:w-[1200px] h-[560px] bg-biru-1/65 rounded-4xl overflow-hidden flex flex-row py-7 pl-7">
        <div className="w-full h-full flex flex-col gap-5">
          <div className="w-full flex flex-col gap-1 pr-1">
            <h1 className="text-3xl lg:text-7xl font-extrabold font-bodoni text-biru-3">
              {organization}
            </h1>
            {expansion && <p className="font-bodoni font-bold text-biru-3 lg:text-2xl">
              ({expansion})
            </p>}
            <p className="font-bodoni font-bold text-biru-3 lg:text-3xl">
              &quot;{topic}&quot;
            </p>
          </div>

          <div className="w-full overflow-y-auto no-scrollbar-bg pr-5">
            <p className="text-biru-3 leading-relaxed font-plus-jakarta lg:text-lg text-justify">
              {description}
            </p>
          </div>
        </div>

        <div className="w-[350px] h-full flex flex-col justify-center items-center">
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
