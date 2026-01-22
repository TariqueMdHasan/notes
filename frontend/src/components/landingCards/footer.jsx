import { motion } from "framer-motion";

const columnVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

function Footer() {
  return (
    <footer className="text-white">
      <div className="max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <motion.div
            variants={columnVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
          >
            <h2 className="text-2xl font-bold text-blue-400 mb-4">
              NoteIt
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Smart note-taking for modern productivity. Capture,
              organize, and find your ideas instantly.
            </p>
          </motion.div>

          <motion.div
            variants={columnVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
          >
            <h3 className="text-white font-semibold mb-4">
              PRODUCT
            </h3>
            <ul className="space-y-3">
              {["Features", "Pricing", "Mobile Apps", "Integrations"].map(
                (item) => (
                  <li
                    key={item}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </motion.div>

          <motion.div
            variants={columnVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
          >
            <h3 className="text-white font-semibold mb-4">
              COMPANY
            </h3>
            <ul className="space-y-3">
              {["About", "Blog", "Careers", "Contact"].map(
                (item) => (
                  <li
                    key={item}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </motion.div>

          <motion.div
            variants={columnVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={3}
          >
            <h3 className="text-white font-semibold mb-4">
              SUPPORT
            </h3>
            <ul className="space-y-3">
              {[
                "Help Center",
                "Privacy Policy",
                "Terms of Service",
                "Security",
              ].map((item) => (
                <li
                  key={item}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-white/10  pt-6 flex justify-center items-center">
          <motion.p
            className="text-sm text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            © 2024 NotePro. All rights reserved.
          </motion.p>
        </div>
        <div className="  pt-6 flex justify-center items-center">
          <motion.p
            className="text-sm text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Created by Tarique Hasan
          </motion.p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
