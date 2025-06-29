import { Council, CouncilParticipant } from "@/types";
import { capitalizeFirstLetter, changeDelimiter } from "@/utils";
import Image from "next/image";

interface CouncilCardProps {
  council: Council;
  nextOrganization?: string;
}

const CouncilCard: React.FC<CouncilCardProps> = ({
  council,
  nextOrganization,
}) => {
  const {
    topic,
    logo,
    organization,
    participant,
    level = "beginner",
    description,
  } = council;

  const formatParticipant = (participant: CouncilParticipant) => {
    return participant === "single" ? "Single Delegate" : "Double Delegate";
  };

  return (
    <div className="w-full rounded-lg overflow-hidden">
      {/* Top row: image and title section */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 p-6 pb-0">
        <div className="flex-1 flex flex-col justify-center gap-2">
          <h2 className="text-4xl lg:text-6xl font-extrabold font-bodoni text-white">
            {organization}
          </h2>
          <p className="text-white font-bold text-3xl font-bodoni">
            Council Type: {capitalizeFirstLetter(level)} -{" "}
            {formatParticipant(participant)}
          </p>
          <p className="font-bodoni font-bold text-2xl lg:text-4xl">
            &quot;{topic}&quot;
          </p>
        </div>
        <div className="w-full md:w-1/3 flex items-center justify-center">
          <div className="relative w-48 h-48">
            <Image
              src={logo}
              alt={`${organization} logo`}
              layout="fill"
              objectFit="contain"
              className="max-w-full"
            />
          </div>
        </div>
      </div>
      {/* Description below, full width */}
      <div className="w-full px-6 pb-6 pt-4">
        {!!nextOrganization && (
          <div id={changeDelimiter(nextOrganization.toLowerCase())}></div>
        )}
        <p className="text-white leading-relaxed font-plus-jakarta lg:text-lg text-justify">
          {description}
        </p>
      </div>
    </div>
  );
};

export default CouncilCard;
