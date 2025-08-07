Amazon Product Scraper

Este proyecto consiste en una aplicación web que permite buscar productos en Amazon a través de una palabra clave. Se realiza un scraping de la primera página de resultados y se muestra la información de cada producto de forma visual y ordenada.

---

## 📌 Funcionalidades

- Buscar productos en Amazon por palabra clave.
- Extraer automáticamente:
  - Título del producto
  - Rating (estrellas)
  - Cantidad de reseñas
  - Imagen del producto
- Mostrar los resultados con una interfaz clara y amigable.

---

## 🧰 Tecnologías utilizadas

### 🔙 Backend
- [Bun](https://bun.sh/)
- Express
- Axios
- JSDOM

### 🔜 Frontend
- HTML + CSS + JavaScript (Vanilla)
- [Bootstrap 5](https://getbootstrap.com/)
- Vite como bundler

---

## 🚀 Instrucciones para correr el proyecto

### 🖥 Backend (Bun)

1. Ir a la carpeta del backend:

cd amazon-backend

2.Instalar dependencias:

bun install

3. Ejecutar el Servidor:

bun index.ts

Se ejecutará el backend en http://localhost:3000


4. Ejecutar frontend:
npm install
npm run dev


5. Uso:
- Ingresa una palabra clave en el buscador.
- Hacer click en buscar.
- La aplicación hará la solicitud al backend y mostrará los productos extraídos.


Manejo de errores:
- Si la búsqueda no arroja resultados, se muestra un mensaje adecuado.

- Si ocurre un error en el scraping o en la comunicación con Amazon, se informa al usuario en el frontend.

- El backend responde con status HTTP y mensajes claros en caso de fallos.



Notas importantes:
- Este proyecto es solo con fines educativos y demostrativos.

- Amazon puede cambiar su estructura HTML y bloquear accesos automatizados, lo que puede afectar el funcionamiento del scraper.

- Se recomienda usar esta aplicación con responsabilidad y respetar las políticas de uso de Amazon.




Contacto
Cualquier duda o sugerencia, por favor contactar a santireyes4.sr@gmail.com

Gracias por revisar mi postulación. Espero que el proyecto cumpla con las expectativas.
