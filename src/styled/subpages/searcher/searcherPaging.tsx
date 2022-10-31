import styled from "styled-components";

interface SearcherPagingNumberInterface {
  isSelected: boolean,
}

export const SearcherPagingContainer = styled.section`
    width: calc(100% - 20px);
    padding: 10px;
    text-align: center;
    color: ${(props) => props.theme.color};

    @media screen and (min-width: 768px){
        width: calc(80% - 20px);
    }
`;

export const SearcherPagingNumber = styled.div<SearcherPagingNumberInterface>`
    display: inline-block;
    vertical-align: top;
    margin: 0px 5px;
    width: fit-content;
    padding: 5px;
    font-size: 1.1em;
    cursor: pointer;
    transition: all 0.4s;
    ${(props) => props.isSelected ? "filter: brightness(80%);" : null}

    &:hover{
        filter: brightness(70%);
    }

    @media screen and (min-width: 425px){
        font-size: 1.4em;
    }

    @media screen and (min-width: 768px){
        font-size: 1.6em;
    }
`;
