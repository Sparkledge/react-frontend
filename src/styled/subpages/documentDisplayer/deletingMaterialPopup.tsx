import styled from "styled-components";

interface DeleteMaterialPopupButtonInterface {
  buttonColor: string,
}

export const DeletingMaterialPopupContainer = styled.section`
    width: calc(98% - 20px);
    padding: 10px;
    text-align: center;
    color: ${(props) => props.theme.color};
    background: ${(props) => props.theme.memoryBannerBackground};
    font-family: ${(props) => props.theme.fonts.main};
    position: fixed;
    top: 20vh;
    left: 1%;
    border-radius: 10px;
    box-shadow: ${(props) => props.theme.fonts.textShadowMain};
    z-index: 10;

    @media screen and (min-width: 425px){
        width: calc(90% - 20px);
        left: 5%;
    }

    @media screen and (min-width: 768px){
        width: calc(70% - 20px);
        left: 15%;
    }

    @media screen and (min-width: 1024px){
        width: calc(50% - 20px);
        left: 25%;
    }
`;

export const DeleteMaterialPopupHeader = styled.header`
    width: calc(100% - 20px);
    padding: 10px;
    font-size: 1.7em;
    letter-spacing: 0.05em;
    text-shadow: ${(props) => props.theme.fonts.textShadowMain};
    margin-bottom: 4vh;

    @media screen and (min-width: 425px){
        font-size: 2.1em;
    }

    @media screen and (min-width: 1024px){
        width: calc(90% - 20px);
        font-size: 2.4em;
    }
`;

export const DeleteMaterialPopupContent = styled.div`
    width: calc(100% - 10px);
    padding: 5px;
    font-size: 1.3em;
    letter-spacing: 0.06em;
    line-height: 1.05em;
    text-shadow: ${(props) => props.theme.fonts.textShadowMain};
    margin-bottom: 9vh;

    @media screen and (min-width: 768px){
        width: calc(90% - 10px);
        font-size: 1.6em;
        line-height: 1.15em;
    }

    @media screen and (min-width: 1024px){
        width: calc(80% - 10px);
        font-size: 1.8em;
    }
`;

export const DeleteMaterialPopupButtonsContainer = styled.div`
    width: calc(100% - 20px);
    padding: 10px;
    text-align: center;

    @media screen and (min-width: 425px){
        width: calc(90% - 20px);
    }

    @media screen and (min-width: 768px){
        width: calc(80% - 20px);
    }

    @media screen and (min-width: 1024px){
        width: calc(60% - 20px);
    }
`;

export const DeleteMaterialPopupButton = styled.button<DeleteMaterialPopupButtonInterface>`
    width: calc(50% - 30px);
    padding: 10px;
    display: inline-block;
    vertical-align: top;
    margin: 0px 5px;
    border: none;
    border-radius: 10px;
    color: ${(props) => props.buttonColor};
    font-family: ${(props) => props.theme.fonts.main};
    text-shadow: ${(props) => props.theme.fonts.textShadowMain};
    box-shadow: ${(props) => props.theme.fonts.textShadowMain};
    background: ${(props) => props.theme.memoryBannerBackground};
    cursor: pointer;
    transition: all 0.4s;
    font-size: 1.8em;

    &:hover{
        filter: brightness(70%);
    }

    @media screen and (min-width: 768px){
        font-size: 2.1em;
    }
`;
