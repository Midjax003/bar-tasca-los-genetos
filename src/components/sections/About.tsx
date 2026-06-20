import { motion } from "framer-motion";
import { Accessibility, Car, Coffee, Sun, Clock, Wine, Beer, CreditCard, Baby, Check } from "lucide-react";

const features = [
  { icon: Accessibility, label: "Acceso para sillas de ruedas" },
  { icon: Car, label: "Aparcamiento adaptado" },
  { icon: Sun, label: "Terraza" },
  { icon: Coffee, label: "Buen caf\u00e9" },
  { icon: Wine, label: "Bebidas alcoh\u00f3licas" },
  { icon: Beer, label: "Cerveza y vino" },
  { icon: Clock, label: "Desayuno, comida y cena" },
  { icon: CreditCard, label: "Pago con m\u00f3vil NFC" },
  { icon: Baby, label: "Adecuado para ni\u00f1os" },
  { icon: Car, label: "Aparcamiento gratuito en calle" },
];

export function About() {
  return (
    <section id="nosotros" className="py-24 lg:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 space-y-8"
          >
            <div className="space-y-2">
              <span className="text-primary font-semibold tracking-widest uppercase text-sm">Nuestra Historia</span>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground">
                El sabor de la tierra, el calor de la casa.
              </h2>
            </div>

            <p className="text-foreground/80 leading-relaxed text-lg">
              Tasca Los Genetos es un rincón auténtico en La Laguna donde la tradición canaria se encuentra con la cocina casera hecha con cariño. Desde nuestras croquetas caseras, que son de sobra conocidas en el barrio, hasta nuestra carne de cabra guisada y las escaldadas, cada plato cuenta una historia de sabores locales y recetas que se pasan de generación en generación.
            </p>

            <p className="text-foreground/80 leading-relaxed text-lg">
              Ubicado en Cam. San Bartolomé de Geneto, 196, somos un bar restaurante donde el trato familiar y los precios honestos (de 10 a 20 € por persona) hacen que cada visita sea una experiencia cálida y memorable. Ven a comer allí, llévate para llevar o pide para recoger.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-2xl">
              <img
                src="/dish4.png"
                alt="Interior acogedor del restaurante"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-xl" />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-secondary/10 rounded-full blur-3xl -z-10" />
            </div>
          </motion.div>

        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20"
        >
          <h3 className="font-display text-2xl font-bold text-center mb-10">
            Todo lo que ofrecemos
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {features.map((feature, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-4 bg-muted/40 rounded-lg hover:bg-muted/60 transition-colors"
              >
                <feature.icon size={18} className="text-primary shrink-0" />
                <span className="text-sm text-foreground/80">{feature.label}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
            <div className="p-3 bg-primary/5 rounded-lg">
              <Check size={16} className="text-primary mx-auto mb-1" />
              <span className="text-xs text-foreground/70">Servicio en mesa</span>
            </div>
            <div className="p-3 bg-primary/5 rounded-lg">
              <Check size={16} className="text-primary mx-auto mb-1" />
              <span className="text-xs text-foreground/70">Comida rápida</span>
            </div>
            <div className="p-3 bg-primary/5 rounded-lg">
              <Check size={16} className="text-primary mx-auto mb-1" />
              <span className="text-xs text-foreground/70">Platos pequeños</span>
            </div>
            <div className="p-3 bg-primary/5 rounded-lg">
              <Check size={16} className="text-primary mx-auto mb-1" />
              <span className="text-xs text-foreground/70">Ambiente acogedor e informal</span>
            </div>
            <div className="p-3 bg-primary/5 rounded-lg">
              <Check size={16} className="text-primary mx-auto mb-1" />
              <span className="text-xs text-foreground/70">Postres</span>
            </div>
            <div className="p-3 bg-primary/5 rounded-lg">
              <Check size={16} className="text-primary mx-auto mb-1" />
              <span className="text-xs text-foreground/70">Bar</span>
            </div>
            <div className="p-3 bg-primary/5 rounded-lg">
              <Check size={16} className="text-primary mx-auto mb-1" />
              <span className="text-xs text-foreground/70">Aseos</span>
            </div>
            <div className="p-3 bg-primary/5 rounded-lg">
              <Check size={16} className="text-primary mx-auto mb-1" />
              <span className="text-xs text-foreground/70">Se aceptan reservas</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
