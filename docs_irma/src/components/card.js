// En src/components/Card.js
import React from 'react';
import Link from '@docusaurus/Link'; // Importante para links internos
import clsx from 'clsx'; // Utilidad para unir clases condicionalmente
import styles from './Card.module.css';

export default function Card({ title, icon, href, horizontal, children }) {
  const isLink = href;

  const cardContent = (
    <div className={clsx(styles.card, horizontal && styles.horizontal)}>
      {icon && (
        <div className={styles.iconContainer}>
          <i className={`fa-solid fa-${icon}`}></i>
        </div>
      )}
      <div className={styles.content}>
        {title && <h3>{title}</h3>}
        <div>{children}</div>
      </div>
    </div>
  );

  return isLink ? (
    <Link to={href} className={styles.link}>
      {cardContent}
    </Link>
  ) : (
    cardContent
  );
}