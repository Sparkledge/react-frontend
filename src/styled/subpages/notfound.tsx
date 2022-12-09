import styled from "styled-components";

export const NotFoundWrapper = styled.div`
  min-width: 100%;
  min-height: inherit;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const NotFoundContainer = styled.div`
  width: 80%;
  height: 80%;
  padding: 2rem;

  background: ${(props) => props.theme.bgColor};
  border-radius: 16px;
  border: 1px solid ${(props) => props.theme.descriptionColor404};

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const NotFoundDescription = styled.div`
  font-size: 2rem;

  color: ${(props) => props.theme.descriptionColor404};

  @media screen and (max-width: 800px) {
    font-size: 1.4rem;
  }
`;

export const NotFound404 = styled.div`
  padding: 0;
  margin: 0;

  font-size: 12rem;
  font-weight: bolder;
  user-select: none;

  margin-bottom: -3rem;

  background-color: rgba(2,0,36,1); 
  background-image: ${(props) => props.theme.gradient404};
  
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent; 
  -moz-text-fill-color: transparent;

  @media screen and (max-width: 800px) {
    font-size: 10rem;
  }
`;

export const NotfoundPanelButton = styled.button`
  width: fit-content;
  padding: 1rem 2rem;

  display: flex;
  align-items: center;
  gap: 1rem;

  background: ${(props) => props.theme.landingButtonColor};

  color: ${(props) => props.theme.color};
  font-size: 1.8rem;
  font-family: ${(props) => props.theme.fonts.main};
  text-shadow: ${(props) => props.theme.fonts.textShadowMain};

  /* border: 1px solid currentColor; */
  box-shadow: 0 0 4px 0 currentColor;
  border: none;
  border-radius: 8px;

  cursor: pointer;
  transition: all 0.4s;

  &:hover {
    filter: brightness(70%);
  }

  @media screen and (max-width: 800px) {
    font-size: 1.2rem;
  }
`;
