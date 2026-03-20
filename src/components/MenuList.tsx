"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import restaurantData from "../data/restaurant.json";

export default function MenuList() {
  const { menu } = restaurantData;

  return (
    <section id="menu" className="py-24 md:py-32 px-6 lg:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-20"
      >
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[var(--color-boutique-ink)] mb-4">
          La Nostra Cucina
        </h2>
        <div className="w-16 h-px bg-[var(--color-boutique-accent)] mx-auto mb-10"></div>
        <p className="font-sans font-light opacity-70 tracking-widest uppercase text-sm">A Experiência Autêntica</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-16 gap-y-20 items-start">
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {menu.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: catIndex * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="flex flex-col gap-10"
            >
              <h3 className="font-serif text-2xl text-[var(--color-boutique-accent)] uppercase tracking-widest border-b border-[var(--color-boutique-surface)] pb-4">
                {category.category}
              </h3>
              
              <div className="flex flex-col gap-8">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="group">
                    <div className="flex justify-between items-baseline mb-2">
                      <h4 className="font-sans font-semibold text-lg text-[var(--color-boutique-ink)] tracking-wide group-hover:text-[var(--color-boutique-accent)] transition-colors">
                        {item.name}
                      </h4>
                      <span className="font-serif text-lg text-[var(--color-boutique-accent)] ml-4">
                        {item.price}€
                      </span>
                    </div>
                    <p className="font-sans font-light text-[var(--color-boutique-ink)] opacity-70 leading-relaxed text-sm pr-4">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="lg:col-span-5 relative w-full h-[600px] lg:h-[800px]"
        >
          <Image
            src="/images/foto_pizza.png"
            alt="Pizza de Assinatura La Signora"
            fill
            className="object-cover rounded-t-full rounded-b-sm border-8 border-[var(--color-boutique-surface)] shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
