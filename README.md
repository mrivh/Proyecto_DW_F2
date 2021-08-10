# Proyecto_DW_F2

---

## Índice

1. [Mockups de la Aplicación](#id1)
2. [Instalación de Webpack, Web Dev Server y Babel](#id2)
3. [Instalación de Bootstrap](#id3)

## Mockups de de la Aplicación<a name="id1"></a>

---

## Instalación de Webpack, Web Dev Server y Babel<a name="id2"></a>

### Instalación de Webpack

Como primer paso, vamos a tener la siguiente estructura de nuestro proyecto:

![estructura_del_proyecto](./assets/01.jpg)

Inicialicaremos npm en nuestro proyecto para poder tener nuestro package.json con el comando:

```text
npm init -y
```

Este comando nos dejará como resultado un json en el que tendremos la estructura base del proyecto
(información del proyecto, scripts, dependencias, etc.).

Instalaremos las librería que nos dejaran comenzar a trabajar con Webpack, ademas de que le indicaremos que
son dependencias de desarrollo con el flag `-D`

```text
npm i -D webpack webpack-cli html-webpack-plugin
```

Creamos un nuevo archivo en la raíz, al cual llamaremos `webpack.config.js`, en el cual definiremos el input
y el output:

![webpack_config](./assets/02.JPG)

Importamos el plugin HtmlWebpackPlugin para poder usar HTML en el proyecto y lo agregamos a la parte de plugins:

![html_plugin](./assets/03.JPG)

Cabe recalcar que le indicamos cual es el HTML de entrada, además de indicarle nombre del template que estará creando

Como le indicamos que usará un `index.html`, lo creamos dentro de la carpeta src, el cual tendrá un estructura básica,
tal cual como esta:

![html_index](./assets/04.JPG)

En el archivo `package.json` creamos un apartado para los scripts, en el, insertamos un nuevo script con el comando
`"build": "webpack --mode production"`, este será para generar el bundle de webpack.

![scripts_01](./assets/05.JPG)

### Instalación de Web Dev Server

Vamos a instalar las dependencias de desarrollo para Web Dev Server con el siguiente comando:

```text
npm i -D webpack-dev-server
```

Como siguiente paso, agregamos las dependencias al config de Webpack:

![web_dev](./assets/06.JPG)

Le estamos indicando con `contentBase` indicamos la carpeta en la que se va a iniciar el server local con `__dirname` y
con `dist`, indicamos la carpeta del código final para la distribución.

También agregamos el script nuevo para iniciar el server local:

![webdev_script](./assets/07.JPG)

Este comando nos deja iniciar el server, y se abrirá un archivo en el navegador predeterminado, siempre que hagamos un cambio,
lo veremos reflejado automaticamente.

### Instalación de Babel

Instalamos las dependencias de Desarrollo de Babel en el proyecto:

```text
npm i -D @babel/core @babel/preset-env babel-loader
```

Agregamos el loader necesario para poder trabajar con las dependencias:

![loader_babel](./assets/08.JPG)

En este loader, indicamos que cada vez que babel encuentre un archivo JavaScript, pasará por Babel, excluyendo la carpeta `node_modules`.

Creamos un archivo nuevo en la raíz, llamado `babel.config.json`, en el que indicaremos el preset que vamos a usar:

![config_babel](./assets/09.JPG)
