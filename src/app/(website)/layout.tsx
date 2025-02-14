import React from "react";
import LandingPageNavBar from './_components/navbar'

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="felx felx-col py-10 px-10 xl:px-0 container">
      <LandingPageNavBar />
      {children}
    </div>
  );
};

export default Layout;
