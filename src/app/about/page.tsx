"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="relative w-full bg-white text-black overflow-hidden">

     
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.02]
          [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)]
          [background-size:160px_160px]"
        />
      </div>

     
      <div className="absolute inset-0 pointer-events-none flex justify-between px-6 sm:px-8">
        <div className="w-px h-full bg-black/10" />
        <div className="w-px h-full bg-black/10 hidden lg:block" />
        <div className="w-px h-full bg-black/10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 py-10">

       
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[10px] uppercase tracking-[0.45em] text-black/40 mb-8"
            >
              About
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl font-light leading-[1.1] tracking-tight"
            >
              A photography studio
              <br />
              <span className="italic font-serif text-black/50">
                shaped by patience.
              </span>
            </motion.h1>
          </div>

          
          <div className="lg:col-span-4 lg:col-start-9 pt-2 md:pt-12">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="space-y-6"
            >
              <p className="text-[10px] uppercase tracking-[0.3em] text-black/30 border-b border-black/10 pb-2">
                Focus
              </p>

              <ul className="text-xs uppercase tracking-widest leading-loose text-black/55">
                <li>Editorial Portraiture</li>
                <li>Quiet Studio Sessions</li>
                <li>Art Direction</li>
              </ul>
            </motion.div>
          </div>
        </div>

       
        <div className="mt-24 md:mt-32 grid grid-cols-1 md:grid-cols-12 gap-14 md:gap-24 items-center">

         
          <motion.div
            className="md:col-span-5 relative aspect-[4/5] bg-neutral-100 overflow-hidden"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1727528605123-142157a2c30c?w=1200&auto=format&fit=crop&q=80"
              alt="Studio light and space"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover grayscale"
              priority
            />
          </motion.div>

         
          <div className="md:col-span-7 lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="space-y-8"
            >
              <h3 className="text-lg md:text-xl font-light leading-relaxed max-w-xl">
                We work quietly, with minimal direction and extended sessions.
                Our focus is not on performance, but on presence.
              </h3>

              <div className="h-px w-10 bg-black/20" />

              <p className="text-sm text-black/60 leading-relaxed max-w-md">
                Founded on the belief that the strongest images are observed,
                not constructed. We allow time, silence, and trust to shape
                each frame.
              </p>

              <div className="pt-6 flex gap-10 text-[9px] uppercase tracking-[0.35em] text-black/30">
                <span>EST — 2026</span>
                <span>London / UK</span>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
