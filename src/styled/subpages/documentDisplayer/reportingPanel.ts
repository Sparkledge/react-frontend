import styled from "styled-components";

interface ReportingPanelReportKindBtnInterface {
  isChosen: boolean
}

interface ReportingPanelHeaderInterface {
  isError: boolean
}

export const ReportingPanelWrapper = styled.div`
    width: 100%;
    height: 100%;
    background: ${(props) => props.theme.signingInputBackground};
    text-align: center;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 4;
`;

export const ReportingPanelContainer = styled.section`
    width: calc(95% - 20px);
    min-height: calc(85vh - 20px);
    height: fit-content;
    background: ${(props) => props.theme.filtersButtonBackground};
    border-radius: 10px;
    box-shadow: ${(props) => props.theme.fonts.textShadowMain};
    padding: 10px;
    text-align: center;
    position: relative;
    top: 7vh;
    font-family: ${(props) => props.theme.fonts.main};
    color: ${(props) => props.theme.color};

    @media screen and (min-width: 425px){
        width: calc(90% - 20px);
    }

    @media screen and (min-width: 768px){
        width: calc(70% - 20px);
    }

    @media screen and (min-width: 1024px){
        width: calc(60% - 20px);
    }

    @media screen and (min-width: 1440px){
        width: calc(50% - 20px);
    }
`;

export const ReportingPanelHeader = styled.header<ReportingPanelHeaderInterface>`
    width: calc(100% - 10px);
    padding: 5px;
    text-align: center;
    font-size: 1.4em;
    letter-spacing: 0.06em;
    margin-bottom: 3vh;
    padding-top: 1vh;
    text-shadow: ${(props) => props.theme.textShadowMain};
    ${(props) => props.isError ? `color: ${props.theme.errorColor};` : null}

    @media screen and (min-width: 425px){
        font-size: 1.6em;
    }

    @media screen and (min-width: 1024px){
        width: calc(90% - 10px);
        font-size: 1.9em;
        margin-bottom: 4vh;
    }
`;

export const ReportingPanelSubHeader = styled.header`
    width: calc(100% - 10px);
    padding: 5px;
    text-align: center;
    font-size: 1em;
    letter-spacing: 0.04em;
    margin-bottom: 2vh;
    padding-top: 1vh;
    text-shadow: ${(props) => props.theme.textShadowMain};

    @media screen and (min-width: 425px){
        font-size: 1.2em;
    }

    @media screen and (min-width: 1024px){
        width: calc(90% - 10px);
        font-size: 1.4em;
    }
`;

export const ReportingPanelReportKindContainer = styled.div`
    width: calc(100% - 20px);
    padding: 10px;
    text-align: center;
`;

export const ReportingPanelReportKindBtn = styled.div<ReportingPanelReportKindBtnInterface>`
    width: fit-content;
    padding: 15px 25px;
    border: none;
    border-radius: 10px;
    background: ${(props) => props.isChosen ? props.theme.signingInputBackground : props.theme.filtersButtonBackground};
    color: ${(props) => props.theme.color};
    font-family: ${(props) => props.theme.fonts.main};
    letter-spacing: 0.05em;
    font-size: 0.55em;
    display: inline-block;
    margin: 5px;
    cursor: pointer;
    transition: all 0.4s;
    text-shadow: ${(props) => props.theme.textShadowMain};
    box-shadow: ${(props) => props.theme.textShadowMain};

    &:hover{
        filter: brightness(70%);
    }

    @media screen and (min-width: 375px){
        font-size: 0.65em;
    }

    @media screen and (min-width: 425px){
        font-size: 0.85em;
    }

    @media screen and (min-width: 768px){
        padding: 20px 30px;
        font-size: 1.15em;
    }

    @media screen and (min-width: 1024px){
        font-size: 1.3em;
    }
`;

export const ReportingPanelInput = styled.input`
    width: calc(80% - 20px);
    padding: 10px;
    text-align: left;
    text-indent: 0.2em;
    border: none;
    border-radius: 10px;
    text-shadow: ${(props) => props.theme.textShadowMain};
    box-shadow: ${(props) => props.theme.textShadowMain};
    background: ${(props) => props.theme.signingInputBackground};
    color: ${(props) => props.theme.color};
    font-family: ${(props) => props.theme.fonts.main};
    font-size: 0.95m;
    letter-spacing: 0.04em;
    margin-bottom: 3vh;
    position: relative;
    top: 2vh;

    @media screen and (min-width: 768px){
        font-size: 1.15em;
        margin-bottom: 4vh;
    }

    @media screen and (min-width: 1024px){
        width: calc(80% - 20px);
        font-size: 1.4em;
        text-indent: 0.4em;
    }
`;

export const ReportingPanelSubmitBtn = styled.button`
    width: fit-content;
    padding: 15px 30px;
    border: none;
    border-radius: 10px;
    background: ${(props) => props.theme.signingInputBackground};
    color: ${(props) => props.theme.color};
    font-family: ${(props) => props.theme.fonts.main};
    text-shadow: ${(props) => props.theme.textShadowMain};
    box-shadow: ${(props) => props.theme.textShadowMain};
    font-size: 0.9em;
    letter-spacing: 0.04em;
    cursor: pointer;
    transition: all 0.4s;
    margin-top: 1vh;

    &:hover{
        filter: brightness(70%);
    }

    @media screen and (min-width: 425px){
        font-size: 1.15em;
    }

    @media screen and (min-width: 768px){
        padding: 20px 40px;
        font-size: 1.4em;
    }
`;
