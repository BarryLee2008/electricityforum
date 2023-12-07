import { NextPage } from "next";
import React, { Children } from "react";
import { HeaderComponent } from "components/header";
import { FooterComponent } from "components/footer";
import { HeaderComponentMobile, FooterComponentMobile } from "components/index";
import { Grid } from "antd";
interface propsType {
  children: React.ReactNode;
}
export const Layout: NextPage<propsType> = ({ children }) => {
  const screens = Grid.useBreakpoint();
  if ((screens.xs || screens.sm || screens.md) && !screens.lg) {
    return (
      <>
        <HeaderComponentMobile />
        {children}
        <FooterComponentMobile />
      </>
    );
  }
  return (
    <>
      <HeaderComponent />
      {children}
      <FooterComponent />
    </>
  );
};
