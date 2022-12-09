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
  padding: 2rem;

  background: ${(props) => props.theme.bgColor};
  border-radius: 16px;
  border: 1px solid #565656;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;

  @media screen and (min-width: 425px) {
    width: 80%;
    height: 80%;
  }
`;

export const NotFoundDescription = styled.div`
  font-size: 1rem;

  color: ${(props) => props.theme.color};

  @media screen and (min-width: 425px) {
    font-size: 1.2rem;
  }

  @media screen and (min-width: 768px) {
    font-size: 2rem;
  }
`;

export const NotFound404 = styled.div`
  padding: 0;
  margin: 0;

  font-size: 6rem;
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

  @media screen and (min-width: 425px) {
    font-size: 9rem;
  }

  @media screen and (min-width: 768px) {
    font-size: 12rem;
  }
`;

export const NotfoundPanelButton = styled.button`
  width: fit-content;
  padding: 0.6rem 1.2rem;

  display: flex;
  align-items: center;
  gap: 1rem;

  background: transparent;

  color: ${(props) => props.theme.color};
  font-size: 1rem;
  font-family: ${(props) => props.theme.fonts.main};
  text-shadow: ${(props) => props.theme.fonts.textShadowMain};

  box-shadow: 0 0 4px 0 currentColor;
  border: none;
  border-radius: 8px;

  cursor: pointer;
  transition: all 0.4s;

  &:hover {
    filter: brightness(70%);
  }

  @media screen and (min-width: 768px) {
    font-size: 1.8rem;
    padding: 1rem 2rem;
  }
`;
