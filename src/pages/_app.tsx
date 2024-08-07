import '@/styles/globals.css'
import '../styles/globals.css'
import { AppProps } from 'next/app';
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={router.route}
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{
          duration: 0.50,
        }}
        variants={{
          initialState: {
            opacity: 0,
            clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
          },
          animateState: {
            opacity: 1,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          },
          exitState: {
            opacity: 0,
            clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
          },
        }}
        className="base-page-size"
      >
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  );
}
