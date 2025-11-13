                                                       **SENA RULES**
 Sirve como un tablero para ver cuáles son las reglas básicas del SENA que le permite estar pendiente al aprendiz si cumple esas reglas y poder marcar cuáles cumple y cuántas le faltan por cumplir para que el aprendiz esté más atento y tenga algo con el que pueda interactuar.                 
 <hr>
 
**Inicializar un nuevo proyecto React**

```bash
npm create vite@latest mi-app -- --template react
```

-Instalar las dependencias de React dándole "Yes" para la instalación o de forma manual con 

```bash
npm install
```
-Se instala la dependencia de Tailwind desde el gestor de paquetes npm 

```bash
npm install tailwindcss @tailwindcss/vite
```

-Configurar el plugin de Tailwind desde vite.config.js

```bash
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
```

Se exporta en index.css

```bash
@import "tailwindcss";
```
-Se crea una carpeta Componentes en la carpeta src y en esa carpeta se crean los componentes que se van a crear para la app.

-Se inicia el servidor para ver los cambios en la app.

```bash
npm run dev
```
<hr>

**Componentes**

```bash
SearchBar Maneja el estado local del input de búsqueda implementando el filtrado de las tarjetas según lo que el usuario escriba.
Este crea un array el cual se lo envía al padre para que RuleList lo renderice.

RuleCard Es el componente en el cual se va a mostrar la información quecontiene el dataset (title, category y description) y
maneja su propio estado local. Cuando se presiona el botón, el estado cambia y se lo notifica al padre App.

RuleList Es el componente que renderiza el array que recibe de SearchBar (filteredRules) y utiliza el método .map para iterar
y crear instancias de las tarjetas por cada elemento que se encuentra en ese array.

TaskCompleted Recibe el completedCount, calcula y muestra el progreso de las reglas, y cambian de manera dinámica el mensaje y
el color del componente.
```
<hr>

**Estados**

```bash
allRules: Almacena todas las tarjetas sin renderizar.

filteredRules: Lista las normas que se le mostrarán al usuario, pueden ser ya filtradas o sin filtrar.

completedCount: Es un contador numérico que calcula cuántas normas están ya cumplidas.

searchTerm: El texto que el usuario escribe en el input del buscador.

isCompleted: Es el estado; si se presiona el botón cambia el estado específico de la tarjeta.

```
**Propiedades (Props)***

```bash
App pasa filteredRules a RuleList.

RuleList pasa ruleData a cada RuleCard.

App pasa la función onToggleCompliance a RuleList, que a su vez la pasa a RuleCard. Esta es la llave para actualizar el contador global.

```

**Eventos**

```bash
El evento onChange en el input de SearchBar dispara la función handleSearchChange, que filtra los datos y actualiza el estado
filteredRules en App.

El evento onClick en el botón de RuleCard dispara su función local toggleCompliance, la cual llama a la callback onToggleCompliance en App.

```

<hr>

**Decisiones de Diseño**

TaskCompleted:
```bash
Lo crea porque le parece muy útil ya que le muestra al aprendiz cuántas normas ha cumplido y cuántas le faltan por cumplir. Lo hace de una manera
atractiva que muestra al aprendiz un mensaje para que termine de cumplir todas las normas y cuando lo hace lo felicita y cambia de color el componente
haciéndole sentir una satisfacción al usuario al completarlo.
```

Tips 
```bash
Lo cree porque le muestra al aprendiz tips que le sirven para hacer cosas que no hacía o tome un poco de conciencia de que debe seguir los tips que
se le dan, y sirva para que motive a los aprendices a mejorar.
```

Header
```bash
Lo cree porque da los derechos de autor y también permite navegar mejor por la misma página, facilitando la navegación. También para que el aprendiz
pueda visitar la página de Sofía Plus y pueda dirigirse a la página para poder observar todas las normas y que sepa todas las normas que debe cumplir
y que no solo son las 6 reglas que están en la página y que todas las deben seguir.
```
<hr>

**Capturas**

<img width="921" height="515" alt="image" src="https://github.com/user-attachments/assets/9f74af75-1a09-4d8a-b5cb-faa3a58c64f6" />

<img width="921" height="504" alt="image" src="https://github.com/user-attachments/assets/dc61dad5-06e3-475c-9a9b-3a45c6ce3873" />

<img width="921" height="508" alt="image" src="https://github.com/user-attachments/assets/537634e8-9e08-45ef-bc5b-3d5bd96af028" />

<img width="921" height="459" alt="image" src="https://github.com/user-attachments/assets/4bd5279f-961a-4d14-9153-02ea153658ae" />

<img width="921" height="453" alt="image" src="https://github.com/user-attachments/assets/9bcce676-b281-4dbb-8c3f-a6c73037328e" />

<img width="921" height="480" alt="image" src="https://github.com/user-attachments/assets/1db9c221-86ac-4d36-9764-c575f488aa5a" />

<img width="921" height="470" alt="image" src="https://github.com/user-attachments/assets/5a078e81-70e3-4c94-8b23-0c96d219bdbd" />






















