"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface Props {
  title: string;
  image: string;
}

export default function PortfolioDetailClient({ title, image }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  
  const { scrollYProgress } = useScroll({
    target: mounted ? containerRef : undefined,
    offset: ["start start", "end end"],
  });

  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.18], [1, 0]);

  
  if (!mounted) {
    return <section className="bg-white min-h-screen" />;
  }

  return (
    <section ref={containerRef} className="relative bg-white overflow-hidden">
      
      <div
        className="
          absolute inset-0 pointer-events-none opacity-[0.03]
          [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)]
          [background-size:100px_100px]
        "
      />

      
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 py-10  sm:pb-24">
        <motion.div
          style={{ opacity: opacityText }}
          className="grid lg:grid-cols-12 gap-10 md:gap-12"
        >
          <div className="lg:col-span-8">
            <motion.span
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              className="block text-[10px] uppercase tracking-[0.45em] text-black/40 mb-6 sm:mb-8"
            >
              Portfolio
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="
                text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
                font-light tracking-tight leading-[1.08]
                italic font-serif uppercase
              "
            >
              {title}
            </motion.h1>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-end">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="
                text-sm text-black/60 leading-relaxed
                border-l border-black/10 pl-5 sm:pl-6
                max-w-md
              "
            >
              A visual study focused on light, restraint, and atmosphere — created
              through intentional framing and quiet observation.
            </motion.p>
          </div>
        </motion.div>
      </div>

      
    <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
  <div className="relative aspect-[4/5] md:aspect-[3/2] overflow-hidden">
    <Image
      src={image}
      alt={title}
      fill
      sizes="(min-width: 1280px) 80vw, (min-width: 768px) 90vw, 100vw"
      className="object-cover"
      priority
    />
  </div>
</div>


      
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 py-24 sm:py-28 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-14 sm:gap-16 md:gap-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="md:col-span-3 space-y-10"
          >
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.4em] text-black/40 mb-5">
                Technical
              </h4>
              <ul className="space-y-3 text-sm text-black/60">
                <li>Natural & Controlled Light</li>
                <li>Editorial Direction</li>
                <li>Minimal Post-Processing</li>
              </ul>
            </div>
          </motion.div>

          <div className="md:col-span-8 md:col-start-5">
            <motion.h3
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="
                text-xl sm:text-2xl md:text-3xl
                font-light leading-[1.25]
                mb-10 sm:mb-12
                italic font-serif
              "
            >
              “The result is a quiet visual language — timeless, honest, and
              emotionally grounded.”
            </motion.h3>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="
                columns-1 md:columns-2 gap-10 sm:gap-12
                text-sm text-black/60 leading-relaxed
                max-w-3xl
              "
            >
              <p className="mb-6">
                This project explores subtle human expression through controlled
                lighting and minimal composition.
              </p>
              <p>
                Every frame was selected to represent stillness — allowing light
                and time to shape the narrative rather than direction.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
