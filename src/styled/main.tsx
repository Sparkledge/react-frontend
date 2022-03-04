import styled from "styled-components";

export const LightMode = {
    navBgColor: "#eeeeee",
    navElemBgColor: "rgba(240,240,240,.2)",
    bgColor: "#f0f0f0",
    filterColor: "rgba(0,0,0,.2)",
    color: "#0A77BF",
    landingButtonColor: "rgba(240,240,240,.5)",
    fonts: {
        main: "Mohave, sans-serif",
        textShadowMain: "3px 3px 4px rgba(0,0,0,.05)"
    }
}

export const DarkMode = {
    navBgColor: "#0c0c0c",
    navElemBgColor: "rgba(20,20,20,.2)",
    bgColor: "#111",
    filterColor: "rgba(0,0,0,.7)",
    color: "#0895E6",
    landingButtonColor: "rgba(20,20,20,.5)",
    fonts: {
        main: "Mohave, sans-serif",
        textShadowMain: "3px 3px 4px rgba(0,0,0,.05)"
    }
}

export const MainContainer = styled.section`
    width: 100%;
    height: 90vh;
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