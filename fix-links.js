import fs from "fs";
import path from "path";

const FAQ_DIR = path.join(process.cwd(), "FAQ");

// Procesar todos los archivos HTML dentro de FAQ
function fixHtmlFiles(dir) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      fixHtmlFiles(filePath); // recursion para subcarpetas
    } else if (file.endsWith(".html")) {
      let content = fs.readFileSync(filePath, "utf-8");

      // 1. Corregir rutas de _next
      content = content.replace(/(href|src)="\/?_next\//g, '$1="./_next/');

      // 2. Corregir links internos -> ../FAQ/
      content = content.replace(
        /href="(?!https?:|mailto:|#|\.|\/)([^"]+)"/g,
        'href="../FAQ/$1"'
      );

      fs.writeFileSync(filePath, content, "utf-8");
      console.log(`✅ Arreglado: ${filePath}`);
    }
  });
}

fixHtmlFiles(FAQ_DIR);
console.log("🚀 Todos los HTML fueron actualizados.");
