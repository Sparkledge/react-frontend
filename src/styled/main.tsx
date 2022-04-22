import styled, {createGlobalStyle} from "styled-components";

const LightNavBgColor:string = "#eee";
const DarkNavBgColor:string = "#0c0c0c";

interface GlobalStyleInterface{
    isLight: boolean
}

export const SparkledgeGlobalStyle = createGlobalStyle<GlobalStyleInterface>`

    @import url('https://fonts.googleapis.com/css2?family=Mohave:wght@500&display=swap');

    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
            monospace;
    }

    .block-center{
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
    
    body::-webkit-scrollbar{
        width: 11px;
        background: ${(props) => props.isLight === true ? LightNavBgColor : DarkNavBgColor};
    }
      
    body::-webkit-scrollbar-thumb{
        border-radius: 10px;
        width: 5px;
        background: rgba(34,107,255,.9);
    }
      
    body::-webkit-scrollbar-track{
        width: 10px;
    }
`;

export const LightMode = {
    navBgColor: LightNavBgColor,
    navElemBgColor: "rgba(240,240,240,.2)",
    bgColor: "#f0f0f0",
    filterColor: "rgba(0,0,0,.2)",
    color: "#0A77BF",
    landingButtonColor: "rgba(240,240,240,.5)",
    signingInputBackground: "rgba(240,240,240,.7);",
    resultBackground: "rgba(240,240,240,.75)",
    errorColor: "rgba(240,30,30,.75)",
    fonts: {
        main: "Mohave, sans-serif",
        textShadowMain: "3px 3px 4px rgba(0,0,0,.05)"
    }
}

export const DarkMode = {
    navBgColor: DarkNavBgColor,
    navElemBgColor: "rgba(20,20,20,.2)",
    bgColor: "#111",
    filterColor: "rgba(0,0,0,.7)",
    color: "#0895E6",
    landingButtonColor: "rgba(20,20,20,.5)",
    signingInputBackground: "rgba(40,40,40,.7);",
    resultBackground: "rgba(24,87,255,.15)",
    errorColor: "rgba(240,30,30,.75)",
    fonts: {
        main: "Mohave, sans-serif",
        textShadowMain: "3px 3px 4px rgba(0,0,0,.05)"
    }
}

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