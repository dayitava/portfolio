import Link from "next/link";
import { useRouter } from "next/router";

const NavigationBar = () => {
  return (
    <div className="sticky top-0 bg-background backdrop-blur-xl w-full bg-opacity-30">
      <nav className="flex justify-between flex-wrap px-5 lg:px-0 py-3 font-black max-w-screen-xl mx-auto">
        <NavItem href="/works">works</NavItem>
        <Link href="/">
          <a>
            <div className="flex items-center flex-shrink-0 text-white text-4xl uppercase">
              d <span className="text-purple-600">U.</span>
            </div>
          </a>
        </Link>
        <NavItem href="/about">about</NavItem>
      </nav>
    </div>
  );
};

export default NavigationBar;

export const NavItem = (props) => {
  const router = useRouter();
  return (
    <Link href={props.href}>
      <a>
        <li
          className={
            (router.pathname == props.href
              ? " border-b-4 border-purple-600 "
              : "border-b-4 border-transparent ") +
            " 2xl:text-base text-xs xl:text-sm text-center list-none font-bold rounded-t-xl text-white px-3 py-2 hover:border-b-4 hover:border-purple-600 " +
            props.className
          }
        >
          {props.children}
        </li>
      </a>
    </Link>
  );
};
