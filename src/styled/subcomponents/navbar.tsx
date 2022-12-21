import styled from "styled-components";

export const NavbarItemWrapper = styled.div`
  box-sizing: border-box;
  padding: 0.6rem 0.3rem; 

  min-height: 100%;
  @media screen and (max-width: 768px) {
    min-height: 5rem;
    border-bottom: 1px solid ${(props) => props.theme.navBottomBorderColor};
    padding: 0.6rem; 
  }

  &:last-child {
    padding-right: 0.6rem;
  }

  display: inline-flex;
  flex-direction: row;
  align-items: center;  
`;

export const NavbarItem = styled.div`
  box-sizing: border-box;

  border-radius: 16px;

  height: 100%;
  padding-inline: 1rem;
  
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  text-decoration: none;
  font-family: ${(props) => props.theme.fonts.main};
  color: ${(props) => props.theme.color};
  font-size: 1.2rem;
  white-space: nowrap;

  transition: 0.2s all;

  background: transparent;

  &:hover {
    background: ${(props) => props.theme.hoverBgPrimary};
  }
`;

export const NavbarItemDescription = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const NavbarItemButton = styled.button`
  box-sizing: border-box;
  border: 1px solid transparent;

  cursor: pointer;
`;

export const NavbarExpandButton = styled.button`
  box-sizing: border-box;
  border: 1px solid transparent;

  cursor: pointer;

  aspect-ratio: 1/1;

  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    margin-left: auto;
  }
`;

export const NavbarImg = styled.img`
  box-sizing: border-box;
  
  height: 2rem;
  margin-inline: 1rem;
  scale: 1.4;
`;

export const NavbarItemBreak = styled.div`
  flex-grow: 1;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

type NavbarProps = {
  isOpened: boolean;
};

export const NavbarContainer = styled.div<NavbarProps>`
  box-sizing: border-box;

  height: 5rem;
  width: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: ${(props) => props.isOpened ? "100vh" : "5rem"};
    overflow: ${(props) => props.isOpened ? "scroll" : "hidden"};
  }

  display: flex;
  flex-direction: row;
  
  position: fixed;
  top: 0;

  // this needs to change at some point
  z-index: 10;

  overflow: hidden;
  border-bottom: 1px solid ${(props) => props.theme.navBottomBorderColor};

  transition: 0.2s height;

  background: ${(props) => props.theme.navBgColor};
`;
