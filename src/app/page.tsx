"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const heroImages = [
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1485217988980-11786ced9454?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80",
];

export default function HomePage() {
  const [index, setIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <main className="relative min-h-screen flex items-center overflow-hidden ">

      
      <div className="absolute inset-0 -z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={heroImages[index]}
              alt="Photography hero background"
              fill
              priority
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 bg-black/55" />
      </div>

     
      <div className="max-w-7xl mx-auto px-8 w-full ">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl text-white"
        >
          <span className="block text-[10px] uppercase tracking-[0.4em] text-white/60 mb-6">
            Photo Studio
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] tracking-tight">
            Capturing moments
            <br />
            that feel{" "}
            <span className="italic font-serif text-white/70">
              real, timeless,
            </span>
            <br />
            and human.
          </h1>

          <p className="mt-8 text-sm text-white/75 leading-relaxed max-w-md">
            Portraits, studio sessions, and visual stories shaped by
            light, emotion, and intention.
          </p>

          <div className="mt-12 flex items-center gap-10">
            <Link
              href="/portfolio"
              className="text-[10px] uppercase tracking-[0.35em]
              border border-white/30 px-8 py-3
              text-white/80
              hover:bg-white hover:text-black transition-all"
            >
              View Work
            </Link>

            <Link
              href="/book"
              className="text-[10px] uppercase tracking-[0.35em]
              text-white/70 hover:text-white transition"
            >
              Reserve a Session
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
