import React from "react";
import SpecialThanksData, { SpecialThanksSubjectType, SpecialThanksType } from "src/data/specialThanks";
import { AboutSpecialThanksHeader, AboutSpecialThanksObject } from "src/styled/subpages/about";

const SpecialThanksSection:React.FC = () => (
  <>
    <AboutSpecialThanksHeader className="block-center" posTop={3}>
      Specjalne podziękowania pragniemy skierować do
    </AboutSpecialThanksHeader>
    {
            SpecialThanksData.map((elem: SpecialThanksType) => (
              <AboutSpecialThanksObject className="block-center">
                {elem.subjectType === SpecialThanksSubjectType.COMPANY ? "Firmy " : ""}
                {elem.name}
              </AboutSpecialThanksObject>
            ))
    }
    <AboutSpecialThanksHeader className="block-center" posTop={7}>
      Za pomoc w rozwoju naszej aplikacji
    </AboutSpecialThanksHeader>
  </>
);

export default SpecialThanksSection;
