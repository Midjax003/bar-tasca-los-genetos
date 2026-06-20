import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";

type MenuItem = {
  name: string;
  price: number;
  description: string;
  tags: string[];
};

type MenuCategory = {
  id: string;
  title: string;
  items: MenuItem[];
};

const menuData: MenuCategory[] = [
  {
    id: "entradas",
    title: "Entradas",
    items: [
      { name: "Ceviche de Corvina", price: 18, description: "Corvina fresca, leche de tigre, ají amarillo, maíz tostado", tags: ["GF"] },
      { name: "Tartar de Atún", price: 22, description: "Atún rojo, aguacate, sésamo, salsa ponzu, microgreens", tags: [] },
      { name: "Crema de Calabaza", price: 14, description: "Calabaza asada, crema de coco, chips de ajo, aceite de trufa", tags: ["V"] },
      { name: "Tabla de Quesos Artesanales", price: 26, description: "Selección local, miel de caña, nueces, pan de masa madre", tags: [] },
    ]
  },
  {
    id: "fuertes",
    title: "Platos Fuertes",
    items: [
      { name: "Presa Ibérica", price: 38, description: "Cerdo ibérico, puré de boniato, salsa de vino tinto, espárragos", tags: [] },
      { name: "Lubina a la Plancha", price: 34, description: "Lubina salvaje, risotto de setas, espuma de parmesano", tags: [] },
      { name: "Solomillo de Res", price: 46, description: "Solomillo 200g, patatas bravas, chimichurri, reducción de balsámico", tags: [] },
      { name: "Risotto de Setas", price: 28, description: "Setas silvestres, trufa negra, parmesano añejo, aceite de hierbas", tags: ["V"] },
    ]
  },
  {
    id: "postres",
    title: "Postres",
    items: [
      { name: "Tarta de Chocolate", price: 12, description: "72% cacao, ganache, helado de vainilla, caramelo salado", tags: [] },
      { name: "Tiramisú con Toque Local", price: 10, description: "Café de origen, mascarpone, ron añejo, cacao", tags: [] },
      { name: "Pannacotta de Maracuyá", price: 10, description: "Crema italiana, coulis tropical, frutos rojos frescos", tags: [] },
      { name: "Tabla de Frutas de Temporada", price: 14, description: "Selección de mercado, yogur griego, granola casera", tags: ["GF", "V"] },
    ]
  },
  {
    id: "bebidas",
    title: "Bebidas",
    items: [
      { name: "Cóctel de Bienvenida", price: 12, description: "Espumoso local, frutas tropicales, hierbas aromáticas", tags: [] },
      { name: "Vino de la Casa", price: 8, description: "Copa $8 / Botella $35 - Selección curada del sommelier", tags: [] },
      { name: "Agua con Gas / Natural", price: 4, description: "Botella 750ml", tags: [] },
      { name: "Café de Origen", price: 4, description: "Preparación V60 o espresso", tags: [] },
    ]
  }
];

export function Menu() {
  const [activeTab, setActiveTab] = useState(menuData[0].id);

  return (
    <section id="menu" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
        <div className="text-center mb-16 space-y-4">
          <span className="text-primary font-semibold tracking-widest uppercase text-sm">Gastronomía</span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground">Nuestro Menú</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">Una selección curada de sabores intensos y texturas sorprendentes.</p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-8 mb-12">
          {menuData.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`text-sm md:text-base font-semibold tracking-widest uppercase py-2 px-4 border-b-2 transition-colors ${
                activeTab === cat.id 
                  ? "border-primary text-primary" 
                  : "border-transparent text-foreground/60 hover:text-foreground"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10"
            >
              {menuData.find(c => c.id === activeTab)?.items.map((item, idx) => (
                <div key={idx} className="flex flex-col border-b border-border/50 pb-6 group">
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                      {item.name}
                      {item.tags.map(tag => (
                        <span key={tag} className="inline-block bg-muted text-[10px] px-1.5 py-0.5 rounded font-sans text-foreground/70" title={tag === 'GF' ? 'Sin Gluten' : 'Vegetariano'}>
                          {tag}
                        </span>
                      ))}
                    </h3>
                    <span className="font-display text-xl font-bold text-primary shrink-0 ml-4">${item.price}</span>
                  </div>
                  <p className="text-foreground/70 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 text-sm text-foreground/60">
            <span className="flex items-center gap-1"><span className="bg-muted text-[10px] px-1.5 py-0.5 rounded font-bold">GF</span> Sin Gluten</span>
            <span className="flex items-center gap-1"><span className="bg-muted text-[10px] px-1.5 py-0.5 rounded font-bold">V</span> Vegetariano</span>
          </div>
        </div>
      </div>
    </section>
  );
}
