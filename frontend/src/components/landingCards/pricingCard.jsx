import { motion } from "framer-motion";

function PricingCard({
  title,
  price,
  period,
  subtitle,
  features,
  buttonText,
  popular = false,
  gradient = false,
}) {
  return (
    <motion.div
      className={`
        relative w-80 p-8 rounded-3xl
        ${gradient
          ? "bg-gradient-to-br from-emerald-500 to-blue-900 text-white"
          : "bg-white text-gray-900"}
        shadow-lg
      `}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {popular && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-black px-4 py-1 text-sm font-semibold rounded-full">
          Most Popular
        </span>
      )}
      <h3 className="text-xl font-semibold text-center">{title}</h3>

      <div className="text-center mt-4">
        <span className="text-5xl font-bold">
          ${price}
        </span>
        {period && <span className="text-lg">/{period}</span>}
      </div>

      <p className={`text-center mt-3 ${gradient ? "text-white/80" : "text-gray-600"}`}>
        {subtitle}
      </p>

      <ul className="mt-8 ">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3">
            <span className="text-green-400 text-lg">✓</span>
            <span className={gradient ? "text-white" : "text-gray-700"}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <button
        className={`
          w-full mt-8 py-3 rounded-lg font-semibold transition cursor-pointer 
          transform transition-transform duration-300 ease-out hover:scale-105
          ${gradient
            ? "bg-white text-blue-600 hover:bg-gray-100"
            : "bg-gray-900 text-white hover:bg-gray-800"}
        `}
      >
        {buttonText}
      </button>
    </motion.div>
  );
}

export default PricingCard;
