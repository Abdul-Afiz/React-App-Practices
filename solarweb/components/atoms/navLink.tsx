import Link from "next/link";
import { ReactChild, ReactFragment, ReactPortal } from "react";
import { UrlObject } from "url";
import style from "./navlink/navlink.module.css";

interface IPage {
  id: string;
  path: string;
  name: string;
}

const NavLink = ({ ...props }) => {
  const pages = props.navPages;

  return (
    <div className="max-w-[51.875rem] bg-opacity-[0.04] bg-white backdrop-filter backdrop-blur-[5.0968rem] pt-[2.4375rem] pb-[2.375rem] pr-[10.3125rem] pl-[7.6875rem] text-basic">
      <div className="flex space-x-12">
        {pages.map((page: IPage) => (
          <div
            key={`page-key-${page.id}`}
            className={`${style.border} space-x-[0.6875rem] cursor-pointer`}
          >
            <span className="font-barlo font-bold">{page.id}</span>
            <Link href={page.path}>
              <a className="font-barlo font-normal">{page.name}</a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavLink;
