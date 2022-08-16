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
    name: "Hanny Pleszyńskiej",
  },
];

export default SpecialThanksData;
