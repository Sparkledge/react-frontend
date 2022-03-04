import styled from "styled-components";

export const AboutHeader = styled.header`
    width: calc(80% - 20px);
    padding: 10px;
    text-align: center;
    font-size: 2.3em;
    color: ${(props) => props.theme.color};
    text-shadow: ${(props) => props.theme.fonts.textShadowMain};
    position: relative;
    top: 2vh;
    margin-bottom: 9vh;
`;