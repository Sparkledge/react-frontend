import React from "react";

import { DescribeWidget, DescribeWidgetHeader, 
    DescribeWidgetSubDesc } from "../../../styled/subpages/welcome/describeComponent";

interface WidgetInterface {
    header: string,
    content: string
}

const DescribeComponentWidget:React.FC<WidgetInterface> = ({header, content}:WidgetInterface) => {
    return <DescribeWidget>
    <DescribeWidgetHeader className="block-center">
        {header}
    </DescribeWidgetHeader>
    <DescribeWidgetSubDesc className="block-center">
        {content}
    </DescribeWidgetSubDesc>
</DescribeWidget>
}

export default DescribeComponentWidget;