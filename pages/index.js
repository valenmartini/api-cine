import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>APIs - Cine y Destinos</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>APIs Disponibles</h1>

        <p className={styles.description}>
          Explora nuestras APIs:
        </p>

        <div style={{ textAlign: "left", maxWidth: "600px", margin: "0 auto" }}>
          <h2>🎬 Películas</h2>
          <p><code>/api/peliculas</code> - Lista de películas disponibles</p>

          <h2>🎞️ Funciones</h2>
          <p><code>/api/funciones</code> - Horarios y salas de cine</p>

          <h2>✈️ Destinos</h2>
          <p><code>/api/destinos</code> - 20 destinos de Latinoamérica Sur</p>
          <p style={{ fontSize: "14px", color: "#666" }}>
            Parámetros: <code>page</code> (default: 1), <code>limit</code> (default: 5, máx: 20)
          </p>
          <p style={{ fontSize: "14px", color: "#666" }}>
            Ejemplo: <code>/api/destinos?page=1&limit=10</code>
          </p>

          <h2>💬 Comentarios</h2>
          <p><code>/api/comentarios</code> - Comentarios sobre destinos</p>
          <p style={{ fontSize: "14px", color: "#666" }}>
            Parámetro opcional: <code>idDestino</code> para filtrar por destino
          </p>
          <p style={{ fontSize: "14px", color: "#666" }}>
            Ejemplo: <code>/api/comentarios?idDestino=1</code>
          </p>
        </div>
      </main>
    </div>
  );
}
