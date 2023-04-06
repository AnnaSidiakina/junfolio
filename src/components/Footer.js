import Link from "next/link";
import Heading from "./Heading";

const Footer = () => {
  return (
    <footer>
      <Heading tag="h3" text="Footer" />
      <nav>
        <Link href="/">About us</Link>
        <Link href="/team">Our team</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/">Be a client</Link>
        <Link href="/team">Join to team</Link>
        <Link href="mailto:junfolio@mail.com">Email</Link>
        <Link href="/">Privacy policy</Link>
      </nav>
    </footer>
  );
};
export default Footer;
