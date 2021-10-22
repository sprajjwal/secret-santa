import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'


export default function Home() {
  return (
    <div className={styles.body}>
      <Head>
        <title>Secret Santa</title>
        <meta name="description" content="Home page for find my secret santa app." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className='bg-dark text-white'>hello</div>
      </main>

      <footer className={styles.footer}>
        <small>
          © Copyright 2019, <a href="mailto:shashwatprajjwal@gmail.com">Shashwat Prajjwal</a>. All Rights Reserved
        </small>
      </footer>
    </div>
  )
}
