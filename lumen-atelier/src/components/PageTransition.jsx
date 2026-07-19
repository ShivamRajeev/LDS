import { motion } from "framer-motion";
import ProcessingOverlay from "./ProcessingOverlay";

const PageTransition = ({ children }) => {
  return (
    <>
      <ProcessingOverlay />
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.35, ease: [0.33, 1, 0.68, 1] }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default PageTransition;
