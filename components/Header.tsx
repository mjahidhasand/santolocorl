import Link from "next/link";
import { Button } from "./Button";

export const Header = () => {
  return (
    <header className="flex justify-between items-center py-[39px] px-[25px] lg:px-[130px]">
      <Link href="/">
        <img src="/logo.svg" />
      </Link>

      <nav className="font-medium flex items-center gap-[60px] hidden md:flex">
        <Link href="/">Home</Link>
        <Link href="/">About us</Link>
        <Link href="/">Services</Link>
        <Link href="/">Blog</Link>
      </nav>

      <Button text="Contact Now" />
    </header>
  );
};
