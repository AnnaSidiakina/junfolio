import Link from "next/link";

import Logo from "./Logo";

const NavBar = () => {
  return (
    <nav>
      <Link href="/">
        <Logo />
      </Link>
      <Link href="/">About us</Link>
      <Link href="/team">Our team</Link>
      <Link href="/portfolio">Portfolio</Link>
    </nav>
  );
};
export default NavBar;
