import { motion } from "framer-motion";

function FeatureCard({ src, alt, title, description }) {
  return (
    <motion.div
      className="
        w-80
        p-8
        flex flex-col items-center text-center
        shadow-sm
        bg-white/20 backdrop-blur-lg rounded-2xl text-white border
      "
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      
    >
      <div className="w-full bg-gray-50 rounded-2xl p-6 flex justify-center mb-6">
        <img
          src={src}
          alt={alt}
          className="h-40 object-contain"
        />
      </div>

      <h3 className="text-xl font-semibold text-blue-200 mb-3">
        {title}
      </h3>

      <p className="text-amber-100 text-base leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}

export default FeatureCard;
