// src/components/FeatureGrid.jsx
import { motion } from "framer-motion";

const features = [
  { img: "imgG1.jpg", title: "Essential", subtitle: "Connect", animation: "left" },
  { img: "imgG2.jpg", title: "Crown", subtitle: "Luxe", animation: "top" },
  { img: "imgG3.jpg", title: "Circle", subtitle: "Connect", animation: "right" },
  { img: "imgG4.jpg", title: "Maxi", subtitle: "View", animation: "left" },
  { img: "imgG5.jpg", title: "AMOLED", subtitle: "Vivid Vision", animation: "bottom" },
  { img: "imgG6.jpg", title: "Custom", subtitle: "Feature", animation: "right" },
];

// Animation variants
const variants = {
  left: { hidden: { opacity: 0, x: -100 }, visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 100 }, visible: { opacity: 1, x: 0 } },
  top: { hidden: { opacity: 0, y: -100 }, visible: { opacity: 1, y: 0 } },
  bottom: { hidden: { opacity: 0, y: 100 }, visible: { opacity: 1, y: 0 } },
};

export default function FeatureGrid() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={variants[feature.animation]}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative overflow-hidden rounded-xl shadow-lg group"
          >
            <img
              src={feature.img}
              alt={feature.title}
              className="w-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center text-white p-4">
              <h3 className="text-2xl font-bold">{feature.title}</h3>
              <p className="text-lg">{feature.subtitle}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
