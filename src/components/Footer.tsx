"use client";

import Link from "next/link";
import { motion } from "framer-motion";
const links = [
  { label: "Home", href: "/" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Book", href: "/book" },
  { label: "About", href: "/about" },
];

const practice = [
  "Natural Light First",
  "Minimal Direction",
  "Long-form Sessions",
  "Editorial Finish",
];



export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-[#050505] text-white overflow-hidden border-t border-white/5">
      
      <motion.div
        className="absolute -top-24 -left-24 w-96 h-96 bg-white opacity-[0.03] blur-[120px] rounded-full"
        animate={{ x: [0, 40, 0], opacity: [0.02, 0.05, 0.02] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 py-16">

       
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[9px] sm:text-[10px] uppercase tracking-[0.45em] text-white/30 mb-8"
            >
              Closing Frame / 001
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-light leading-[1.1] tracking-tight"
            >
              We don’t chase moments. <br />
              <span className="italic font-serif text-white/40">
                We wait for the reveal.
              </span>
            </motion.h2>
          </div>

         
          <div className="lg:col-span-4 flex lg:justify-end">
            <div className="overflow-hidden max-w-full">
              <motion.p
                className="text-[9px] uppercase tracking-[0.35em] text-white/30 mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                Studio Practice
              </motion.p>

              <motion.div
                className="flex gap-8 text-[10px] sm:text-[11px] uppercase tracking-widest text-white/60 whitespace-nowrap"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  duration: 12,
                  ease: "linear",
                  repeat: Infinity,
                }}
              >
                {[...practice, ...practice].map((item, i) => (
                  <span key={i}>— {item}</span>
                ))}
              </motion.div>
            </div>
          </div>
        </div>

      
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-baseline gap-8">
          <nav className="flex gap-x-10 gap-y-4 flex-wrap">
  {links.map((item) => (
    <Link
      key={item.label}
      href={item.href}
      className="group relative text-[10px] uppercase tracking-[0.35em] text-white/40 hover:text-white transition-colors"
    >
      {item.label}
      <span className="absolute -bottom-1 left-0 w-0 h-px bg-white/40 transition-all duration-500 group-hover:w-full" />
    </Link>
  ))}
</nav>


        
          <div className="flex items-center gap-3 text-[9px] uppercase tracking-[0.3em] text-white/25">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            Accepting Select Projects — {year}
          </div>
        </div>

       
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[9px] uppercase tracking-[0.35em] text-white/20 italic font-serif">
            Quietly Obsessed With Light
          </div>

          <div className="text-[9px] uppercase tracking-[0.35em] text-white/20">
            © {year} PhotoStudio
            <span className="mx-3 opacity-10">/</span>
            London — UK
          </div>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-[9px] uppercase tracking-[0.35em] text-white/40 hover:text-white transition-colors"
          >
            Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
