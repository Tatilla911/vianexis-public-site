/**
 * Official ViaNexis brand tagline and origin story.
 * HU and EN are canonical. Other locales fall back to EN until translated.
 */
export type BrandStoryContent = {
  tagline: string;
  overline: string;
  originYears: string;
  originYearsLabel: string;
  originCompanies: string;
  originCompaniesLabel: string;
  originBusinesses: string;
  originBusinessesLabel: string;
  originConversations: string;
  originConversationsLabel: string;
  message: string;
};

export const brandStoryHu: BrandStoryContent = {
  tagline: "Az útról született. Együtt építjük.",
  overline: "Eredet",
  originYears: "23 év",
  originYearsLabel: "tapasztalat",
  originCompanies: "40+",
  originCompaniesLabel: "vállalat",
  originBusinesses: "Több ezer",
  originBusinessesLabel: "cég",
  originConversations: "Több tízezer",
  originConversationsLabel: "beszélgetés",
  message:
    "23 év. Több mint 40 vállalat. Több ezer cég. Több tízezer beszélgetés az úton.\nA ViaNexis nem egy irodában született ötlet.\nTapasztalatokból épült — és továbbra is azokkal együtt építjük,\nakik nap mint nap működtetik a fuvarozást.",
};

export const brandStoryEn: BrandStoryContent = {
  tagline: "Born on the Road. Built Together.",
  overline: "Origin",
  originYears: "23 years",
  originYearsLabel: "of experience",
  originCompanies: "40+",
  originCompaniesLabel: "companies",
  originBusinesses: "Thousands",
  originBusinessesLabel: "of businesses",
  originConversations: "Tens of thousands",
  originConversationsLabel: "of conversations",
  message:
    "23 years. More than 40 companies. Thousands of businesses.\nTens of thousands of conversations on the road.\nViaNexis wasn't conceived behind a desk.\nIt was built from experience — and it will keep being built together\nwith the people who move transport every day.",
};

export function resolveBrandStory(locale: string): BrandStoryContent {
  return locale === "hu" ? brandStoryHu : brandStoryEn;
}
