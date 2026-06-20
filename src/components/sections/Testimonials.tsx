import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    text: "Sitio muy fácil de llegar, la comida espectacular y con mucha variedad, el personal muy profesional y muy buen trato.",
    author: "Domingo Curbelo",
    stars: 5,
    initials: "DC"
  },
  {
    id: 2,
    text: "Lugar con comida tradicional canaria, buen precio y bastante tranquilo.",
    author: "Gustavo Adolfo Hernández Quesada",
    stars: 5,
    initials: "GH"
  },
  {
    id: 3,
    text: "Es un lugar excelente, buen ambiente, la comida en su punto, la atención es muy buena. Es muy fácil llegar y desde el intercambiador de La Laguna si vienes en guaguas.",
    author: "Jose Chacon",
    stars: 5,
    initials: "JC"
  },
  {
    id: 4,
    text: "Me sorprendió esta tasca. La comida riquísima muy casera. El postre polvito uruguayo no se diga, buenísimo. Por supuesto repetiré.",
    author: "Blanca Dominguez Nebreda",
    stars: 5,
    initials: "BD"
  },
  {
    id: 5,
    text: "Trato excelente, comida muy buena y precios muy asequibles. Gracias.",
    author: "Lynx en autocaravana",
    stars: 5,
    initials: "LY"
  },
  {
    id: 6,
    text: "Un lugar muy acogedor y limpio. Los chicos muy amables y simpáticos. Unos bocadillos exquisitos... un 1000 de 10. Lo recomiendo mucho.",
    author: "Yili",
    stars: 5,
    initials: "YL"
  },
  {
    id: 7,
    text: "Muy buenas las cañas y comí carne fiesta y una empanada muy rica. Y el servicio de las chicas excelente.",
    author: "Fran Prieto",
    stars: 5,
    initials: "FP"
  },
  {
    id: 8,
    text: "Comida casera canaria, a muy buen precio. Ideal para días de tránsito, compras o trabajo y tienes poco tiempo para comer.",
    author: "Sonia González",
    stars: 5,
    initials: "SG"
  },
  {
    id: 9,
    text: "Buenos platos. Costillas con papas y piña deliciosa, tienen escaldón y calamares. Buena atención.",
    author: "Juan José Valencia",
    stars: 5,
    initials: "JV"
  },
  {
    id: 10,
    text: "Muy buena cocina. Espectacular. Servicio agradable y rápido.",
    author: "Rafael Molina Tejera",
    stars: 5,
    initials: "RM"
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonios" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <div className="mb-16 space-y-4">
          <span className="text-primary font-semibold tracking-widest uppercase text-sm">Lo que dicen</span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground">Nuestros Comensales</h2>
        </div>

        <div className="max-w-3xl mx-auto relative min-h-[250px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <div className="flex gap-1 mb-6 text-primary">
                {[...Array(testimonials[currentIndex].stars)].map((_, i) => (
                  <Star key={i} size={24} fill="currentColor" />
                ))}
              </div>
              <p className="font-display text-2xl md:text-3xl italic text-foreground mb-8 leading-relaxed">
                "{testimonials[currentIndex].text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-lg">
                  {testimonials[currentIndex].initials}
                </div>
                <div className="text-left">
                  <span className="block font-semibold text-foreground">{testimonials[currentIndex].author}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                idx === currentIndex ? "bg-primary w-6" : "bg-foreground/20 hover:bg-primary/50"
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
