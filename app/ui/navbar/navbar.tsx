import NavLinks from "@/app/ui/navbar/nav-links";
import Logo from "@/app/ui/logo";

export default function Navbar() {
  return (
    <nav className="flex items-center p-4 border-b border-gray-700">
      <Logo />
      <NavLinks />
    </nav>
  );
}
