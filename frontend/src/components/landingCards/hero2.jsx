import { motion } from "framer-motion";
import { useState } from "react";

const LayoutBox = ({question, answer}) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      layout
      onClick={() => setOpen(!open)}
      className="w-80 lg:w-11/12 bg-white rounded-xl shadow-lg p-4 cursor-pointer"
    >
      <h3 className="font-semibold">{question}</h3>

      {open && (
        <motion.p layout className="mt-2 text-gray-600">
          {answer}
        </motion.p>
      )}
    </motion.div>
  );
};

export default LayoutBox;
