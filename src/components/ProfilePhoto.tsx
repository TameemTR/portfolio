"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ProfilePhoto() {
  const [failed, setFailed] = useState(false);

  return (
    <>
      {/* Diagonal color panel */}
      <div
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[48%] bg-accent/20 lg:block"
        style={{ clipPath: "polygon(35% 0, 100% 0, 100% 100%, 0 100%)" }}
      />

      {/* Frameless photo standing on the bottom edge */}
      {!failed && (
        <motion.img
          src="/images/pro-pic.png"
          alt="Md Tameem Rahman"
          onError={() => setFailed(true)}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          draggable={false}
          className="pointer-events-none absolute bottom-0 right-[4%] hidden h-[calc(100%-6rem)] max-w-[44%] object-contain object-bottom lg:block"
        />
      )}
    </>
  );
}