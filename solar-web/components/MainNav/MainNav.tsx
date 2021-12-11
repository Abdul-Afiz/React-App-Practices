import { useRouter } from "next/router";
import { NavWrapper } from "./StylesNav";
import Link from "next/link";

const pages = [
  { id: "OO", description: "HOME", path: "/" },
  { id: "O1", description: "DESTINATION", path: "/destination" },
  { id: "O2", description: "CREW", path: "/crew" },
  { id: "O3", description: "TECHNOLOGY", path: "/technology" },
];

const MainNav = () => {
  const router = useRouter();

  // console.log(router);

  const path = router.pathname;
  return (
    <NavWrapper>
      <div className="path">
        {pages.map((page) => (
          <div
            className={path === page.path ? "active" : "border"}
            key={page.id}
          >
            <span className="pathId">{page.id}</span>
            <Link href={page.path} passHref>
              <span className="pathname">{page.description}</span>
            </Link>
          </div>
        ))}
      </div>
    </NavWrapper>
  );
};

export default MainNav;
