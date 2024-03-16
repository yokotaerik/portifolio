import { motion } from "framer-motion";

const HomeCard = () => {
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div>
      <motion.h1
        className="text-yellow-500 dark:text-rose-500 text-2xl font-bold first px-2"
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ delay: 0.5 }}
      >
        HELLO MY NAME IS ERIK
      </motion.h1>
      <motion.p
        className="text-8xl font-bold second"
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ delay: 0.75 }}
      >
        I&apos;am
      </motion.p>
      <motion.p
        className="text-8xl font-bold third"
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ delay: 1.0 }}
      >
        Software
      </motion.p>
      <motion.p
        className="text-8xl font-bold fourth"
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ delay: 1.25 }}
      >
        Developer
      </motion.p>
      <motion.p
        className="text-4xl font-semibold mt-16 dark:text-cyan-500 last"
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ delay: 1.5 }}
      >
        Materializing your aspirations through the wizardry of programming.
      </motion.p>
    </div>
  );
};

export default HomeCard;
