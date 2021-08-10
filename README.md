# Proyecto_DW_F2

---

## Índice

1. [Mockups de la Aplicación](#id1)
2. [Instalación de Webpack, Web Dev Server y Babel](#id2)
3. [Instalación de Bootstrap](#id3)

## Mockups de de la Aplicación<a name="id1"></a>

---

## Instalación de Webpack, Web Dev Server y Babel<a name="id2"></a>

Como primer paso, vamos a tener la siguiente estructura de nuestro proyecto:

![estructura_del_proyecto](./assets/01.jpg)

Inicialicaremos npm en nuestro proyecto para poder tener nuestro package.json con el comando:

```text
npm i -D webpack webpack-cli html-webpack-plugin
```

Este comando nos dejará como resultado un json en el que tendremos la estructura base del proyecto
(información del proyecto, scripts, dependencias, etc.).

Creamos un nuevo archivo en la raíz, al cual llamaremos `webpack.config.js`, en el cual definiremos el input
y el output:

![webpack_config](./assets/02.JPG)

Importamos el plugin HtmlWebpackPlugin para poder usar HTML en el proyecto y lo agregamos a la parte de plugins:

![html_plugin](./assets/03.JPG)

Cabe recalcar que le indicamos cual es el HTML de entrada, además de indicarle nombre del template que estará creando
Como le indicamos que usará un `index.html`, lo creamos dentro de la carpeta src, el cual tendrá un estructura básica,
tal cual como esta:

![html_index](./assets/04.JPG)
