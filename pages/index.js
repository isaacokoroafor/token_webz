import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import imageUrlBuilder from '@sanity/image-url';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

export default function Home({ posts }) {
  const router = useRouter();
  const [mappedPosts, setMappedPosts] = useState([]);
  
  useEffect(() =>  {
    if (posts.length) {
      const imgBuilder = imageUrlBuilder({
        projectId: 'tq41upk7',
        dataset: 'production',
    });

    setMappedPosts(
      posts.map(p => {
        return {
          ...p,
          mainImage: imgBuilder.image(p.mainImage).width(500).height(250),
        }
      })
    );
    } else {
      setMappedPosts([]);
    }
}, [posts]);

return (
  <div>
  
    <motion.div initial="hidden" animate="visible" className={styles.main} variants={{
      hidden: {
        scale: .8,
        opacity: 0
      },
      visible: {
        scale: 1,
        opacity: 1,
        transition: {
          delay: .4
        }
      },
    }}>
      <h1>Welcome to NZA</h1>
      </motion.div>
      
    <div className={styles.main}>
      <h3>Recent Posts:</h3>
    </div>
    
      <div className={styles.feed}>
        {mappedPosts.length ? mappedPosts.map((p, index) => (
          <motion.div onClick={() => router.push(`/post/${p.slug.current}`)} key={index} className={styles.post}whileHover={{
            scale: 1.2,
            transition: {
              duration: .2
            }
          }}>
            <h3>{p.title}</h3>
            <img className={styles.mainImage} src={p.mainImage} />
          </motion.div>
        )) : <>No Posts Yet</>}
      </div>
  </div>
);
}

export const getServerSideProps = async pageContext => {
  const query = encodeURIComponent('*[ _type == "post" ]');
  const url = `https://tq41upk7.api.sanity.io/v1/data/query/production?query=${query}`;
  const result = await fetch(url).then(res => res.json());

  if (!result.result || !result.result.length ) {
    return {
      props: {
        posts: [],
      }
    }
  } else {
    return {
      props: {
        posts: result.result,
      }
    }
  }
};