import React from "react";
import { Link } from "react-router-dom";

import { FooterContainer, FooterColumnsWrapper, FooterColumnElem, FooterColumn,
    FooterImage } from "../../../styled/subcomponents/footer";

const LogoImage = require("../../../assets/sparkledge_logo.webp");

const FooterComponent:React.FC = () => {

    const footerData:{type: string, addr: string, content: any}[][] = [
        [
            {
                type: "image",
                addr: "/",
                content: LogoImage
            }
        ],
        [
            {
                type: "text",
                addr: "/",
                content: "Główna"
            },
            {
                type: "text",
                addr: "/searcher",
                content: "Wyszukiwarka"
            },
            {
                type: "text",
                addr: "/signin",
                content: "Zaloguj się"
            },
            {
                type: "text",
                addr: "/signup",
                content: "Zarejestruj się"
            }
        ],
        [
            
            {
                type: "text",
                addr: "/about",
                content: "O nas"
            },
            {
                type: "text",
                addr: "https://www.vecteezy.com/free-vector/education",
                content: "Education Vectors by Vecteezy"
            }
        ]
    ];

    return <FooterContainer className="block-center">
        <FooterColumnsWrapper className="block-center">
            <FooterColumn>
                {footerData[0].map((elem, ind) => <Link to={elem["addr"]} key={"column-0-elem-"+ind}>
                    <FooterColumnElem>
                        {
                            elem["type"] === "image" ? <FooterImage src={elem["content"]}/>: elem["content"]
                        }
                    </FooterColumnElem>
                </Link>)}
            </FooterColumn>
            <FooterColumn>
                {footerData[1].map((elem, ind) => <Link to={elem["addr"]} key={"column-1-elem-"+ind}>
                    <FooterColumnElem>
                        {
                            elem["type"] === "image" ? <FooterImage src={elem["content"]}/>: elem["content"]
                        }
                    </FooterColumnElem>
                </Link>)}
            </FooterColumn>
            <FooterColumn>
                {footerData[2].map((elem, ind) => elem["addr"][0] === "/" ? <Link to={elem["addr"]} key={"column-2-elem-"+ind}>
                    <FooterColumnElem>
                        {
                            elem["type"] === "image" ? <FooterImage src={elem["content"]}/>: elem["content"]
                        }
                    </FooterColumnElem>
                </Link> : <a href={elem["addr"]} target="_blank" key={"column-2-elem-"+ind}>
                    <FooterColumnElem>
                        {
                            elem["type"] === "image" ? <FooterImage src={elem["content"]}/>: elem["content"]
                        }
                    </FooterColumnElem>
                </a>)}
            </FooterColumn>
        </FooterColumnsWrapper>
    </FooterContainer>
};

export default FooterComponent;