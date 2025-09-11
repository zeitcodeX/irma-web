// En src/components/Columns.js
import React from 'react';
import styles from './Columns.module.css';

export default function Columns({ cols = 2, children }) {
  return (
    <div
      className={styles.columns}
      style={{ '--cols': cols }} // Pasamos el número de columnas como una variable CSS
    >
      {children}
    </div>
  );
}