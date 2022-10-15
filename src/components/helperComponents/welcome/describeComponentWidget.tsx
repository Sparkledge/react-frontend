import React from "react";

import {
  DescribeWidget, DescribeWidgetHeader, 
  DescribeWidgetSubDesc, 
} from "src/styled/subpages/welcome/describeComponent";

interface WidgetInterface {
  header: string,
  children: JSX.Element | string
}

const DescribeComponentWidget:React.FC<WidgetInterface> = ({ header, children }:WidgetInterface) => (
  <DescribeWidget>
    <DescribeWidgetHeader className="block-center">
      {header}
    </DescribeWidgetHeader>
    <DescribeWidgetSubDesc className="block-center">
      {children}
    </DescribeWidgetSubDesc>
  </DescribeWidget>
);

export default DescribeComponentWidget;
