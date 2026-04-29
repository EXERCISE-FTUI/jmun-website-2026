import { Council } from "@/types";
import ecosocLogo from "../public/council-logos-new/ecosoc.png";
import unepLogo from "../public/council-logos-new/unep.png";
import unhrcLogo from "../public/council-logos-new/unhrc.png";
import kemaLogo from "../public/council-logos-new/kema.png";
import whologo from "../public/council-logos-new/who.png";
import pressLogo from "../public/council-logos-new/presscorps.png";
import hccLogo from "../public/council-logos-new/hcc.png";
import eucoLogo from "../public/council-logos-new/euco.png";
import icaoLogo from "../public/council-logos-new/icao.png";
import unscLogo from "../public/council-logos-new/unsc.png";
import faoLogo from "../public/council-logos-new/fao.png";
import unescoLogo from "../public/council-logos-new/unesco.png";

export const councils: Council[] = [
  {
    organization: "WHO",
    expansion: "World Health Organization",
    logo: whologo,
    topic: "Safeguarding Birth Rates: Combating Childhood Chronic Malnutrition",
    participant: "single",
    level: "beginner",
    location: "offline",
    description:
      "A global health issue that has persisted over the decades, inadequate nutrition and unequal access to basic services have silently shaped the destinies of societies. Nowhere is this more evident than in the persistence of stunting, a condition rooted not only in food security, but also in poverty, limited healthcare, unsafe sanitation, and social inequality. On one side of the country, there are millions of children facing impaired growth due to chronic malnutrition, but on the other, maternal undernutrition and limited prenatal care perpetuate intergenerational stunting. As pressing global development challenges, stunting demands a coordinated action to ensure every child regardless of geography is given an equal opportunity to reach their full growth. Thus, these realities raise a critical question: what can the global community do to protect the physical and cognitive development of its youngest generation?",
  },
  {
    organization: "UNEP",
    expansion: "UN Environmental Programme",
    logo: unepLogo,
    topic:
      "Toxic Grounds, Erosive Waste: Cultivating Soil Remediation through Historical & Corporate Accountability",
    participant: "single",
    level: "beginner",
    location: "offline",
    description:
      "Soil is the foundation of human development, yet it remains one of the most overlooked environmental crises. According to global statistics, there are 500 million hectares of land with five million soil contamination sites globally, where different heavy metals or metalloids have poisoned the soils. Furthermore, large tracts of land have been damaged by contamination from mining, intensive agriculture, industrial operations, poor waste management, and chemical abuse, endangering water supplies, biodiversity, and food security. With UNEP as the leading body that plays a huge role in environmental authority within the UN system, how can UNEP strengthen international frameworks to support soil remediation in contaminated regions, while ensuring that historically marginalized communities receive equitable access to restored land and resources?",
  },
  {
    organization: "ECOSOC",
    expansion: "United Nations Economic and Social Council",
    logo: ecosocLogo,
    topic:
      "Building Resilient Safety Nets: Expanding Socio-Economic Protections for Informal Employees",
    participant: "single",
    level: "beginner",
    location: "offline",
    description:
      "Informal workers are the most vulnerable demographic in economic crises as they often lack essential protections such as health insurance, paid sick leave, and minimum wage guarantees. With little to no financial safety net, any disruptions whether caused by illness, reduced demands, or broader economic downturns, it can quickly push them into hardships. As developers create more and more opportunities for workers in the gig economy through apps like Gojek, Uber, and Grab, there exists a policy gap where these workers are given insufficient safety nets when fate turns an unfortunate eye, risking poverty, homelessness, and financial ruin. As a result, they face unstable incomes and a limited workplace security, underscoring the urgent need for more inclusive policies that protect their welfare without stifling innovations. Hence, it is up to ECOSOC to address these gaps and ensure that economic innovation is matched with inclusive protections that safeguard worker welfare. ",
  },
  {
    organization: "UNHRC",
    expansion: "United Nations Human Rights Council",
    logo: unhrcLogo,
    topic:
      "Privacy In the Digital Age: The Limits of Data Collection and Protection",
    participant: "single",
    level: "beginner",
    location: "offline",
    description:
      'In the rapid digitalization of humanity’s day to day life data has become one of the world\'s most valuable commodities since humans are present online in every sector changing the way we communicate, work, and access information. However concerns regarding the protection of personal data and the right to privacy arise where governments and the private sector can collect vast amounts of personal information on a whim. The right to privacy is governed under Article 12 of the Universal Declaration of Human Rights where it guarantees the right to privacy and protects individuals against arbitrary interference with their family, home, correspondence, and reputation. Despite the protection in place modern technologies such as mass surveillance systems and large scale data analytics have enabled unprecedented monitoring and profiling of individuals in which the data can be used for benevolent or malevolent purposes.',
  },
  {
    organization: "KEMA",
    expansion: "Korean Entertainment Management Association",
    logo: kemaLogo,
    topic:
      "The Seoul of K-Pop: Balancing Corporate Competition with Creative Freedom",
    participant: "single",
    level: "intermediate",
    location: "offline",
    description:
      "The global rise of the Korean Pop industry has transformed from merely a regional music scene into a billion-dollar global culture industry that’s driven by intensive corporate investment, extreme global marketing, and tightly managed production systems. While this model was able to exceed the international expectations, it raised concerns over the creative autonomy of the artists that operate under restricted contracts. From songwriting to concept design to self-expression, decisions are frequently centralized within entertainment corporations. Hence, this blurs the line between artistic expression and corporate control. With that being said, it is up to the Korea Entertainment Management Association (KEMA) to ensure artists’ creative freedom and corporate competition are adequately balanced.",
  },
  {
    organization: "ICAO",
    expansion: "International Civil Aviation Organization",
    logo: icaoLogo,
    topic:
      "Clearing Grey Skies and Promoting Prosperity: Reshaping the Global Aviation Climate Governance",
    participant: "single",
    level: "intermediate",
    location: "offline",
    description:
      "International civil aviation lies at the intersection of economic and market integration and environmental obligation. The market of civil aviation continues to grow year by year as flying becomes more affordable for the average person. Yet, it also produces the highest amount of carbon footprint compared to other means of transport. The international community has come out with one integrated framework named CORSIA. However, its effectiveness has been put into question for two reasons. First, does CORSIA actually hinder the growth of the burgeoning international aviation market? Second, is the CORSIA mechanism insufficiently aligned with the rapid climate change currently underway? In short, does the international aviation climate governance must be reformed?",
  },
  {
    organization: "UNSC",
    expansion: "United Nations Security Council",
    logo: unscLogo,
    topic:
      "Maritime Militarization: Artificial Islands and Military Presence in the South China Sea",
    participant: "double",
    level: "advanced",
    location: "offline",
    description:
      "The Spratly Islands are a group of maritime features located in a strategic area that falls within waters claimed by China. In 2015, the international community began to pay attention after China was found to have built seven main military bases in the Spratly Islands, and by 2026, signs of another new base have been observed. These developments appear to go against the United Nations Convention on the Law of the Sea, and despite the 2016 arbitration case brought by the Philippines, China has not stepped back from its actions. This situation raises an important question: Should the existence of Chinese military bases be addressed solely based on international rules, or could China’s actions be understood as a response to growing pressure from major powers?",
  },
  {
    organization: "HCC",
    expansion: "Historical Crisis Council",
    logo: hccLogo,
    topic:
      "Enemies at the Gate: The Second Dutch Aggression",
    participant: "single",
    level: "advanced",
    location: "offline",
    description:
      "It is December 19, 1948. Despite the Renville Agreement signed just eleven months prior, Dutch paratroopers have descended upon Yogyakarta in Operation Crow, seizing the Republican capital and capturing President Sukarno and Vice President Mohammad Hatta. With the government dismantled and foreign powers deciding Indonesia’s fate in distant chambers, the committee must coordinate military resistance and secure international legitimacy before the Republic collapses entirely.​​​​​​​​​​​​​​​​",
  },
  {
    organization: "Press Corps",
    expansion: "",
    logo: pressLogo, // Press emblem with flag
    topic: "", // No topic visible in the image for Press Corps
    participant: "single",
    level: "beginner",
    location: "offline",
    description:
      "Within the dynamic environment of discussions and negotiations addressing pressing global issues, the Press Corps serves as the fourth pillar of democracy. Its responsibilities extend well beyond the publication of written reports; Press Corps delegates are entrusted with observing and reporting on council deliberations, official events, and emerging crises, as well as facilitating press conferences in a manner that respects diplomatic protocol and institutional integrity. While granted the freedom to develop original narratives and diverse perspectives, delegates are guided by principles of objectivity, ethical responsibility, and cultural sensitivity.",
  },
  {
    organization: "UNESCO",
    expansion: "UN Educational, Scientific and Cultural Organization",
    logo: unescoLogo,
    topic: "Whose Heritage, Whose History? Resolving Competing Claims over Cultural Heritage",
    participant: "single",
    level: "beginner",
    location: "online",
    description:
      "Throughout history, societies have competed for recognition and possession of cultural heritage. Be it for a sense of identity, legitimacy, or historical continuity, these conflicts, when left unresolved, often evolve for the worse. In Southeast Asia, online forums erupt over ownership of traditional fashion. In the Middle East, overlapping culinary traditions beget competing claims. In European museums, African jewels and cultural artifacts are under intense pressure for repatriation. These examples raise a simple question: How should cultural heritage be managed when claims conflict? As the global community’s leading body for cultural protection, UNESCO must facilitate a solution that can transmute these sources of conflict into heirlooms of a shared legacy.",
  },
  {
    organization: "FAO",
    expansion: "Food and Agriculture Organization",
    logo: faoLogo,
    topic:
      "Food Security Optimalization Amidst Land Tenure Inaccessibility",
    participant: "single",
    level: "intermediate",
    location: "online",
    description:
      "Land tenure is one of the most important and contentious pillars of development since it has shaped power, social stability, and prosperity. While the weak or unequal land tenure systems frequently deepen poverty and conflict, a secure land tenure decides who may access resources, produce foods, and invest in numerous livelihoods. Furthermore, through normative frameworks that promote responsible land governance, the Food and Agriculture Organization (FAO) significantly contributes to the advancement of secure and equitable land tenure. Therefore, as a cornerstone of food security and rural development, what can the FAO accomplish in order to achieve sustainable development when access to land remains unjust? ",
  },
  {
    organization: "EUCO",
    expansion: "European Council",
    logo: eucoLogo,
    topic:
      "Autonomy or Dependence? Justice and Power Asymmetries in Europe's Strategic Relationship with NATO",
    participant: "double",
    level: "advanced",
    location: "online",
    description:
      "Europe's security has long been intertwined with NATO, an alliance that has provided collective defense and stability for decades. Yet the rise of new geopolitical challenges, shifting U.S. foreign policy priorities, and internal divisions within the continent have sparked debate over how dependent European nations should remain on the alliance. Some countries emphasize the need for continued reliance on NATO to guarantee security and deter aggression, while others advocate for greater strategic autonomy, investing in independent defense capabilities and regional cooperation. Delegates must navigate these competing perspectives to negotiate frameworks that balance collective security, national sovereignty, and Europe's role in global geopolitics.",
  },
];

// yang lama
// export const councils: Council[] = [
//   {
//     organization: "HCC",
//     logo: hccLogo, // Indonesian Garuda symbol
//     topic: "In Turmoil Lies Opportunity: Dawn of the Indonesian New Order",
//     participant: "single",
//     level: "advanced",
//     location: "offline",
//     description:
//       "The date is October 5th, 1965. The Indonesia Armed Forces’ birthday celebrations ring with the deathly silence of murder, deceit, and treachery from the events that occurred just five days prior. While benevolent in intention, current events have led President Soekarno’s NASAKOM (Nationalism, Religion, Communism) doctrine to place Indonesia’s major power bases at a standoff; must blood be repaid with blood? Must fire engulf the nation? Only one way to find out in a crisis that will set the tone of Indonesia’s governance for decades to come.",
//   },
//   {
//     organization: "UNSC",
//     logo: unscLogo, // United Nations emblem
//     topic: "Ethnic Warfare: Alleviating the Humanitarian Crisis in Myanmar",
//     participant: "double",
//     level: "advanced",
//     location: "offline",
//     description:
//       "Myanmar has faced a troubled history of internal military conflicts, culminating in its worst humanitarian crisis following a military coup in 2021. Since 1962 the military Junta has maintained power through violence against civilians and the government, exemplified by the brutal suppression of the 1988 protests. Ethnic minorities were promised autonomy in the Panglong Agreement, but they became the targets of “Burmanization” which suppressed their culture, language, and religion. Despite introducing a 2008 constitution to allow limited democracy, the military retained power, fueling ongoing conflicts like the Rohingya genocide. The coup overthrew the National Unity Government (NUG), sparking civil war as defense groups and Ethnic Armed Minorities (EAMs) resisted the junta. Efforts for peace have failed, leaving Myanmar in deepening chaos.",
//   },
//   {
//     organization: "African Union",
//     logo: auLogo, // African Union emblem with map of Africa
//     topic:
//       "Currency of Control: The CFA Franc and the Subjugation of Africa's Financial Sovereignty",
//     participant: "single",
//     level: "advanced",
//     location: "offline",
//     description:
//       "The remnant of colonialism is still going strong in West and Central Africa with the CFA franc, a currency implemented when French was in the process of decolonizing, that is pegged to the French currency of Euro today. This gives the European Central Bank effective control of the monetary policy of the 14 countries who still use the currency. Under the agreement that governs the use of the currency, 50% of each states' foreign currency reserve also rests within French control. With the growing calls of CFA franc adopter states to ditch the currency, the African Union must find a way to position itself to aid the transition and minimize the adverse side effect that a transition may bring.",
//   },
//   {
//     organization: "FOM",
//     logo: fomLogo, // Formula 1 logo
//     topic:
//       "Beyond the Cockpit: The Question of Granting More Decision-Making Power to Drivers",
//     participant: "single",
//     level: "intermediate",
//     location: "offline",
//     description:
//       "The Formula One Management (FOM) council delves into the question of granting drivers more decision-making power, a topic central to the future of motorsport governance. While the governance structure of Formula 1 has traditionally prioritized team principals, engineers, and corporate stakeholders, drivers—equipped with unparalleled on-track experience—have increasingly called for a voice in shaping safety regulations, car design, and race strategies. Advocates argue that their involvement could modernize the sport and address emerging challenges like sustainability and fan engagement, while critics warn of potential disruptions to the established governance model. As FOM CEO Stefano Domenicali advocates for innovation while preserving the sport’s competitive integrity, this council tasks delegates with finding a balance. By examining perspectives from all stakeholders i.e. drivers, team principals, engineers, corporate partners, the FIA, the GPDA, the FOM, the media representative and the academic analyst. delegates must determine to what extent driver involvement should influence Formula 1’s governance to ensure its continued evolution.",
//   },
//   {
//     organization: "Arab League",
//     logo: alLogo, // Arab League emblem with Arabic text
//     topic:
//       "Toward a Green Oasis: Crafting a Post-Oil Strategy for the Arab World",
//     participant: "double",
//     level: "intermediate",
//     location: "online",
//     description:
//       'As global energy markets evolve and the era of oil dominance nears its end, the Arab League faces the pressing challenge of securing a sustainable economic and social future for its member states. This simulation will explore strategies to diversify economies, invest in renewable energy, and strengthen regional collaboration in non-oil sectors such as technology, tourism, and agriculture. Delegates must navigate disparities in economic development, political instability, and resource availability across member states to create a unified framework for a "Post-Oil Arab Economy." Discussions will address education, innovation, and climate adaptation as key pillars, balancing national interests with collective goals to ensure prosperity and stability in a post-oil world.',
//   },
//   {
//     organization: "DISEC",
//     logo: disecLogo, // Disarmament emblem
//     topic:
//       "Equitable Disarmament: Addressing the Trust Deficit Between Nuclear Weapon States and Non-Nuclear Weapon States",
//     participant: "single",
//     level: "intermediate",
//     location: "online",
//     description:
//       "The Nuclear non-Proliferation Treaty (NPT) has been said to be fairly successful with the rapid decrease in nuclear weapons. However, ever since 2020, there has been a concerning rise in nuclear development, particularly in Russia, China, Pakistan, India, Israel, and North Korea, with other Member States’s number of arsenal's remaining constant. Just recently, Russia has also amended its nuclear doctrine to stipulate that an attack by a Non-Nuclear Weapon State (NNWS), supported by a Nuclear Weapon State (NWS), will be regarded as a coordinated assault on Russia. This would fall under the conditions under which the country would consider using its nuclear arsenal, escalating the preexisting mistrust between nuclear powers and NEWS even further. Hence, DISEC’s role in disarmament is even more crucial than ever before to navigate this complex yet critical matter.",
//   },
//   {
//     organization: "UNODC",
//     logo: unodcLogo, // United Nations emblem
//     topic:
//       "Fighting Fake Medicines: Tackling the Global Proliferation of Counterfeit Medicine and its Impacts on Global Health",
//     participant: "single",
//     level: "beginner",
//     location: "offline",
//     description:
//       "Counterfeit medicines have long been a menace to global health. Counterfeit pharmaceutical products and medical devices are those that are deliberately mislabeled as to their identity or source; and they include products which may contain no active ingredients, insufficient active ingredients, incorrect ingredients, or fake packaging. These illicit pharmaceuticals and medicine devices, with their deceptive packaging and often subpar ingredients, endanger the health of unknowing consumers while also undermining the healthcare system's legitimacy. Reflected by the Resolution 20/6 of the UN Commission on Crime Prevention and Criminal Justice (CCPCJ), it is the United Nations on Office on Drugs (UNODC) job to combat these fradulent medicine markets.",
//   },
//   {
//     organization: "UN Women",
//     logo: unwomenLogo, // UN Women symbol
//     topic:
//       "Addressing the Commercialization of Pornography and its Impacts Towards the Rights and Safety of Women",
//     participant: "single",
//     level: "beginner",
//     location: "offline",
//     description:
//       "The global pornographic industry, valued at over USD 129 billion in 2023, has become a highly commercialized sector, raising concerns about its societal impacts. The normalization of violence in pornography poses psychological risks to vulnerable groups, such as children, and may exacerbate gender inequality and violence against women, particularly in societies where harmful gender prejudices persist. The Commission on the Status of Women (CSW), a key UN body dedicated to promoting gender equality and empowering women, plays a crucial role in addressing these challenges. The CSW must navigate the complex task of mitigating the societal impacts of pornographic materials while upholding rights to expression and advocating for improved legislation to protect sex workers and women from exploitation, abuse, and trafficking, ensuring their dignity and equality.",
//   },
//   {
//     organization: "UNDP",
//     logo: undpLogo, // UNDP logo
//     topic:
//       "Sustainable Growth: Ensuring a Just Transition to Renewable Economies",
//     participant: "single",
//     level: "beginner",
//     location: "offline",
//     description:
//       "There is no question that the modern industrial and economic models have accelerated development worldwide, achieving the greatest levels of prosperity in the history of humanity. However, these same models have also opened a Pandora's box of climate change impacts, challenging the international community to address its widespread consequences. As climate change reshapes the global economy, UNDP is tasked with navigating the intertwined challenges of financial stability, inequality, and sustainable development. Central to this agenda is the need to foster shared prosperity during the shift to green energy. As the world transitions to renewable technologies, it is critical to prevent the replication or amplification of historical inequalities, ensuring that the benefits of this transformation are equitably shared between developed and developing nations alike.",
//   },
//   {
//     organization: "SOCHUM",
//     logo: sochumLogo, // Social and Humanitarian emblem
//     topic:
//       "Human Rights in Crisis: Assessing the Effectiveness of Human Rights Agreements in Escalating Global Conflicts",
//     participant: "single",
//     level: "beginner",
//     location: "online",
//     description:
//       "The global state of human rights has grown increasingly fragile, with conflicts and crises stripping millions of individuals of their dignity, safety, and basic freedoms. In 2024 alone, nearly 300 million people across 72 countries required humanitarian aid, as seen in the devastating crises in regions like Gaza and Haiti. Gaza has suffered relentless airstrikes, displacing families and leaving survivors with deep physical and emotional scars, while Haiti faces a humanitarian disaster fueled by gang violence and political instability, forcing over half a million people into displacement. These dire situations highlight the urgent need to protect the most vulnerable and reaffirm the global commitment to human rights. Despite the foundation laid by the Universal Declaration of Human Rights, disparities in cultural, political, and economic priorities, along with emerging challenges like digital surveillance and democratic backsliding, complicate its implementation. As one of six main committees at the General Assembly of the United Nations, it is up to the Social, Humanitarian, and Cultural (SOCHUM) committee to evaluate the effectiveness of human rights agreements amidst the escalation of global conflicts.",
//   },
//   {
//     organization: "Press Corps",
//     logo: pressLogo, // Press emblem with flag
//     topic: "", // No topic visible in the image for Press Corps
//     participant: "single",
//     location: "offline",
//     description:
//       "As delegates engage in debates and negotiations on a range of global issues, the Press Corps remains steadfast in its pursuit of truth, transparency, clarity, and global citizenship as the 4th pillar of democracy. Their role extends beyond simply producing articles; they are essential to unraveling the complexities of international relations and global affairs. Hence, Press Corps delegates are tasked with reporting on events, crises, and proceedings within the councils as well as doing press conferences. With the freedom to create and offer fresh perspectives, the Press Corps serves as a symbol of journalistic integrity, shedding light to global affairs.",
//   },
// ];

