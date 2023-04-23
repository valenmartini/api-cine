import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Api de Cine</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Api de Cine</h1>

        <p className={styles.description}>
          Busca en las url /api/funciones o /api/peliculas
        </p>
      </main>
    </div>
  );
}
