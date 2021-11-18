import Logo from "../vectors/logo";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className=" ml-[3.4375rem] mt-10 max-w-[86.5625rem] h-24 flex justify-between items-center">
      <Logo />
      <div className="max-w-[51.875rem] bg-opacity-[0.04] bg-white backdrop-filter backdrop-blur-[5.0968rem] pt-[2.4375rem] pb-[2.375rem] pr-[10.3125rem] pl-[7.6875rem] text-basic">
        <div className="flex space-x-12">
          <div className="space-x-[0.6875rem]">
            <span className="font-barlo font-bold">00</span>
            <Link href="/">
              <a className="font-barlo font-normal">HOME</a>
            </Link>
          </div>

          <div className="space-x-[0.6875rem]">
            <span className="font-barlo font-bold">01</span>
            <Link href="/destination">
              <a className="font-barlo font-normal">DESTINATION</a>
            </Link>
          </div>

          <div className="space-x-[0.6875rem]">
            <span className="font-barlo font-bold">02</span>
            <Link href="/crew">
              <a className="font-barlo font-normal">CREW</a>
            </Link>
          </div>

          <div className="space-x-[0.6875rem]">
            <span className="font-barlo font-bold">00</span>
            <Link href="/tech">
              <a className="font-barlo font-normal">TECHNOLOGY</a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
