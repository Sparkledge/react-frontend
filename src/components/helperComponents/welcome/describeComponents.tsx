import React from "react";
import {Link} from "react-router-dom";

import { LandingSectionWrapper, LandingSectionButton } from "../../../styled/subpages/welcome";
import { DescribeHeader, DescribeWidgetsSection } from "../../../styled/subpages/welcome/describeComponent";

import DescribeComponentWidget from "./describeComponentWidget";

const DescribeComponent:React.FC = () => {
    return <LandingSectionWrapper className="block-center" reversedShadow={true}>
        <DescribeHeader className="block-center">
            Co może Tobie dać korzystanie ze Sparkledge?
        </DescribeHeader>
        <DescribeWidgetsSection className="block-center">
            <DescribeComponentWidget header="Dostęp do wiedzy" content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus necessitatibus at dolores sint nobis! Harum adipisci repudiandae debitis, voluptatum saepe voluptate obcaecati temporibus consectetur similique dolores. Corporis, laborum. Inventore, praesentium."/>
            <DescribeComponentWidget header="Kontakt ze społecznością akademicką" content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus necessitatibus at dolores sint nobis! Harum adipisci repudiandae debitis, voluptatum saepe voluptate obcaecati temporibus consectetur similique dolores. Corporis, laborum. Inventore, praesentium."/>
            <DescribeComponentWidget header="Ciekawe benefity na uczelni" content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus necessitatibus at dolores sint nobis! Harum adipisci repudiandae debitis, voluptatum saepe voluptate obcaecati temporibus consectetur similique dolores. Corporis, laborum. Inventore, praesentium."/>
        </DescribeWidgetsSection>
        <Link to="/searcher">
            <LandingSectionButton className="block-center" marginBottom={5}>
                Sprawdź wyszukiwarkę
            </LandingSectionButton>
        </Link>
    </LandingSectionWrapper>
};

export default DescribeComponent;