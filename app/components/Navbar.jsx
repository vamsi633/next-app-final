import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "./dojo-logo.png";
const Navbar = () => {
  return (
    <nav>
      <Image
        src={Logo}
        alt="logo"
        width={70}
        quality={100}
        placeholder="blur"
      />
      <h1>HelpDesk</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets" className="mr-auto">
        Tickets
      </Link>
    </nav>
  );
};

export default Navbar;
