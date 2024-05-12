import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavItems() {
  const pathName = usePathname();

  return (
    <nav className="large-screen-nav-container">
      <Link href="/" className={pathName === "/" ? "active" : ""}>
        Shop
      </Link>
      <Link href="/page-in-progress">Skills</Link>
      <Link href="/page-in-progress">Stories</Link>
      <Link href="/page-in-progress">About</Link>
      <Link href="/page-in-progress">Contact Us</Link>
    </nav>
  );
}
