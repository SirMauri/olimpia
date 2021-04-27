import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Olimpia</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>
          Pasos para denuncia Olimpia.
        </h1>
        <ol>
          <li>Respira, no estas solo. Puedes buscar ayuda psicologica</li>
          <li>Documenta todo lo que recuerdes</li>
          <li>Saca capturas de pantalla y junta evidencia de lo que puedas.</li>
          <li>Protegete cambiando las contrasenas de tus redes sociales</li>
          <li>Procede a hacer la demanda conjunta a ley Olimpia</li>
        </ol>
      </main>
    </div>
  )
}
