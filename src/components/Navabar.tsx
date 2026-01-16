"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Book", href: "/book" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  const { scrollY } = useScroll();

  
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (previous !== undefined && !isOpen) {
      setHidden(latest > previous && latest > 100);
    }
  });

  
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      
      <motion.nav
        initial={false}
        animate={{
          y: hidden || isOpen ? "-120%" : "0%",
        }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-2 left-0 w-full z-50"
      >
        <div className="max-w-8xl mx-auto px-4">
          <div className="bg-black/95 backdrop-blur border border-white/10 rounded-2xl shadow-[0_8px_20px_rgba(0,0,0,0.35)]">
            <div className="px-8 h-16 flex items-center justify-between">
              
              <Link href="/" className="select-none">
                <motion.h1
                  whileHover={{ opacity: 0.7 }}
                  transition={{ duration: 0.3 }}
                  className="text-[14px] font-semibold uppercase tracking-[0.25em] text-white"
                >
                  Photo<span className="font-light italic">Studio</span>
                </motion.h1>
              </Link>

            
              <div className="hidden md:flex items-center space-x-12">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-[11px] uppercase tracking-[0.22em] text-white/70 hover:text-white transition"
                  >
                    {link.name}
                  </Link>
                ))}

                <Link
                  href="/book"
                  className="text-[11px] uppercase tracking-[0.22em] text-white border border-white/20 px-7 py-2 rounded-full hover:bg-white hover:text-black transition"
                >
                  Reserve
                </Link>
              </div>

              
              <div className="md:hidden">
                <button
                  onClick={() => setIsOpen(true)}
                  className="text-white p-2"
                  aria-label="Open menu"
                >
                  <Menu size={22} strokeWidth={1.2} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.nav>

     
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-black flex flex-col"
          >
            
            <div className="flex items-center justify-between px-6 pt-6">
              <div className="text-[14px] uppercase tracking-[0.3em] text-white">
                Photo<span className="font-light italic">Studio</span>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="text-white p-2"
                aria-label="Close menu"
              >
                <X size={22} strokeWidth={1.2} />
              </button>
            </div>

            
            <div className="flex flex-col items-center justify-center flex-1 space-y-10">
              <div className="text-center">
                <p className="text-[10px] uppercase tracking-[0.35em] text-white/40 mb-6">
                  Visual Stories & Portraits
                </p>

                <div className="w-16 h-px bg-white/10 mx-auto mb-10" />
              </div>

              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, ease: "easeOut" }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="
                      text-2xl uppercase tracking-[0.4em]
                      font-light text-white/85
                      active:text-white
                      transition-colors
                    "
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            
            <div className="pb-10 text-center">
              <span className="text-[9px] uppercase tracking-[0.3em] text-white/30">
                Tap X to close
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
