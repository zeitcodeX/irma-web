// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // El ID 'tutorialSidebar' es el que estamos usando por defecto en docusaurus.config.js
  tutorialSidebar: [
    'index', // Apunta a /docs/index.mdx

    // === CATEGORÍAS CON LOS NOMBRES DE ARCHIVO CORRECTOS ===
    {
      type: 'category',
      label: 'Sobre Irma y su Tecnología', // El título que se ve en el menú
      collapsible: true, // Permite que se pueda abrir y cerrar
      collapsed: false, // Hace que aparezca ABIERTA por defecto
      items: [
        // El ORDEN de estos elementos define el ORDEN en el menú
        'tecnologia', 
        'diferencia-con-bots-tradicionales',
        'para-quien-es', 
        'integraciones', 
      ],
    },
    {
      type: 'category',
      label: 'Personalización',
      collapsible: true,
      collapsed: false, // Aparecerá CERRADA por defecto
      items: [
        'personalidad', 
        'limitar-foco',
        'si-no-sabe',
        'reportes-y-analytics',
      ],
    },
    {
      type: 'category',
      label: 'Proceso',
      collapsible: true,
      collapsed: false,
      items: [
        'proceso', 
        'que-necesito-dar', 
        'nuestro-crm',
        'soporte', 
        'casos-de-exito',
      ],
    },
    // NOTA: El archivo 'preguntas-frecuentes.mdx' no existe todavía.
    // Cuando lo crees, puedes añadir la línea 'preguntas-frecuentes' aquí.
  ],
};

export default sidebars;