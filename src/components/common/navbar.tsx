import { useTheme } from "next-themes";
import { LightDarkToggle } from "./light-dark-toggle";
import Link from "next/link";
import { useRouter } from "next/router";

export const Navbar = () => {
  const router = useRouter();
  const { theme } = useTheme();

  const pathname = router.pathname;
  const isHome = pathname === "/";
  const isExample = pathname === "/example";
  return (
    <nav className="flex items-center justify-between">
      <LightDarkToggle />
      <Link href="/" className={`${isHome ? "font-bold" : "font-normal"}`}>
        Click to go back
      </Link>
      <Link
        href="/example"
        className={`${isExample ? "font-bold" : "font-normal"}`}
      >
        Click for example
      </Link>
      <p>Current Theme: {theme}</p>
    </nav>
  );
};
