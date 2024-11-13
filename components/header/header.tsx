import Link from "next/link";
import { NavBar } from "./nav-bar";

export const Header = () => {
  return (
    <header className="sticky top-0 bg-main-white">
      <div className="flex justify-between mt-16 text-[21px] text-main-black">
        <div>
          <Link href="/" className="text-[32px] font-bold">
            fasadowo inox.
          </Link>
        </div>
        <NavBar />
      </div>
    </header>
  );
};
