import styled from "styled-components";
interface NotfoundWrapperInterface {
  source?: any;
  bottomPadding?: number;
}

export const NotfoundHeader1 = styled.h1`
  font-size: xx-large;
  font-weight: bolder;
  font-size: 6em;
  margin-top: 4vh;
  margin-bottom: 2vh;
  color: ${(props) => props.theme.color};
`;

export const NotfoundHeader2 = styled.h2`
  font-size: xx-large;
  margin-top: 2vh;
  margin-bottom: 4vh;
  color: ${(props) => props.theme.color};
`;
export const NotfoundPanelButton = styled.button`
  width: fit-content;
  padding: 20px 40px;
  font-size: 1em;
  color: ${(props) => props.theme.color};
  background: ${(props) => props.theme.landingButtonColor};
  font-family: ${(props) => props.theme.fonts.main};
  text-shadow: ${(props) => props.theme.fonts.textShadowMain};
  border: none;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
  transition: all 0.4s;
  margin-bottom: 5vh;

  &:hover {
    filter: brightness(70%);
  }

  @media screen and (min-width: 425px) {
    font-size: 1.2em;
  }
`;

export const NotfoundWrapper = styled.div<NotfoundWrapperInterface>`
  border-radius: 25px;
  background: rgba(34, 107, 255, 0.15);
  width: calc(70% - 40px);
  margin-left: auto;
  margin-right: auto;
  margin-top: 10%;
  padding: 20px;
  color: red;
  text-align: center;
  background-image: url(${(props) => props.source});
`;
