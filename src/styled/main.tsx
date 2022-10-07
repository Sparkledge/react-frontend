import styled, { createGlobalStyle } from "styled-components";

const LightNavBgColor:string = "#eee";
const DarkNavBgColor:string = "#0c0c0c";

interface GlobalStyleInterface {
  isLight: boolean
}

export const SparkledgeGlobalStyle = createGlobalStyle<GlobalStyleInterface>`
    body::-webkit-scrollbar{
        background: ${(props) => props.isLight === true ? LightNavBgColor : DarkNavBgColor};
    }
`;

export const LightMode = {
  navBgColor: LightNavBgColor,
  navElemBgColor: "rgba(240,240,240,.2)",
  bgColor: "#f0f0f0",
  filterColor: "rgba(200,200,200,.8)",
  color: "#0A77BF",
  landingButtonColor: "rgba(240,240,240,.5)",
  signingInputBackground: "rgba(240,240,240,.7)",
  memoryBannerBackground: "rgba(240,240,240,.9)",
  resultBackground: "rgba(240,240,240,.75)",
  filtersResponsiveBackground: "rgba(240,240,240,.9)",
  filtersButtonResponsiveBackground: "rgba(200,200,200,.9)",
  filtersButtonBackground: "rgba(3,73,119,.9)",
  userDescriptionLengthCounterBackground: "rgba(3,73,119,.9)",
  errorColor: "rgba(240,30,30,.75)",
  fonts: {
    main: "Mohave, sans-serif",
    textShadowMain: "3px 3px 4px rgba(0,0,0,.05)",
  },
};

export const DarkMode = {
  navBgColor: DarkNavBgColor,
  navElemBgColor: "rgba(20,20,20,.2)",
  bgColor: "#111",
  filterColor: "rgba(0,0,0,.7)",
  color: "#0895E6",
  landingButtonColor: "rgba(20,20,20,.5)",
  signingInputBackground: "rgba(40,40,40,.7)",
  memoryBannerBackground: "rgba(40,40,40,.9)",
  resultBackground: "rgba(24,87,255,.15)",
  filtersResponsiveBackground: "rgba(40,40,40,.9)",
  filtersButtonResponsiveBackground: "rgba(10,10,10,.9)",
  filtersButtonBackground: "rgba(3,73,119,.9)",
  userDescriptionLengthCounterBackground: "rgba(10,10,10,.9)",
  errorColor: "rgba(240,30,30,.75)",
  fonts: {
    main: "Mohave, sans-serif",
    textShadowMain: "3px 3px 4px rgba(0,0,0,.05)",
  },
};

export const MainContainer = styled.section`
    width: 100%;
    min-height: 90vh;
    height: fit-content;
    position: relative;
    top: 10vh;
    background: ${(props) => props.theme.bgColor};
    font-family: ${(props) => props.theme.fonts.main};

    a{
        width: fit-content !important;
    }
`;

export const Preloader = styled.div`
    width: calc(100% - 20px);
    padding: 10px;
    text-align: center;
    font-size: 2.1em;
    letter-spacing: 0.06em;
    font-family: ${(props) => props.theme.fonts.main};
    color: ${(props) => props.theme.color};
    text-shadow: ${(props) => props.theme.fonts.textShadowMain};
    position: relative;
    top: 4vh;

    @media screen and (min-width: 768px){
        width: calc(80% - 20px);
        font-size: 2.3em;
    }
`;
