import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { IoLogoJavascript } from "react-icons/io5";

type Props = {};
const Navbar = (props: Props) => {
  const navLinks = [
    { name: "Problems", link: "#problems" },
    { name: "Process", link: "#process" },
    { name: "Pricing", link: "#pricing" },
    { name: "FAQs", link: "#faqs" },
  ];
  return (
    <nav className="flex  items-center p-4  justify-between">
      <Link href={"#"}>
        <div className="flex justify-center font-extrabold items-end space-x-1">
          <p className="text-lg">Upgradeto</p>
          <IoLogoJavascript className="text-3xl" />
        </div>
      </Link>
      <ul className="flex items-center space-x-10">
        {navLinks.map((navLink, index) => (
          <Link key={index} href={navLink.link}>
            <li>{navLink.name}</li>
          </Link>
        ))}
        <li>
          <ModeToggle />
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
