import styled from "styled-components";

export const DescribeHeader = styled.header`
    width: calc(100% - 20px);
    padding: 10px;
    color: ${(props) => props.theme.color};
    text-shadow: ${(props) => props.theme.fonts.textShadowMain};
    letter-spacing: 0.06em;
    font-size: 1.2em;
    position: relative;
    top: 2vh;
    margin-bottom: 7vh;
    text-align: center;

    @media screen and (min-width: 425px){
        font-size: 1.5em;
    }

    @media screen and (min-width: 768px){
        width: calc(90% - 20px);
        font-size: 1.9em;
    }

    @media screen and (min-width: 1024px){
        width: calc(70% - 20px);
        font-size: 2.3em;
    }
`;

export const DescribeWidgetsSection = styled.section`
    width: calc(100% - 20px);
    padding: 10px;
    text-align: center;
    margin-bottom: 5vh;

    @media screen and (min-width: 1440px){
        width: calc(80% - 20px);
    }
`;

export const DescribeWidget = styled.div`
    width: calc(90% - 40px);
    height: fit-content;
    min-height: calc(45vh - 40px);
    padding: 20px 10px;
    border-radius: 20px;
    box-shadow: 3px 3px 4px rgba(0,0,0,.07);
    background: rgba(34,107,255,.5);
    text-align: center;
    transition: all 0.4s;
    display: block;
    margin: 0px auto 2vh;

    &:hover{
        transform: translateY(-5px);
    }

    @media screen and (min-width: 375px){
        width: calc(80% - 40px);
    }

    @media screen and (min-width: 425px){
        width: calc(60% - 40px);
    }

    @media screen and (min-width: 768px){
        width: calc(33% - 40px);
        min-height: calc(55vh - 40px);
        display: inline-block;
        vertical-align: top;
        margin: 0px 10px;        
    }
`;

export const DescribeWidgetHeader = styled.header`
    width: calc(100% - 10px);
    padding: 5px;
    text-align: center;
    font-size: 1.1em;
    color: ${(props) => props.theme.color};
    text-shadow: ${(props) => props.theme.fonts.textShadowMain};
    letter-spacing: 0.06em;
    margin-bottom: 4vh;
    position: relative;
    top: 1vh;

    @media screen and (min-width: 1024px){
        font-size: 1.4em;
    }

    @media screen and (min-width: 1440px){
        font-size: 1.6em;
    }
`;

export const DescribeWidgetSubDesc = styled.div`
    width: calc(95% - 10px);
    padding: 5px;
    text-align: center;
    font-size: 1em;
    color: ${(props) => props.theme.color};
    text-shadow: ${(props) => props.theme.fonts.textShadowMain};
    line-height: 1.05em;

    @media screen and (min-width: 1024px){
        width: calc(85% - 10px);
        line-height: 1.1em;
        font-size: 1em;
    }

    @media screen and (min-width: 1440px){
        font-size: 1.2em;
    }
`;
