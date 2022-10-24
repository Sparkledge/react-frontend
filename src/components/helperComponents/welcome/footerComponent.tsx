import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useLocalStorage from "use-local-storage";

import {
  FooterContainer, FooterColumnsWrapper, FooterColumnElem, FooterColumn,
  FooterImage, 
} from "src/styled/subcomponents/footer";

import footerData from "src/data/footer";

// const LogoImage = require("../../../assets/sparkledge_logo.webp");

const FooterComponent:React.FC = () => {
  const [memoryUserId, setMemoryUserId] = useLocalStorage<string>("u", "", { syncData: false });
  const [isSignedIn, toggleIsSignedIn] = useState<boolean>(false);

  useEffect(() => {
    toggleIsSignedIn(memoryUserId === undefined ? false : memoryUserId.length > 0);
  }, [memoryUserId]);

  return (
    <FooterContainer className="block-center">
      <FooterColumnsWrapper className="block-center">
        <FooterColumn>
          {footerData[0].map((elem, ind) => (
            <Link to={elem.addr} key="column-0-elem">
              <FooterColumnElem>
                {
                            elem.type === "image" ? <FooterImage src={elem.content} /> : elem.content
                        }
              </FooterColumnElem>
            </Link>
          ))}
        </FooterColumn>
        <FooterColumn>
          {footerData[1].map((elem, ind) => elem.displayIfSignedIn === undefined ? (
            <Link to={elem.addr} key="column-1-elem">
              <FooterColumnElem>
                {
                            elem.type === "image" ? <FooterImage src={elem.content} /> : elem.content
                        }
              </FooterColumnElem>
            </Link>
          ) : !elem.displayIfSignedIn && !isSignedIn ? (
            <Link to={elem.addr} key="column-1-elem">
              <FooterColumnElem>
                {
                            elem.type === "image" ? <FooterImage src={elem.content} /> : elem.content
                        }
              </FooterColumnElem>
            </Link>
          ) : elem.displayIfSignedIn && isSignedIn ? (
            <Link to={elem.addr} key="column-1-elem">
              <FooterColumnElem>
                {
                            elem.type === "image" ? <FooterImage src={elem.content} /> : elem.content
                        }
              </FooterColumnElem>
            </Link>
          ) : null)}
        </FooterColumn>
        <FooterColumn>
          {footerData[2].map((elem, ind) => elem.addr[0] === "/" ? (
            <Link to={elem.addr} key="column-2-elem">
              <FooterColumnElem>
                {
                            elem.type === "image" ? <FooterImage src={elem.content} /> : elem.content
                        }
              </FooterColumnElem>
            </Link>
          ) : (
            <a href={elem.addr} target="_blank" key="column-2-elem" rel="noreferrer">
              <FooterColumnElem>
                {
                            elem.type === "image" ? <FooterImage src={elem.content} /> : elem.content
                        }
              </FooterColumnElem>
            </a>
          ))}
        </FooterColumn>
      </FooterColumnsWrapper>
    </FooterContainer>
  );
};

export default FooterComponent;
