"use client";
import React, { useEffect, useState } from "react";
import { ModeToggle } from "./ModeToggle";
import Link from "next/link";
import { Meie_Script } from "next/font/google";
import { FiMenu } from "react-icons/fi";
import { IoLogoJavascript } from "react-icons/io5";

export const meieScript = Meie_Script({
  weight: "400",
  subsets: ["latin"],
});

type Props = {};

const Navbar = (props: Props) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  
    const navigationLinks = [
      { name: "Problems", link: "#problems" },
      { name: "Process", link: "#process" },
      { name: "Pricing", link: "#pricing" },
      { name: "FAQs", link: "#faqs" },
    ];

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  useEffect(() => {
    // Add an event listener to handle scroll and close the dropdown
    const handleScroll = () => {
      closeDropdown();
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="my-5 lg:px-0 px-2 flex items-center justify-between ">
      <Link href={"#"}>
        <div className="flex justify-center font-extrabold items-end space-x-1">
          <p className="text-lg">Upgradeto</p>
          <IoLogoJavascript className="text-3xl" />
        </div>
      </Link>
      <div className="lg:hidden">
        <FiMenu className="text-2xl cursor-pointer" onClick={toggleDropdown} />
        {isDropdownOpen && (
          <div className="absolute z-10 top-16 right-0 bg-primary-foreground left-0 w-full border rounded shadow-md p-2">
            <ul className="flex flex-col items-center space-y-2">
              {navigationLinks.map((navigationLink, i) => (
                <Link key={i} href={navigationLink.link}>
                  <li
                    className="cursor-pointer"
                    onClick={() => setDropdownOpen(false)}
                  >
                    {navigationLink.name}
                  </li>
                </Link>
              ))}
              <ModeToggle />
            </ul>
          </div>
        )}
      </div>
      <div className="hidden lg:flex items-center justify-center mx-5">
        <ul className="flex items-center justify-center mx-5">
          {navigationLinks.map((navigationLink, i) => (
            <Link key={i} href={navigationLink.link}>
              <li className="mx-5">{navigationLink.name}</li>
            </Link>
          ))}
        </ul>
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;