import Link from 'next/link'
import NavbarItems from "./NavbarItems";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link href="/">
        <div className="flex items-center gap-2.5 cursor-pointer">
          <img src="/images/logo.svg" alt="logo" width={46} height={44} />
        </div>
      </Link>
      <div className="flex items-center gap-8 ">
        <NavbarItems />
        <p>Sign in</p>
      </div>
    </nav>
  );
};

export default Navbar;