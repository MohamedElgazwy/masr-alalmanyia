"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../public/images/logo.jpg";

/* Animation Variants */
const mobileMenu = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
};

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white border-b shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={logo}
            alt="Nabd Alhayaat Logo"
            width={48}
            height={48}
            priority
            className="hover:scale-105 transition-transform duration-300"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-gray-700 text-sm font-medium">
          {[
            { name: "الرئيسية", href: "/" },
            { name: "الخدمات", href: "/services" },
            { name: "من نحن", href: "/about" },
            { name: "تواصل", href: "/contact" },
            { name: "مقالات", href: "/articles" },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="group relative transition-colors duration-300 hover:text-blue-700"
            >
              {item.name}

              {/* underline animation */}
              <span
                className="
                  absolute left-0 -bottom-1
                  w-0 h-[2px]
                  bg-blue-700
                  transition-all duration-300
                  group-hover:w-full
                "
              />
            </Link>
          ))}
        </div>

        {/* Hamburger Button (Mobile) */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700 focus:outline-none"
          aria-label="Toggle Menu"
        >
          <motion.svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            animate={{ rotate: open ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </motion.svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            variants={mobileMenu}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden bg-white border-t shadow-sm"
          >
            <div className="flex flex-col px-4 py-4 gap-2 text-gray-700 text-sm font-medium">
              {[
                { name: "الرئيسية", href: "/" },
                { name: "الخدمات", href: "/services" },
                { name: "من نحن", href: "/about" },
                { name: "تواصل", href: "/contact" },
                { name: "مقالات", href: "/articles" },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="
                    px-4 py-3 rounded-lg
                    transition-all duration-300
                    hover:bg-blue-50 hover:text-blue-700
                    active:scale-[0.98]
                  "
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
