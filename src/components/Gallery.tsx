"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  {
    src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1600&q=80",
    title: "Studio Portrait",
    slug: "studio-portrait",
    span: "md:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1574684214713-edc86c5eddc1?auto=format&fit=crop&w=1600&q=80",
    title: "Behind the Scenes",
    slug: "behind-the-scenes",
  },
  {
    src: "https://images.unsplash.com/photo-1622842182823-28bfbfba47e3?auto=format&fit=crop&w=1600&q=80",
    title: "Studio Atmosphere",
    slug: "studio-atmosphere",
  },
  {
    src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=1600&q=80",
    title: "Natural Light",
    slug: "natural-light",
    span: "md:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1485217988980-11786ced9454?auto=format&fit=crop&w=1600&q=80",
    title: "Creative Session",
    slug: "creative-session",
  },
  {
    src: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=1600&q=80",
    title: "Black & White Story",
    slug: "black-white-story",
  },
  {
    src: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1600&q=80",
    title: "Quiet Moment",
    slug: "quiet-moment",
  },
];

export default function Gallery() {
  const [mounted, setMounted] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setMounted(true);

    const interval = setInterval(() => {
      setActiveIndex((current) =>
        current === images.length - 1 ? 0 : current + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative w-full py-10 pb-20 overflow-hidden bg-white">
     
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]
        [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)]
        [background-size:100px_100px]"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
       
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-14 px-6 md:px-8 max-w-xl"
        >
          <span className="block text-[10px] uppercase tracking-[0.5em] text-black/40 mb-4">
            Selected Work
          </span>

          <h1 className="text-3xl md:text-4xl font-light leading-[1.1] tracking-tight text-black">
            Visual stories shaped by
            <br />
            <span className="italic font-serif text-black/50">
              light and silence.
            </span>
          </h1>
        </motion.div>

        
        <div className="block md:hidden relative px-6 h-[450px]">
          <div className="relative w-full h-full overflow-hidden rounded-sm">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full h-full"
              >
                <Link
                  href={`/portfolio/${images[activeIndex].slug}`}
                  className="block w-full h-full"
                >
                  <Image
                    src={images[activeIndex].src}
                    alt={images[activeIndex].title}
                    fill
                    sizes="100vw"
                    priority
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                  <div className="absolute bottom-10 left-8">
                    <p className="text-[10px] uppercase tracking-[0.4em] text-white/60 mb-2">
                      Project {activeIndex + 1} / {images.length}
                    </p>

                    <h2 className="text-xl font-light leading-snug text-white/85">
                      {images[activeIndex].title}
                    </h2>
                  </div>
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>

          
          <div className="flex gap-2 mt-6 justify-center">
            {images.map((_, i) => (
              <div key={i} className="h-0.5 w-8 bg-black/5 overflow-hidden">
                {i === activeIndex && (
                  <motion.div
                    className="h-full bg-black/40"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 4, ease: "linear" }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        
        <div className="hidden md:grid grid-cols-3 auto-rows-[280px] gap-12 px-8">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`group relative overflow-hidden ${image.span ?? ""}`}
            >
              <Link
                href={`/portfolio/${image.slug}`}
                className="block h-full w-full"
              >
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <span className="text-[10px] uppercase tracking-[0.4em] text-white/80 font-light">
                    {image.title}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
