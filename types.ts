import { StaticImageData } from "next/image";

export type CouncilLevel = "beginner" | "intermediate" | "advanced";
export type CouncilParticipant = "single" | "double";
export type CouncilLocation = "offline" | "online";

export type Council = {
  topic: string;
  logo: StaticImageData;
  organization: string;
  participant: CouncilParticipant;
  level?: CouncilLevel;
  location: CouncilLocation;
  expansion?: string;
  description: string;
};
