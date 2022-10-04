import styled from "styled-components";

interface ProfileUserSubDataInterface {
  isClickable: boolean
}

export const ProfileUserSubData = styled.div<ProfileUserSubDataInterface>`
    width: fit-content;
    height: fit-content;
    padding: 20px 40px;
    border-radius: 10px;
    font-size: 0.95em;
    letter-spacing: 0.04em;
    background: ${(props) => props.theme.signingInputBackground};
    color: ${(props) => props.theme.color} !important;
    display: inline-block;
    vertical-align: top;
    margin: 5px;

    ${(props) => props.isClickable ? `
        cursor: pointer;
        transition: all 0.4s;

        &:hover{
            filter: brightness(70%);
        }
    ` : null}

    @media screen and (min-width: 425px){
        font-size: 1.05em;
    }

    @media screen and (min-width: 1024px){
        font-size: 1.15em;
    }
`;

export const ProfileUserSubDataIconContainer = styled.span`
    display: inline-block;
    vertical-align: center;
    margin: 0px 5px 0px 0px;
    font-size: 1.2em;
`;

export const ProfileUserSubDataTextContainer = styled.span`
    display: inline-block;
    vertical-align: bottom;
    margin: 0px 0px 5px 0px;
`;
