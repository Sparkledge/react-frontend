export enum SpecialThanksSubjectType {
  COMPANY,
  PERSON,
}

export type SpecialThanksType = {
  subjectType: SpecialThanksSubjectType,
  name: string
};

const SpecialThanksData: SpecialThanksType[] = [
  {
    subjectType: SpecialThanksSubjectType.COMPANY,
    name: "LeanCode",
  },
  {
    subjectType: SpecialThanksSubjectType.PERSON,
    name: "Hani Pleszyńskiej",
  },
  {
    subjectType: SpecialThanksSubjectType.PERSON,
    name: "Jakuba Żuchowskiego",
  },
  {
    subjectType: SpecialThanksSubjectType.PERSON,
    name: "Tomasza Brengosa ",
  },
];

export default SpecialThanksData;
