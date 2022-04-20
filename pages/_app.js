import '../styles/globals.scss'
import { motion, AnimatePresence } from 'framer-motion';
import react from 'react';
import Header from '../components/Header';

function MyApp({ Component, pageProps, router }) {
  return ( 
    <AnimatePresence>
      <>
      <Header />
      </>
      <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" exit="pageExit" variants={{
        pageInitial: {
          opacity: 0
        },
        pageAnimate: {
          opacity: 1
        },
        pageExit: {
          backgroundColor: 'white',
          opacity: 0
        }
      }}>
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>

  )
}

export default MyApp
