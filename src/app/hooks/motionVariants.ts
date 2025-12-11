
import {Variants} from "framer-motion"


export const cardVariants: Variants = {
  offscreen: { opacity: 0, y: 20 },
  onscreen: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.45, delay: i * 0.06, ease: "easeOut" } }),
  hover: { y: -8, scale: 1.02, transition: { duration: 0.22 } },
};