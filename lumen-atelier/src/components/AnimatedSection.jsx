import { motion } from "framer-motion";

const AnimatedSection = ({
  children,
  className = "",
  delay = 0,
  once = true,
  as = "section",
}) => {
  const Tag = motion[as] || motion.section;

  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </Tag>
  );
};

export default AnimatedSection;
