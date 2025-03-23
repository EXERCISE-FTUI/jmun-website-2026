import { Council } from "@/types";
import fomLogo from "../public/council-logos-optimized/FOM.png";
import auLogo from "../public/council-logos-optimized/African Union.png";
import alLogo from "../public/council-logos-optimized/Arab League.png";
import disecLogo from "../public/council-logos-optimized/Disec.png";
import hccLogo from "../public/council-logos-optimized/HCC.png";
import pressLogo from "../public/council-logos-optimized/Press Corps.png";
import sochumLogo from "../public/council-logos-optimized/Sochum.png";
import unwomenLogo from "../public/council-logos-optimized/UN Women.png";
import undpLogo from "../public/council-logos-optimized/UNDP.png";
import unodcLogo from "../public/council-logos-optimized/UNODC.png";
import unscLogo from "../public/council-logos-optimized/UNSC.png";

export const councils: Council[] = [
  {
    organization: "HCC",
    logo: hccLogo, // Indonesian Garuda symbol
    topic: "In Turmoil Lies Opportunity: Dawn of the Indonesian New Order",
    participant: "single",
    level: "advanced",
    location: "offline",
    description:
      "The date is October 5th, 1965. The Indonesia Armed Forces’ birthday celebrations ring with the deathly silence of murder, deceit, and treachery from the events that occurred just five days prior. While benevolent in intention, current events have led President Soekarno’s NASAKOM (Nationalism, Religion, Communism) doctrine to place Indonesia’s major power bases at a standoff; must blood be repaid with blood? Must fire engulf the nation? Only one way to find out in a crisis that will set the tone of Indonesia’s governance for decades to come.",
  },
  {
    organization: "UNSC",
    logo: unscLogo, // United Nations emblem
    topic: "Ethnic Warfare: Alleviating the Humanitarian Crisis in Myanmar",
    participant: "double",
    level: "advanced",
    location: "offline",
    description:
      "Myanmar has faced a troubled history of internal military conflicts, culminating in its worst humanitarian crisis following a military coup in 2021. Since 1962 the military Junta has maintained power through violence against civilians and the government, exemplified by the brutal suppression of the 1988 protests. Ethnic minorities were promised autonomy in the Panglong Agreement, but they became the targets of “Burmanization” which suppressed their culture, language, and religion. Despite introducing a 2008 constitution to allow limited democracy, the military retained power, fueling ongoing conflicts like the Rohingya genocide. The coup overthrew the National Unity Government (NUG), sparking civil war as defense groups and Ethnic Armed Minorities (EAMs) resisted the junta. Efforts for peace have failed, leaving Myanmar in deepening chaos.",
  },
  {
    organization: "African Union",
    logo: auLogo, // African Union emblem with map of Africa
    topic:
      "Currency of Control: The CFA Franc and the Subjugation of Africa's Financial Sovereignty",
    participant: "single",
    level: "advanced",
    location: "offline",
    description:
      "The remnant of colonialism is still going strong in West and Central Africa with the CFA franc, a currency implemented when French was in the process of decolonizing, that is pegged to the French currency of Euro today. This gives the European Central Bank effective control of the monetary policy of the 14 countries who still use the currency. Under the agreement that governs the use of the currency, 50% of each states' foreign currency reserve also rests within French control. With the growing calls of CFA franc adopter states to ditch the currency, the African Union must find a way to position itself to aid the transition and minimize the adverse side effect that a transition may bring.",
  },
  {
    organization: "FOM",
    logo: fomLogo, // Formula 1 logo
    topic:
      "Beyond the Cockpit: The Question of Granting More Decision-Making Power to Drivers",
    participant: "single",
    level: "intermediate",
    location: "offline",
    description:
      "The Formula One Management (FOM) council delves into the question of granting drivers more decision-making power, a topic central to the future of motorsport governance. While the governance structure of Formula 1 has traditionally prioritized team principals, engineers, and corporate stakeholders, drivers—equipped with unparalleled on-track experience—have increasingly called for a voice in shaping safety regulations, car design, and race strategies. Advocates argue that their involvement could modernize the sport and address emerging challenges like sustainability and fan engagement, while critics warn of potential disruptions to the established governance model. As FOM CEO Stefano Domenicali advocates for innovation while preserving the sport’s competitive integrity, this council tasks delegates with finding a balance. By examining perspectives from all stakeholders i.e. drivers, team principals, engineers, corporate partners, the FIA, the GPDA, the FOM, the media representative and the academic analyst. delegates must determine to what extent driver involvement should influence Formula 1’s governance to ensure its continued evolution.",
  },
  {
    organization: "Arab League",
    logo: alLogo, // Arab League emblem with Arabic text
    topic:
      "Toward a Green Oasis: Crafting a Post-Oil Strategy for the Arab World",
    participant: "double",
    level: "intermediate",
    location: "online",
    description:
      'As global energy markets evolve and the era of oil dominance nears its end, the Arab League faces the pressing challenge of securing a sustainable economic and social future for its member states. This simulation will explore strategies to diversify economies, invest in renewable energy, and strengthen regional collaboration in non-oil sectors such as technology, tourism, and agriculture. Delegates must navigate disparities in economic development, political instability, and resource availability across member states to create a unified framework for a "Post-Oil Arab Economy." Discussions will address education, innovation, and climate adaptation as key pillars, balancing national interests with collective goals to ensure prosperity and stability in a post-oil world.',
  },
  {
    organization: "DISEC",
    logo: disecLogo, // Disarmament emblem
    topic:
      "Equitable Disarmament: Addressing the Trust Deficit Between Nuclear Weapon States and Non-Nuclear Weapon States",
    participant: "single",
    level: "intermediate",
    location: "online",
    description:
      "The Nuclear non-Proliferation Treaty (NPT) has been said to be fairly successful with the rapid decrease in nuclear weapons. However, ever since 2020, there has been a concerning rise in nuclear development, particularly in Russia, China, Pakistan, India, Israel, and North Korea, with other Member States’s number of arsenal's remaining constant. Just recently, Russia has also amended its nuclear doctrine to stipulate that an attack by a Non-Nuclear Weapon State (NNWS), supported by a Nuclear Weapon State (NWS), will be regarded as a coordinated assault on Russia. This would fall under the conditions under which the country would consider using its nuclear arsenal, escalating the preexisting mistrust between nuclear powers and NEWS even further. Hence, DISEC’s role in disarmament is even more crucial than ever before to navigate this complex yet critical matter.",
  },
  {
    organization: "UNODC",
    logo: unodcLogo, // United Nations emblem
    topic:
      "Fighting Fake Medicines: Tackling the Global Proliferation of Counterfeit Medicine and its Impacts on Global Health",
    participant: "single",
    level: "beginner",
    location: "offline",
    description:
      "Counterfeit medicines have long been a menace to global health. Counterfeit pharmaceutical products and medical devices are those that are deliberately mislabeled as to their identity or source; and they include products which may contain no active ingredients, insufficient active ingredients, incorrect ingredients, or fake packaging. These illicit pharmaceuticals and medicine devices, with their deceptive packaging and often subpar ingredients, endanger the health of unknowing consumers while also undermining the healthcare system's legitimacy. Reflected by the Resolution 20/6 of the UN Commission on Crime Prevention and Criminal Justice (CCPCJ), it is the United Nations on Office on Drugs (UNODC) job to combat these fradulent medicine markets.",
  },
  {
    organization: "UN Women",
    logo: unwomenLogo, // UN Women symbol
    topic:
      "Addressing the Commercialization of Pornography and its Impacts Towards the Rights and Safety of Women",
    participant: "single",
    level: "beginner",
    location: "offline",
    description:
      "The global pornographic industry, valued at over USD 129 billion in 2023, has become a highly commercialized sector, raising concerns about its societal impacts. The normalization of violence in pornography poses psychological risks to vulnerable groups, such as children, and may exacerbate gender inequality and violence against women, particularly in societies where harmful gender prejudices persist. The Commission on the Status of Women (CSW), a key UN body dedicated to promoting gender equality and empowering women, plays a crucial role in addressing these challenges. The CSW must navigate the complex task of mitigating the societal impacts of pornographic materials while upholding rights to expression and advocating for improved legislation to protect sex workers and women from exploitation, abuse, and trafficking, ensuring their dignity and equality.",
  },
  {
    organization: "UNDP",
    logo: undpLogo, // UNDP logo
    topic:
      "Sustainable Growth: Ensuring a Just Transition to Renewable Economies",
    participant: "single",
    level: "beginner",
    location: "offline",
    description:
      "There is no question that the modern industrial and economic models have accelerated development worldwide, achieving the greatest levels of prosperity in the history of humanity. However, these same models have also opened a Pandora's box of climate change impacts, challenging the international community to address its widespread consequences. As climate change reshapes the global economy, UNDP is tasked with navigating the intertwined challenges of financial stability, inequality, and sustainable development. Central to this agenda is the need to foster shared prosperity during the shift to green energy. As the world transitions to renewable technologies, it is critical to prevent the replication or amplification of historical inequalities, ensuring that the benefits of this transformation are equitably shared between developed and developing nations alike.",
  },
  {
    organization: "SOCHUM",
    logo: sochumLogo, // Social and Humanitarian emblem
    topic:
      "Human Rights in Crisis: Assessing the Effectiveness of Human Rights Agreements in Escalating Global Conflicts",
    participant: "single",
    level: "beginner",
    location: "online",
    description:
      "The global state of human rights has grown increasingly fragile, with conflicts and crises stripping millions of individuals of their dignity, safety, and basic freedoms. In 2024 alone, nearly 300 million people across 72 countries required humanitarian aid, as seen in the devastating crises in regions like Gaza and Haiti. Gaza has suffered relentless airstrikes, displacing families and leaving survivors with deep physical and emotional scars, while Haiti faces a humanitarian disaster fueled by gang violence and political instability, forcing over half a million people into displacement. These dire situations highlight the urgent need to protect the most vulnerable and reaffirm the global commitment to human rights. Despite the foundation laid by the Universal Declaration of Human Rights, disparities in cultural, political, and economic priorities, along with emerging challenges like digital surveillance and democratic backsliding, complicate its implementation. As one of six main committees at the General Assembly of the United Nations, it is up to the Social, Humanitarian, and Cultural (SOCHUM) committee to evaluate the effectiveness of human rights agreements amidst the escalation of global conflicts.",
  },
  {
    organization: "Press Corps",
    logo: pressLogo, // Press emblem with flag
    topic: "", // No topic visible in the image for Press Corps
    participant: "single",
    location: "offline",
    description:
      "As delegates engage in debates and negotiations on a range of global issues, the Press Corps remains steadfast in its pursuit of truth, transparency, clarity, and global citizenship as the 4th pillar of democracy. Their role extends beyond simply producing articles; they are essential to unraveling the complexities of international relations and global affairs. Hence, Press Corps delegates are tasked with reporting on events, crises, and proceedings within the councils as well as doing press conferences. With the freedom to create and offer fresh perspectives, the Press Corps serves as a symbol of journalistic integrity, shedding light to global affairs.",
  },
];
