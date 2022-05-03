import '../styles/globals.scss'
import { motion, AnimatePresence } from 'framer-motion';
import react from 'react';
import Header from '../components/Header';
import Layout from '../components/Layout';
import {Switch, Route } from 'react-router-dom';
import Home from './Home';

function MyApp({ Component, pageProps, router }) {
  return ( 
    <AnimatePresence>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </Layout>
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
