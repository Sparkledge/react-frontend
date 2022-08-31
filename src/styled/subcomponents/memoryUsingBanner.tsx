import styled from "styled-components";

export const MemoryUsingBannerContainer = styled.section`
    width: calc(90% - 20px);
    height: calc(30vh - 20px);
    padding: 10px;
    text-align: center;
    color: ${(props) => props.theme.color};
    background: ${(props) => props.theme.memoryBannerBackground};
    font-family: ${(props) => props.theme.fonts.main};
    text-shadow: ${(props) => props.theme.fonts.textShadowMain};
    box-shadow: ${(props) => props.theme.fonts.textShadowMain};
    position: fixed;
    top: 65vh;
    left: 5%;
    border-radius: 10px;
    overflow-y: scroll;
    overflow-x: hidden;

    &::-webkit-scrollbar{
        width: 11px;
      }
      
    &::-webkit-scrollbar-thumb{
        border-radius: 10px;
        width: 5px;
        background: rgba(34,107,255,.9);
    }
    
    &::-webkit-scrollbar-track{
        width: 10px;
    }

    @media screen and (min-width: 768px){
        width: calc(80% - 20px);
        height: calc(25vh - 20px);
        top: 70vh;
        left: 10%;
    }
`;

export const MemoryUsingBannerHeader = styled.header`
    width: calc(100% - 10px);
    padding: 5px;
    font-size: 1.2em;
    letter-spacing: 0.06em;

    @media screen and (min-width: 425px){
        font-size: 1.5em;
    }

    @media screen and (min-width: 768px){
        width: calc(90% - 10px);
        font-size: 1.9em;
    }
`;

export const MemoryUsingBannerContent = styled.div`
    width: calc(100% - 10px);
    padding: 5px;
    font-size: 0.95em;
    margin-bottom: 3vh;

    @media screen and (min-width: 425px){
        width: calc(90% - 10px);
        font-size: 1.1em;
    }

    @media screen and (min-width: 768px){
        width: calc(70% - 10px);
        font-size: 1.3em;
    }
`;

export const MemoryUsingBannerButton = styled.div`
    width: fit-content;
    padding: 20px 40px;
    background: ${(props) => props.theme.filtersButtonBackground};
    border-radius 10px;
    font-size: 1.05em;
    letter-spacing: 0.05em;
    cursor: pointer;
    transition: all 0.4s;

    &:hover{
        filter: brightness(70%);
    }

    @media screen and (min-width: 425px){
        font-size: 1.2em;
    }

    @media screen and (min-width: 768px){
        font-size: 1.3em;
    }
`;
