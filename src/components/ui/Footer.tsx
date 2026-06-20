import { Instagram, Facebook, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-[#1C1C1C] text-white pt-20 pb-10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Logo & Tagline */}
          <div className="space-y-6">
            <h2 className="font-display text-3xl font-bold tracking-widest text-primary">
              TASCA LOS GENETOS
            </h2>
            <p className="text-white/70 max-w-sm">
              Donde la tradición se reinventa. Cocina de autor con alma local en un ambiente sofisticado y sensual.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-[#1C1C1C] transition-colors text-primary">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-[#1C1C1C] transition-colors text-primary">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-[#1C1C1C] transition-colors text-primary">
                <FaWhatsapp size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-xl font-semibold mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-4">
              <li>
                <a href="#nosotros" className="text-white/70 hover:text-primary transition-colors">Nuestra Historia</a>
              </li>
              <li>
                <a href="#menu" className="text-white/70 hover:text-primary transition-colors">Menú</a>
              </li>
              <li>
                <a href="#reservaciones" className="text-white/70 hover:text-primary transition-colors">Reservaciones</a>
              </li>
              <li>
                <a href="#contacto" className="text-white/70 hover:text-primary transition-colors">Contacto</a>
              </li>
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="font-display text-xl font-semibold mb-6">Servicios</h3>
            <ul className="space-y-4 text-white/70">
              <li>Comer allí</li>
              <li>Para llevar</li>
              <li>Terraza</li>
              <li>Servicio en mesa</li>
              <li>Acceso para sillas de ruedas</li>
              <li>Aparcamiento gratuito en calle</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center md:flex md:justify-between md:text-left text-white/50 text-sm">
          <p>© 2025 TASCA LOS GENETOS. Todos los derechos reservados.</p>
          <div className="mt-4 md:mt-0 flex justify-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
