export type LegalSection = {
  title: string;
  body?: string;
  items?: string[];
};

export type LegalDisclaimerItem = {
  id: string;
  title: string;
  body: string;
};

export type LegalContent = {
  versionBadge: string;
  privacy: {
    title: string;
    intro: string;
    lastUpdated: string;
    controller: LegalSection;
    scope: LegalSection;
    dataCategories: LegalSection;
    purposes: LegalSection;
    sharing: LegalSection;
    rights: LegalSection;
    notifications: LegalSection;
    location: LegalSection;
    importantNotices: LegalSection;
    dataContact: LegalSection;
    playUrl: string;
  };
  terms: {
    title: string;
    intro: string;
    sections: LegalSection[];
  };
  legalNotice: {
    title: string;
    intro: string;
    sections: LegalSection[];
    relatedDocs: string;
  };
  disclaimersPage: {
    title: string;
    intro: string;
    items: LegalDisclaimerItem[];
  };
};
