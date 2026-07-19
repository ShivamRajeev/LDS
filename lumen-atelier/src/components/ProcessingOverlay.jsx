import { motion } from "framer-motion";
import processingAnimation from "../assets/placeholders/animated-lds-logo.html?raw";

const ProcessingOverlay = () => {
  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[999] flex items-center justify-center bg-brand-black/70 backdrop-blur-sm"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.45, ease: "easeOut", delay: 0.08 }}
    >
      <iframe
        title="Processing"
        srcDoc={processingAnimation}
        className="h-[240px] w-[240px] border-0 bg-transparent"
        scrolling="no"
      />
    </motion.div>
  );
};

export default ProcessingOverlay;