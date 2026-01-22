import { motion } from "framer-motion";

const ImageSection = ({ src, alt }) => {
  return (
    <div className="w-full flex justify-center mt-10 px-4">
      <motion.img
        src={src}
        alt={alt}
        className="
          max-w-5xl w-full
          rounded-2xl
          shadow-2xl
          lg:w-8/12
        "
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      />
    </div>
  );
};

export default ImageSection;
