"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type Category = "all" | "weddings" | "portraits";

const photos = [
  { id: 1, src: "https://picsum.photos/seed/wed1/800/1000", title: "First Dance", category: "weddings" as const },
  { id: 2, src: "https://picsum.photos/seed/por1/800/1000", title: "Golden Hour", category: "portraits" as const },
  { id: 3, src: "https://picsum.photos/seed/wed2/1000/700", title: "Chapel Moment", category: "weddings" as const },
  { id: 4, src: "https://picsum.photos/seed/por2/700/1000", title: "Natural Light", category: "portraits" as const },
  { id: 5, src: "https://picsum.photos/seed/wed3/800/1000", title: "Garden Vows", category: "weddings" as const },
  { id: 6, src: "https://picsum.photos/seed/por3/800/700", title: "City Dreams", category: "portraits" as const },
  { id: 7, src: "https://picsum.photos/seed/wed4/1000/700", title: "Reception Night", category: "weddings" as const },
  { id: 8, src: "https://picsum.photos/seed/por4/700/1000", title: "Autumn Portrait", category: "portraits" as const },
  { id: 9, src: "https://picsum.photos/seed/wed5/800/1000", title: "Bridal Suite", category: "weddings" as const },
  { id: 10, src: "https://picsum.photos/seed/por5/800/1000", title: "Studio Light", category: "portraits" as const },
  { id: 11, src: "https://picsum.photos/seed/wed6/1000/800", title: "Ring Exchange", category: "weddings" as const },
  { id: 12, src: "https://picsum.photos/seed/por6/700/1000", title: "Dusk & Silhouette", category: "portraits" as const },
];

const filters: { value: Category; label: string }[] = [
  { value: "all", label: "All" },
  { value: "weddings", label: "Weddings" },
  { value: "portraits", label: "Portraits" },
];

export default function PortfolioGrid() {
  const [active, setActive] = useState<Category>("all");

  const filtered = active === "all" ? photos : photos.filter((p) => p.category === active);

  return (
    <section className="py-20 bg-cream">
      <div className="container-main">
        {/* Filter tabs */}
        <div className="flex items-center gap-8 mb-16">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className="relative font-lato text-xs tracking-[0.2em] uppercase pb-2 transition-colors duration-200"
            >
              <span className={active === f.value ? "text-espresso" : "text-taupe hover:text-espresso"}>
                {f.label}
              </span>
              {active === f.value && (
                <motion.span
                  layoutId="filter-underline"
                  className="absolute bottom-0 left-0 right-0 h-px bg-terracotta"
                />
              )}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((photo) => (
              <motion.div
                key={photo.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group relative overflow-hidden cursor-pointer"
              >
                <div className="aspect-[3/4] relative">
                  <Image
                    src={photo.src}
                    alt={photo.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-400">
                    <p className="section-label text-cream/60 mb-1">{photo.category}</p>
                    <p className="font-playfair text-xl text-cream">{photo.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
