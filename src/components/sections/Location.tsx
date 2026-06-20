import { MapPin, Phone, Clock, Euro } from "lucide-react";

export function Location() {
  return (
    <section id="contacto" className="py-0 bg-background border-t border-border/50">
      <div className="flex flex-col lg:flex-row h-auto lg:h-[600px]">
        {/* Map */}
        <div className="w-full lg:w-1/2 h-[400px] lg:h-full">
          <iframe
            src="https://maps.google.com/maps?q=Cam.+San+Bartolom%C3%A9+de+Geneto,+196,+38296+La+Laguna,+Santa+Cruz+de+Tenerife&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale-[0.5] contrast-[1.1] opacity-90"
            title="Ubicación de Tasca Los Genetos"
          ></iframe>
        </div>

        {/* Contact Info */}
        <div className="w-full lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center bg-card">
          <div className="mb-10">
            <span className="text-primary font-semibold tracking-widest uppercase text-sm mb-2 block">Visítanos</span>
            <h2 className="font-display text-4xl font-bold text-foreground">Contacto y Ubicación</h2>
          </div>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-1">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-1">Dirección</h4>
                <p className="text-foreground/70">
                  Cam. San Bartolomé de Geneto, 196<br/>
                  38296 La Laguna, Santa Cruz de Tenerife
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-1">
                <Clock size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-1">Horarios</h4>
                <p className="text-foreground/70">
                  <span className="font-medium">Lunes a Viernes:</span> 06:30 - 22:00<br/>
                  <span className="font-medium">Sábados y Domingos:</span> 06:30 - 22:00
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-1">
                <Euro size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-1">Precio medio</h4>
                <p className="text-foreground/70">10 – 20 € por persona</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-1">
                <Phone size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-1">Teléfono</h4>
                <a href="tel:+34822645280" className="text-foreground/70 hover:text-primary transition-colors">
                  +34 822 64 52 80
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
