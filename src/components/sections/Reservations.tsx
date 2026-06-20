import { motion } from "framer-motion";
import { Phone, ShoppingBag, Utensils, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Reservations() {
  return (
    <section id="reservaciones" className="py-24 relative overflow-hidden">
      {/* Background with overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: 'url("/dish2.png")' }}
      />
      <div className="absolute inset-0 z-10 bg-[#1C1C1C]/90" />

      <div className="container relative z-20 mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold tracking-widest uppercase text-sm mb-4 block">
              Reservas y Pedidos
            </span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-6">
              Reserva tu mesa o pide para recoger
            </h2>
            <p className="text-white/70 text-lg mb-12 max-w-xl mx-auto">
              Llámanos directamente para reservar tu mesa, hacer un pedido para llevar o consultar el menú del día.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            {/* Card 1: Reservar mesa */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 text-center">
              <div className="w-14 h-14 rounded-full bg-primary/20 text-primary flex items-center justify-center mx-auto mb-4">
                <Utensils size={28} />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-2">Reservar mesa</h3>
              <p className="text-white/60 text-sm mb-4">
                Aceptamos reservas para grupos y comidas en el local.
              </p>
              <div className="text-white/40 text-xs">
                <span className="inline-flex items-center gap-1">
                  <Clock size={12} />
                  Lunes a Domingo: 06:30 - 22:00
                </span>
              </div>
            </div>

            {/* Card 2: Para llevar */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 text-center">
              <div className="w-14 h-14 rounded-full bg-primary/20 text-primary flex items-center justify-center mx-auto mb-4">
                <ShoppingBag size={28} />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-2">Pedido para recoger</h3>
              <p className="text-white/60 text-sm mb-4">
                Pide por teléfono y pasa a recoger tu comida lista para disfrutar.
              </p>
              <div className="text-white/40 text-xs">
                <span className="inline-flex items-center gap-1">
                  <Clock size={12} />
                  Lunes a Domingo: 06:30 - 22:00
                </span>
              </div>
            </div>

            {/* Card 3: Comer allí */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 text-center">
              <div className="w-14 h-14 rounded-full bg-primary/20 text-primary flex items-center justify-center mx-auto mb-4">
                <Utensils size={28} />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-2">Comer allí</h3>
              <p className="text-white/60 text-sm mb-4">
                Terraza, servicio en mesa y ambiente acogedor e informal.
              </p>
              <div className="text-white/40 text-xs">
                <span className="inline-flex items-center gap-1">
                  <Clock size={12} />
                  Lunes a Domingo: 06:30 - 22:00
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="space-y-2 mb-8">
              <div className="text-white/60 text-sm">
                <span className="font-medium text-white">Dirección: </span>
                Cam. San Bartolomé de Geneto, 196, 38296 La Laguna, Tenerife
              </div>
              <div className="text-white/60 text-sm">
                <span className="font-medium text-white">Aparcamiento: </span>
                Gratuito en la calle
              </div>
            </div>

            <a href="tel:+34822645280">
              <Button
                size="lg"
                className="text-lg px-12 py-8 tracking-wide hover:scale-105 transition-transform inline-flex items-center gap-3"
              >
                <Phone size={24} />
                Llamar: +34 822 64 52 80
              </Button>
            </a>

            <p className="text-white/50 text-sm mt-6">
              También aceptamos pagos con móvil (NFC), tarjeta de crédito y débito.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
