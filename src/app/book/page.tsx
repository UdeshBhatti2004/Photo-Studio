"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";

export default function BookingPage() {
  return (
    <main className="relative w-full bg-white text-black overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.02] [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:160px_160px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* LEFT */}
          <motion.div
            initial={false}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-5 space-y-8"
          >
            <p className="text-[10px] uppercase tracking-[0.45em] text-black/40">
              Booking
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light leading-[1.1] tracking-tight">
              Begin a
              <br />
              <span className="italic font-serif text-black/50">
                quiet collaboration.
              </span>
            </h1>

            <p className="text-sm text-black/60 leading-relaxed max-w-sm">
              We take on a limited number of projects. Share your idea and we’ll
              respond with availability and next steps.
            </p>
          </motion.div>

        
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-7 border border-black/10 bg-white p-6 sm:p-10"
          >
            <form
              onSubmit={async (e) => {
                e.preventDefault();

                const form = e.currentTarget;

                const data = {
                  name: (form[0] as HTMLInputElement).value,
                  email: (form[1] as HTMLInputElement).value,
                  subject: (form[2] as HTMLInputElement).value,
                  date: (form[3] as HTMLInputElement).value,
                  message: (form[4] as HTMLTextAreaElement).value,
                };

                try {
                  const res = await fetch("/api/booking", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                  });

                  if (res.ok) {
                    toast.success("Inquiry sent. We’ll reach you shortly.");
                    form.reset();
                  } else {
                    toast.error("Failed to send inquiry. Please try again.");
                  }
                } catch (error) {
                  toast.error("Something went wrong. Please try again.");
                }
              }}
              className="space-y-10"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                
                <div className="relative">
                  <input
                    type="text"
                    required
                    placeholder=" "
                    className="peer w-full min-h-[52px] border-b border-black/15 bg-transparent py-4 text-sm outline-none focus:border-black transition"
                  />
                  <label className="absolute left-0 top-4 h-4 text-xs uppercase tracking-widest text-black/40 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:tracking-normal peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-[10px] peer-not-placeholder-shown:tracking-[0.25em] peer-focus:-top-4 peer-focus:text-[10px] peer-focus:tracking-[0.25em] peer-focus:text-black">
                    Full Name
                  </label>
                </div>

               
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder=" "
                    className="peer w-full min-h-[52px] border-b border-black/15 bg-transparent py-4 text-sm outline-none focus:border-black transition"
                  />
                  <label className="absolute left-0 top-4 h-4 text-xs uppercase tracking-widest text-black/40 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:tracking-normal peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-[10px] peer-not-placeholder-shown:tracking-[0.25em] peer-focus:-top-4 peer-focus:text-[10px] peer-focus:tracking-[0.25em] peer-focus:text-black">
                    Email Address
                  </label>
                </div>

              
                <div className="relative">
                  <input
                    type="text"
                    required
                    placeholder=" "
                    className="peer w-full min-h-[52px] border-b border-black/15 bg-transparent py-4 text-sm outline-none focus:border-black transition"
                  />
                  <label className="absolute left-0 top-4 h-4 text-xs uppercase tracking-widest text-black/40 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:tracking-normal peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-[10px] peer-not-placeholder-shown:tracking-[0.25em] peer-focus:-top-4 peer-focus:text-[10px] peer-focus:tracking-[0.25em] peer-focus:text-black">
                    Subject
                  </label>
                </div>

              
                <div className="relative">
                  <input
                    type="date"
                    className="peer w-full min-h-[52px] border-b border-black/15 bg-transparent py-4 text-sm outline-none focus:border-black transition"
                  />
                  <label className="absolute left-0 top-4 h-4 text-xs uppercase tracking-widest text-black/40 transition-all peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-[10px] peer-not-placeholder-shown:tracking-[0.25em] peer-focus:-top-4 peer-focus:text-[10px] peer-focus:tracking-[0.25em] peer-focus:text-black">
                    Preferred Date
                  </label>
                </div>
              </div>

              
              <div className="relative">
                <textarea
                  rows={4}
                  placeholder=" "
                  className="peer w-full min-h-[52px] border-b border-black/15 bg-transparent py-4 text-sm outline-none resize-none focus:border-black transition"
                />
                <label className="absolute left-0 top-4 h-4 text-xs uppercase tracking-widest text-black/40 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:tracking-normal peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-[10px] peer-not-placeholder-shown:tracking-[0.25em] peer-focus:-top-4 peer-focus:text-[10px] peer-focus:tracking-[0.25em] peer-focus:text-black">
                  Project Details
                </label>
              </div>

      
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-6">
                <p className="text-[10px] uppercase tracking-wide text-black/40 max-w-xs">
                  By submitting this form, you agree to our studio terms.
                </p>

                <button
                  type="submit"
                  className="flex items-center gap-3 bg-black text-white px-10 py-5 text-[10px] uppercase tracking-[0.35em]"
                >
                  Send Inquiry
                  <ArrowRight size={14} />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
