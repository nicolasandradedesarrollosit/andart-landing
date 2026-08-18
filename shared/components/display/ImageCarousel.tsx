"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/shared/lib/cn";

interface ImageCarouselProps {
  images: string[];
  alt: string;
  className?: string;
  fit?: "cover" | "contain";
}

export function ImageCarousel({ images, alt, className, fit = "cover" }: ImageCarouselProps) {
  const [current, setCurrent] = useState(0);
  const isContain = fit === "contain";

  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrent((c) => (c + 1) % images.length);

  return (
    <div className={cn("browser-frame", className)}>
      <div className="code-window-dots browser-frame-bar">
        <div className="code-window-dot bg-red-500" />
        <div className="code-window-dot bg-yellow-500" />
        <div className="code-window-dot bg-green-500" />
      </div>

      <div
        className={cn(
          "relative group aspect-video sm:aspect-[16/10] overflow-hidden",
          isContain && "bg-white"
        )}
      >
        {images.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt={`${alt} ${i + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, 80vw"
            className={cn(
              isContain ? "object-contain" : "object-cover object-top",
              "transition-opacity duration-500",
              i === current ? "opacity-100" : "opacity-0"
            )}
            priority={i === 0}
          />
        ))}

        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-black/50 text-white/80 hover:bg-black/70 hover:text-white backdrop-blur-sm transition-all opacity-100 md:opacity-0 md:group-hover:opacity-100 cursor-pointer"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-black/50 text-white/80 hover:bg-black/70 hover:text-white backdrop-blur-sm transition-all opacity-100 md:opacity-0 md:group-hover:opacity-100 cursor-pointer"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-1.5">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all cursor-pointer",
                    i === current ? "bg-white w-6" : "bg-white/50 hover:bg-white/80"
                  )}
                  aria-label={`Go to image ${i + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
