import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

function HomepageContent() {
  return (
    <main className={styles.mainContainer}>
      <div className="container">
        {/* -- Contenedor para las dos cajas de anuncios -- */}
        <div className={styles.announcementContainer}>
          <div className={styles.announcementBox}>
            <h2 className={styles.announcementTitle}>Documentación</h2>
            <p>
              Encontrá toda la información útil, guías y preguntas frecuentes para sacar el máximo provecho de tu asistente IA.
            </p>
          </div>
          <div className={styles.announcementBox}>
            <h2 className={styles.announcementTitle}>Próximamente: Nuestro Blog</h2>
            <p>
              Información sobre upgrades, lanzamientos, eventos y temas relacionados a la venta por medios digitales y la atención al cliente.
            </p>
          </div>
        </div>

        {/* -- VIDEO DEMO -- */}
        <div className={styles.videoContainer}>
          <div className={styles.videoPlaceholder}>
            <span>Video Demo: Próximamente</span>
          </div>
        </div>

        {/* -- BOTÓN -- */}
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/documentacion">
            Empezar a Explorar
          </Link>
        </div>
      </div>
    </main>
  );
}

export default function Home() {
  return (
    <Layout
      title="Bienvenido"
      description="Documentación oficial de IRMA. Encuentra guías, tutoriales y preguntas frecuentes.">
      <HomepageContent />
    </Layout>
  );
}



