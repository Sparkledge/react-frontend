import React from "react";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import { ThemeProvider } from "styled-components";
import Welcome from "../../components/subpages/welcome";
import LandingComponent from "../../components/helperComponents/welcome/landingComponent";
import DescribeComponent from "../../components/helperComponents/welcome/describeComponents";
import DescribeComponentWidget from "../../components/helperComponents/welcome/describeComponentWidget";
import FooterComponent from "../../components/helperComponents/welcome/footerComponent";
import { DarkMode } from "../../styled/main";

describe("Welcome site rendering tests", () => {
  it("testing if Welcome is rendering", () => {
    expect.assertions(1);
    expect(toJson(shallow(<Welcome />))).toMatchSnapshot();
  });

  it("testing if LandingComponent is rendering", () => {
    expect(toJson(shallow(<LandingComponent />))).toMatchSnapshot();
  });

  it("testing if DescribeComponent is rendering", () => {
    expect(toJson(shallow(<DescribeComponent />))).toMatchSnapshot();
  });
    
  it("testing if FooterComponent is rendering", () => {
    expect(toJson(shallow(<FooterComponent />))).toMatchSnapshot();
  });

  it("testing is DescribeComponentWidget is rendering", () => {
    const wrapper = mount(<ThemeProvider theme={DarkMode}>
      <DescribeComponentWidget header="test header'a" content="test" />
    </ThemeProvider>);

    expect(toJson(wrapper)).toMatchSnapshot();
    expect(wrapper.find("header").text()).toBe("test header'a");
  });
});
