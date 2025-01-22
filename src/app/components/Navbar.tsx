"use client";

import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import LocalSwitcher from "./LocalSwitcher";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const t = useTranslations("Navbar");
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [locale, setLocale] = useState<string>("en");

  const pathname = usePathname();

  useEffect(() => {
    // Set locale based on URL path
    const newLocale = pathname.split("/")[1] || "en";
    if (newLocale !== locale) setLocale(newLocale);
  }, [pathname, locale]);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-100 text-black p-4 border-b z-50">
      <div className="max-w-[1024px] mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center">
          <div className="mr-4 cursor-pointer">
            <Link href="/">{/* Logo here */}</Link>
          </div>
        </div>

        {/* Menu */}
        <div className="flex justify-center md:justify-end md:flex-grow">
          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden">
            <div className="mr-4">
              <LocalSwitcher />
            </div>
            <button onClick={toggleMenu} className="block cursor-pointer">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>

            {/* Mobile Menu */}
            {menuOpen && (
              <div
                className="fixed inset-0 flex flex-col justify-center items-center bg-customGreen"
                onClick={closeMenu}
              >
                <button
                  onClick={closeMenu}
                  className="absolute top-0 right-0 m-4 text-black"
                >
                  <svg
                    className="h-6 w-6"
                    fill="#6EE7B7"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                <ul className="flex flex-col items-center space-y-4">
                  <li>
                    <Link href="/" onClick={closeMenu}>
                      {t("home")}
                    </Link>
                  </li>
                  <li>
                    <Link href={`/${locale}/blog`} onClick={closeMenu}>
                      {t("blog")}
                    </Link>
                  </li>
                  <li>
                    <Link href={`/${locale}/contact`} onClick={closeMenu}>
                      {t("contact")}
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Desktop Menu */}
          <ul
            className={`hidden md:flex items-center space-x-4 ${
              menuOpen ? "hidden" : "flex"
            }`}
          >
            <li>
              <Link href="/">{t("home")}</Link>
            </li>
            <li>
              <Link href={`/${locale}/blog`}>{t("blog")}</Link>
            </li>
            <li>
              <Link href={`/${locale}/contact`}>{t("contact")}</Link>
            </li>
            <li>
              <LocalSwitcher />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
