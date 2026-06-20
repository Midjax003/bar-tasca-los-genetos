import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative h-[100dvh] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("/dish3.png")' 
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 z-10 bg-black/40" />

      {/* Content */}
      <div className="container relative z-20 mx-auto px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight drop-shadow-lg">
            Donde la Tradición <br className="hidden md:block" />
            <span className="text-primary italic">se Reinventa</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-2xl font-light tracking-wide mb-12 max-w-2xl mx-auto drop-shadow-md text-white/90"
        >
          Cocina de autor con alma local
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            href="tel:+34822645280"
            className="px-8 py-4 bg-primary text-primary-foreground font-semibold tracking-widest uppercase text-sm rounded hover:bg-primary/90 transition-all hover:scale-105"
          >
            Llamar al local
          </a>
          <a
            href="#menu"
            className="px-8 py-4 bg-transparent border border-white text-white font-semibold tracking-widest uppercase text-sm rounded hover:bg-white hover:text-black transition-all hover:scale-105"
          >
            Ver menú
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/70"
      >
        <span className="text-xs uppercase tracking-widest">Explorar</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
}
