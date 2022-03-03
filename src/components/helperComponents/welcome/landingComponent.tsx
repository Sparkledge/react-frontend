import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";

import { LandingSectionWrapper, LandingSectionFilter,
    LandingSectionHeader, LandingSectionSpan,
    LandingSectionDesc, LandingSectionButton } from "../../../styled/subpages/welcome";

const Background = require("../../../assets/academic_background_edited_2.png");

const LandingComponent:React.FC = () => {

    const [headerHeight, setHeaderHeight] = useState<number>(0);
    const [textPosition, setTextPosition] = useState<number>(100);

    useEffect(() => {
        setTimeout(() => {
            setHeaderHeight(2.5);
            setTimeout(() => setTextPosition(0), 200);
        }, 200);
    }, [])

    return <LandingSectionWrapper className="block-center" source={Background}>
        <LandingSectionFilter>
            <LandingSectionHeader className="block-center" height={headerHeight}>
                <span className="block-center">Sparkledge</span>
                <LandingSectionSpan>Spark of your knowledge</LandingSectionSpan>
            </LandingSectionHeader>
            <LandingSectionDesc className="block-center" leftPos={textPosition}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non est vestibulum, feugiat massa nec, convallis purus. Curabitur tristique lobortis lorem, in ullamcorper arcu porta eu. Proin at mauris lacus. Integer suscipit tellus eget consequat consectetur. Nullam suscipit ipsum diam, at dui.
            </LandingSectionDesc>
            <Link to = "/signup">
                <LandingSectionButton className="block-center">
                    Dołącz do nas
                </LandingSectionButton>
            </Link>
        </LandingSectionFilter>
    </LandingSectionWrapper>
}

export default LandingComponent;