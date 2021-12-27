import { useRouter } from "next/router";
import { NavWrapper } from "./StylesNav";
import useScreenDimension from "../../config/util";
import CloseIcon from "../vectors/CloseIcon";
import Link from "next/link";

const pages = [
  { id: "OO", description: "HOME", path: "/" },
  { id: "O1", description: "DESTINATION", path: "/destination" },
  { id: "O2", description: "CREW", path: "/crew" },
  { id: "O3", description: "TECHNOLOGY", path: "/technology" },
];

const MainNav = ({ ...props }) => {
  const router = useRouter();
  const path = router.pathname;
  const [width, height] = useScreenDimension();
  return (
    <NavWrapper>
      <div className="close">{width <= 575 && <CloseIcon />}</div>

      <div className="path">
        {pages.map((page) => (
          <div
            className={path === page.path ? "active" : "border"}
            key={page.id}
          >
            <Link href={page.path} passHref>
              <div>
                <span className="pathId">{page.id}</span>
                <span className="pathname">{page.description}</span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </NavWrapper>
  );
};

export default MainNav;
