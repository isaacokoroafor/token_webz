import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Toolbar } from '../components/toolbar';

export default function Home({ posts }) {
  console.log(posts);
  return (
    <div>
      <Toolbar />
      Hello World
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