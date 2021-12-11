import React from "react";
import { HeadText5 } from "../../styles/Typography";
import { HeaderWrapper } from "./StyleHeader";

type IProps = {
  text1?: string;
  text2?: string;
};

const Header = ({ text1, text2, ...props }: IProps) => {
  return (
    <HeaderWrapper>
      <HeadText5 fontweight="700" className="no">
        {text1}
      </HeadText5>
      <HeadText5 className="header-txt" fontweight="400">
        {text2}
      </HeadText5>
    </HeaderWrapper>
  );
};

export default Header;
