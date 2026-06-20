import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const images = [
  { src: "/dish1.png", alt: "Plato con ensalada y salsas" },
  { src: "/dish2.png", alt: "Croquetas caseras" },
  { src: "/dish3.png", alt: "Carne de cabra guisada con papas" },
  { src: "/dish4.png", alt: "Carne con papas fritas" },
  { src: "/dish5.png", alt: "Carne guisada con papas y salsa" },
  { src: "/dish6.png", alt: "Costillas con papas y salsa" },
  { src: "/dish7.png", alt: "Pescado a la plancha con papas" },
  { src: "/dish8.png", alt: "Ensalada de la casa" },
  { src: "/dish9.png", alt: "Croquetas redondas con alioli" },
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="galeria" className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16 space-y-4">
          <span className="text-primary font-semibold tracking-widest uppercase text-sm">Experiencia Visual</span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground">Nuestra Galería</h2>
        </div>
      </div>

      {/* Horizontal scroll strip — no resize, native image height */}
      <div className="overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-primary/30 scrollbar-track-transparent">
        <div className="flex gap-4 px-6 lg:px-12" style={{ width: "max-content" }}>
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="relative overflow-hidden rounded-lg group cursor-pointer shrink-0"
              style={{ height: "340px" }}
              onClick={() => setSelectedImage(img.src)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-auto object-contain rounded-lg transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-end p-4">
                <span className="text-white text-sm font-medium">{img.alt}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImage}
              alt="Vista ampliada"
              className="max-w-full max-h-[90vh] object-contain rounded"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
