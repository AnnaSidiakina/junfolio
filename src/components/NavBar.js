import Link from "next/link";

const NavBar = () => {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about">About us</Link>
      <Link href="/team">Our team</Link>
      <Link href="/portfolio">Portfolio</Link>
    </nav>
  );
};
export default NavBar;
