TO TEST THE CODE, PLEASE, GO TO MY NETLIFY URL:

https://main--idyllic-florentine-b9fdfe.netlify.app/


README ES
Explicación del código.

Para empezar, he tomado como referencia el diseño del Figma siguiente; https://www.figma.com/file/FmIcd7edEvkQGysnQljlvy/Seat-Code---Websites---FE?type=design&node-id=11-2&mode=design&t=RbGTdJwqtWb9c4Cl-0.

Requerimientos:
1. Use Less to create styles, compile Less files to locally generate CSS, and add
them to the project.
2. Less/CSS code must be writen using BEM metodologhy.
3. JavaScript must be written in Vanilla (No jQuery, React ...).
4. Use HTML5 and CSS3.
5. Third-party libraries are permited, Use CDNJS for include it.
6. Responsive: The given prototype is designed for mobile, but it should be
responsive Mobile First. For example, on desktop screens, the product grid
may change to 4 columns.

Entorno de trabajo: 
- Instalación de NODE.JS v16.13.2
- Como entorno de desarrollo he utilizado VS Code.
- Compilador de Less a CSS, ya que HTML no puede leer less directamente.

Como estructura, he seleccionado la clásica estructura de carpetas js/css/images. En este caso no he utilizado fuentes locales, ya que he preferido importar la Roboto de la librería de Google directamente.
Para el estilado, he utlizado el preprocesador LESS, que compila a CSS. He tomado como decisión crear un archivo .less por cada componente necesario, para no sobrecargar el archivo principal y facilitar su depuración.

CSS / COMPONENTS / LESS
CSS / DIST / STYLES.CSS
CSS / STYLES.LESS

JS / SCRIPTS.JS

IMAGES/ REQUIRED ASSETS

En cuanto a las imágenes, por temas de tiempo, el equipo de diseño no me ha podido enviar las imágenes correctas para el header, así que he improvisado realizado una composición usando The Gimp que quedara al menos similar a la utilizada en el diseño.

LIBRERÍAS USADAS

He incluido la librería SWIPER.js(https://swiperjs.com/) para la realización del slider de productos, librería con la cual me encuentro familiarizada. El script que inicializa la animación se encuentra en scripts.js

Extras
A pesar de que no estaba en el requerimiento, me he dado cuenta que en el Figma los CTAs no tienen ningún efecto ni de hover ni de al hacer clic sobre ellos, por tanto he añadido primero un efecto de sombreado en el hover y, además, una función de abrir un pequeño modal al hacer 
click en cualquier CTA (el mismo en todos los casos y sin funcionalidad).

Por otro lado, al pensar el diseño del menú de footer en mobile, he visto que el número de opciones presentes es my amplia, algo que puede afectar a la interacción asi que he optado por lo siguiente:

- Los elementos que si o sí deben estar presentes como son Terms of use, Privacy policy, Contact us quedan en la parte inferior en el footer y el resto de elementos los he trasladado a un menú hamburguesa que se despliega de izquierda a derecha.
- No aparece tampoco en el diseño, pero en los enlaces que aparecen en la parte superior del diseño (home, feature, pricing) los he considerado como anclas, y cuando se hace scroll y desaparecen del viewport, aparece un menú sticky en su lugar.

README ENG
Explanation of the code.

To begin with, I have taken the following Figma design as a reference; https://www.figma.com/file/FmIcd7edEvkQGysnQljlvy/Seat-Code---Websites---FE?type=design&node-id=11-2&mode=design&t=RbGTdJwqtWb9c4Cl-0.

Requirements:
1. Use Less to create styles, compile Less files to locally generate CSS, and add
them to the project.
2. Less/CSS code must be writen using BEM metodologhy.
JavaScript must be written in Vanilla (No jQuery, React ...).
4. Use HTML5 and CSS3.
5. Third-party libraries are allowed, Use CDNJS for include it.
6. Responsive: The given prototype is designed for mobile, but it should be
responsive Mobile First. For example, on desktop screens, the product grid may change to 4 columns.
may change to 4 columns.

Working environment: 
- NODE.JS v16.13.2 installation.
- As development environment I used VS Code.
- Less to CSS compiler, since HTML cannot read less directly.

As structure, I have selected the classic js/css/images folder structure. In this case I did not use local fonts, as I preferred to import the Roboto from the Google library directly.
For styling, I used the LESS preprocessor, which compiles to CSS. I have decided to create a .less file for each component needed, so as not to overload the main file and to facilitate its debugging.

CSS / COMPONENTS / LESS
CSS / DIST / STYLES.CSS
CSS / STYLES.LESS

JS / SCRIPTS.JS

IMAGES/ REQUIRED ASSET

MAGES/ REQUIRED ASSETS

As for the images, due to time issues, the design team couldn't send me the right images for the header, so I improvised a composition using The Gimp to be at least similar to the one used in the design.

LIBRARIES USED

I have included the SWIPER.js library (https://swiperjs.com/) for the realization of the product slider, library with which I am familiar. The script that initializes the animation is in scripts.js.

Extras
Although it was not in the requirement, I realized that in Figma the CTAs do not have any effect neither hover nor click on them, therefore I have added first a shading effect on the hover and, in addition, a function to open a small modal when clicking on any CTA (the same in all cases and without functionality). 
click on any CTA (the same in all cases and without functionality).

On the other hand, when thinking about the design of the footer menu in mobile, I have seen that the number of options present is very large, something that can affect the interaction so I have opted for the following:

- The elements that must be present such as Terms of use, Privacy policy, Contact us remain at the bottom of the footer and the rest of the elements I have moved them to a hamburger menu that scrolls from left to right.
- It does not appear in the design either, but in the links that appear at the top of the design (home, feature, pricing) I have considered them as anchors, and when you scroll and they disappear from the viewport, a sticky menu appears in their place.

