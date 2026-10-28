"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Award, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import SectionHeading from "./SectionHeading";

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
};

const isPdf = (file: string) => file.toLowerCase().endsWith(".pdf");

export default function CertificatesSlider({ files }: { files: string[] }) {
  const [[index, direction], setPage] = useState<[number, number]>([0, 0]);

  const paginate = useCallback(
    (dir: number) => {
      setPage(([i]) => [(i + dir + files.length) % files.length, dir]);
    },
    [files.length]
  );

  const goTo = (i: number) => setPage(([cur]) => [i, i > cur ? 1 : -1]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") paginate(1);
      if (e.key === "ArrowLeft") paginate(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [paginate]);

  const file = files[index];
  const pdf = file ? isPdf(file) : false;

  return (
    <section id="certificates" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading eyebrow="05. Certificates" title="Courses & achievements" />

      {files.length === 0 ? (
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-3 rounded-2xl border border-dashed border-border p-12 text-center text-muted">
          <Award className="h-10 w-10 text-accent" />
          <p>Add images or PDFs to <code className="font-mono">public/certificates/</code></p>
        </div>
      ) : (
        <div className="mx-auto max-w-3xl">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card">
            <div className="relative aspect-[4/3] w-full sm:aspect-[16/10]">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={file}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                  drag={pdf ? false : "x"}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={(_, info) => {
                    if (info.offset.x < -80) paginate(1);
                    else if (info.offset.x > 80) paginate(-1);
                  }}
                  className={`absolute inset-0 flex items-center justify-center ${
                    pdf ? "p-0" : "cursor-grab p-4 active:cursor-grabbing"
                  }`}
                >
                  {pdf ? (
                    <iframe
                      src={`${file}#toolbar=0&navpanes=0`}
                      title={`Certificate ${index + 1}`}
                      className="h-full w-full"
                    />
                  ) : (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={file}
                      alt={`Certificate ${index + 1}`}
                      draggable={false}
                      className="max-h-full max-w-full rounded-lg object-contain"
                    />
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {files.length > 1 && (
              <>
                <button
                  onClick={() => paginate(-1)}
                  aria-label="Previous certificate"
                  className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-border bg-background/80 p-2 backdrop-blur transition hover:border-accent hover:text-accent"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={() => paginate(1)}
                  aria-label="Next certificate"
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-border bg-background/80 p-2 backdrop-blur transition hover:border-accent hover:text-accent"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </>
            )}
          </div>

          <div className="mt-5 flex items-center justify-between">
            <span className="font-mono text-sm text-muted">
              {index + 1} / {files.length}
            </span>
            <a
              href={file}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-muted transition hover:border-accent hover:text-accent"
            >
              <ExternalLink className="h-4 w-4" /> Open full size
            </a>
          </div>

          {files.length > 1 && (
            <div className="mt-6 flex justify-center gap-2">
              {files.map((f, i) => (
                <button
                  key={f}
                  onClick={() => goTo(i)}
                  aria-label={`Go to certificate ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? "w-6 bg-accent" : "w-2 bg-border hover:bg-muted"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  );
}