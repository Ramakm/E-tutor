"use client";
import React from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const links = [
  { name: "home", link: "/" },
  { name: "about", link: "#about" },
  { name: "service", link: "#service" },
  { name: "skills", link: "#skill" },
  { name: "projects", link: "#project" },
  { name: "resume", link: "#resume" },
  { name: "contact", link: "#contact" },
];

const Header = () => {
  const [expandedMenu, setExpandedMenu] = React.useState(false);
  const [activeNav, setActiveNav] = React.useState<string>("");

  React.useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 200
        ? setActiveNav(
            "fixed top-0 left-0 w-full bg-[#222222] bg-opacity-80 lg:shadow-2xl z-30 transform transition-transform duration-700 ease-in-out"
          )
        : setActiveNav("");
    }
  };

  return (
    <>
      <div
        onCopy={(event) => {
          event.preventDefault();
        }}
      >
        <div className={`${activeNav} text-neutral py-6 lg:px-28 md:px-12 sm:px-8 px-4 bg-secondary-50`}
        >
          <div className="flex justify-between items-center">
            <Link href={"/"}>
              <h1 className={`uppercase text-xl font-bold text-primary`}>
                Mohammad Awlad
              </h1>
            </Link>
            <div className="lg:block hidden">
              <ul className="flex items-center gap-6 uppercase">
                {links.map((link) => (
                  <li
                    key={link.name}
                    className={`${
                      activeNav ? "" : "hover:text-primary"
                    } duration-300 ease-in-out`}
                  >
                    <Link href={link.link}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            {/*---- Menu Icon ---*/}
            <AiOutlineMenu
              onClick={() => setExpandedMenu(true)}
              className="text-xl lg:hidden block cursor-pointer"
            />
          </div>
        </div>
        {/*---- Mobile Menu ----*/}
        <div
          className={`${
            expandedMenu ? "translate-y-0" : "-translate-y-full"
          } bg-primary text-neutral lg:hidden md:px-12 sm:px-8 px-4 py-3 transition-transform duration-500 ease-in-out transform fixed top-0 left-0 w-full z-40 flex justify-between`}
        >
          <ul className="uppercase">
            {links.map((link) => (
              <li
                key={link.name}
                className="my-4"
                onClick={() => setExpandedMenu(false)}
              >
                <Link href={link.link}>{link.name}</Link>
              </li>
            ))}
          </ul>
          <AiOutlineClose
            onClick={() => setExpandedMenu(false)}
            className="text-xl mt-3 cursor-pointer"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
