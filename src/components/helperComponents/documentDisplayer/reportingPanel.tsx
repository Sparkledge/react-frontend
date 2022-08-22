/* 
    The ReportingPanel component is used for making user available to send a report upon the chosen material to the DB
*/

import React, { useState, useEffect } from "react";

import {
  ReportingPanelWrapper, ReportingPanelContainer,
  ReportingPanelHeader, ReportingPanelSubHeader, 
  ReportingPanelReportKindContainer,
  ReportingPanelReportKindBtn,
  ReportingPanelSubmitBtn,
  ReportingPanelInput,
} from "src/styled/subpages/documentDisplayer/reportingPanel";

import reportMaterial, { ReportType } from "src/connectionFunctions/documentDisplayer/reportMaterial";

interface ReportingPanelInterface {
  documentId: string | undefined, 
  loginUserSelector: string,
  closeThePanel: (newState: boolean) => void,
}

const ReportingPanel:React.FC<ReportingPanelInterface> = ({ documentId, loginUserSelector, closeThePanel }:ReportingPanelInterface) => {
  const [chosenKindType, setChosenKindType] = useState<ReportType>(ReportType.DEFAULT);
  const [reportResult, setReportResult] = useState<number>(0); // 0 - nothing yet, 1 - success, 2 - fail
  const [reportContent, setReportContent] = useState<string>("");

  const copyrightsList:{ name: string, type: ReportType }[] = [
    {
      name: "Copyright mojej pracy",
      type: ReportType.MINECOPYRIGHTSVIOLATION,
    },
        
    {
      name: "Copyright cudzej pracy",
      type: ReportType.SOMEONESCOPYRIGHTSVIOLATION,
    },
        
    {
      name: "Promowanie nienawiści",
      type: ReportType.HATEFULCONTENT,
    },
        
    {
      name: "Treść bez sensu",
      type: ReportType.INAPPROPRIATECONTENT,
    }, 
        
    {
      name: "Treści seksualne",
      type: ReportType.SEXUALCONTENT,
    },
        
    {
      name: "Inne",
      type: ReportType.OTHER,
    },
  ];

  useEffect(() => {
    if (reportResult === 1) setTimeout(() => closeThePanel(false), 1000);
  }, [reportResult]);

  return (
    <ReportingPanelWrapper className="block-center">
      <ReportingPanelContainer className="block-center">
        <ReportingPanelHeader className="block-center" isError={reportResult === 2}>
          {reportResult === 2 ? "Błąd połączenia. Spróbuj ponownie" 
            : reportResult === 1 ? "Zgłoszenie wysłane" : "Zgłoś materiał"}
        </ReportingPanelHeader>
        {
            reportResult !== 1 ? (
              <> 
                {" "}
                <ReportingPanelSubHeader className="block-center">
                  Podaj rodzaj zgłoszenia
                </ReportingPanelSubHeader>
                <ReportingPanelReportKindContainer className="block-center">
                  {
              copyrightsList.map((elem: { name: string, type: ReportType }) => (
                (
                  <ReportingPanelReportKindBtn
                    onClick={() => { setChosenKindType(elem.type === chosenKindType ? ReportType.DEFAULT : elem.type); }}
                    isChosen={elem.type === chosenKindType}
                  >
                    {elem.name}
                  </ReportingPanelReportKindBtn>
                )
              ))
          }
                </ReportingPanelReportKindContainer>
                <ReportingPanelInput
                  className="block-center"
                  type="text"
                  placeholder="Opisz swój problem..."
                  value={reportContent}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setReportContent(e.currentTarget.value)}
                />
                <ReportingPanelSubmitBtn
                  type="button"
                  className="block-center"
                  onClick={() => documentId !== undefined && chosenKindType !== ReportType.DEFAULT 
                    ? reportMaterial(documentId, loginUserSelector, chosenKindType, reportContent, setReportResult) : null}
                >
                  Wyślij zgłoszenie
                </ReportingPanelSubmitBtn>
            
              </>
            ) : null
        }
       
      </ReportingPanelContainer>
    </ReportingPanelWrapper>
  );
};

export default ReportingPanel;
