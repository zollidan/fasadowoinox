import Link from "next/link";

export const NavBar = () => {
  return (
    <nav className="flex items-center space-x-8 font-medium">
      <Link href="/works">Modern</Link>

      <Link href="/about">Water Wave 1,2,3,4</Link>

      <Link href="/contact">Contact</Link>
    </nav>
  );
};
