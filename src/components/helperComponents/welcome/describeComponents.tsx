import React from "react";
import {Link} from "react-router-dom";

import { LandingSectionWrapper, LandingSectionFilter, LandingSectionButton, LandingButtonWrapper } from "../../../styled/subpages/welcome";
import { DescribeHeader, DescribeWidgetsSection } from "../../../styled/subpages/welcome/describeComponent";

import DescribeComponentWidget from "./describeComponentWidget";

const BackgroundPatter = require("../../../assets/pattern_background.webp");

const DescribeComponent:React.FC = () => {
    return <LandingSectionWrapper className="block-center" source={BackgroundPatter} reversedShadow={true} 
        bottomPadding={10} backgroundSize="contain">
        <LandingSectionFilter>
            <DescribeHeader className="block-center">
                Co może Tobie dać korzystanie ze Sparkledge?
            </DescribeHeader>
            <DescribeWidgetsSection className="block-center">
                <DescribeComponentWidget header="Dostęp do wiedzy" content="Na naszej platformie znajdziesz notataki pogrupowane na przedmioty i kierunki studiów. Sa to notataki innych studentów, dzięki temu wiesz ze sa one dokładnie tym czego wymagają wykładowcy. "/>
                <DescribeComponentWidget header="Kontakt ze społecznością akademicką" content="Wraz ze znajomymi za pomoca naszej platformy mozecie wymieniać się notataki oraz trzymać je w jednym miejscu. Twoi znajomi oceniają je, a dzięki ich ocenom ty masz dostęp do większej ilości notatek innych użytkowników "/>
                <DescribeComponentWidget header="Ciekawe benefity na uczelni" content="Dzięki korzystaniu z naszej platformy nie tracisz czas na nauke rzeczy których i tak nikt od ciebie nie będzie wymagał. Są to notatki studentów którzy już zdali ten przedmiot albo sa w trakcie i notują na wykladach. Znajdziesz tutaj dokładnie to czego potrzeba aby zdać."/>
            </DescribeWidgetsSection>
            
            <LandingButtonWrapper className="block-center" marginBottom={4}>
                <Link to="/searcher">
                    <LandingSectionButton className="block-center">
                        Sprawdź wyszukiwarkę
                    </LandingSectionButton>
                </Link>
            </LandingButtonWrapper>

        </LandingSectionFilter>
    </LandingSectionWrapper>
};

export default DescribeComponent;