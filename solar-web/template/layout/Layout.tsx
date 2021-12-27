import MainNav from "../../components/MainNav/MainNav";
import { ChildrenWrapper, LayoutWrapper, NavWrapper } from "./StyledLayout";
import Image from "next/image";
import logo from "../../public/assets/vector/logo.svg";
import Header from "../../components/Header";

type IProps = {
  img: any;
  text1?: string;
  text2?: string;
  pr?: string;
  children: any;
};

const Layout = ({ img, text1, text2, children, pr }: IProps) => {
  return (
    <LayoutWrapper bg={img}>
      <div className="center">
        <NavWrapper>
          <div className="imgWrapper">
            <Image className="img" src={logo} alt="logo" />
          </div>
          <MainNav className={"main-nav"} />
        </NavWrapper>
        {text1 && text2 && (
          <div className="header">
            <Header text1={text1} text2={text2} />
          </div>
        )}
        <ChildrenWrapper pr={pr}>{children}</ChildrenWrapper>
      </div>
    </LayoutWrapper>
  );
};

export default Layout;
