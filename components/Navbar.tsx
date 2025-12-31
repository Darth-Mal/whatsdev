import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <header>
      <nav>
        <Link className="logo" href={"/"}>
          <Image src="/icons/logo.png" alt="logo" width={24} height={24} />
          <p>WhatsDev</p>
        </Link>

        <ul>
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>Events</Link>
          <Link href={"/"}>Create Events Form</Link>
        </ul>
      </nav>
    </header>
  );
};
export default Navbar;
