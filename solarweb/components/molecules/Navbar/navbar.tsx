import Logo from "../../vectors/logo";
import Link from "next/link";
import style from "../Navbar/navbar.module.css";
import NavLink from "../../atoms/navLink";

const Navbar = () => {
  const navPages = [
    {
      id: "00",
      name: "home",
      path: "/",
    },
    {
      id: "01",
      name: "destination",
      path: "/destination",
    },
    {
      id: "02",
      name: "crew",
      path: "/crew",
    },
    {
      id: "03",
      name: "technology",
      path: "/technology",
    },
  ];

  return (
    <nav
      className={`${style.nav} ml-[3.4375rem] max-w-[86.5625rem] h-24 flex justify-between items-center`}
    >
      <Logo />
      <NavLink navPages={navPages} />
    </nav>
  );
};

export default Navbar;
