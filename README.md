# PersephoneCSS
Framework CSS con SASS, inspirado en una temática floral enfocada en peonias.

## Descripción

**PersephoneCSS** es un framework desarrollado bajo la metodología *Mobile First* y arquitectura SASS modular. Su objetivo es proporcionar a los desarrolladores una herramienta estética y funcional para la creación de interfaces web armónicas, utilizando un sistema de rejilla flexible de 12 columnas y componentes estilizados con tonos tierra y florales.

## Paleta de Colores Oficial

Nuestro framework utiliza una lógica de nombres semánticos para facilitar el diseño. A continuación se detalla la paleta oficial inspirada en peonias y tonos naturales:

| Variable | Hexadecimal | Nombre | Uso |
| :--- | :---: | :--- | :--- |
| `$primary` | `#BB8588` | Peach Blossom | Color principal de marca |
| `$secondary` | `#4E5748` | Moss Dark | Contrastes y elementos secundarios |
| `$success` | `#6E8F6B` | Sage Green | Estados de éxito |
| `$info` | `#7FA6A0` | Dusty Teal | Información y ayuda |
| `$warning` | `#D1A85C` | Amber Clay | Advertencias y precaución |
| `$danger` | `#D36B6B` | Terracotta Red | Errores y acciones destructivas |
| `$light` | `#EFEBCE` | Arctic Daisy | Fondos claros |
| `$alert` | `#E85C5C` | Poppy Alert | Avisos urgentes |
| `$dark` | `#2F332B` | Forest Shadow | Fondos oscuros y texto |
| `$accent` | `#D8A39D` | Blush Petal | Detalles decorativos |
| `$muted` | `#B8B2A0` | Stone Petal | Texto y elementos desactivados |

> **Nota técnica:** Los colores de texto y contraste se resuelven mediante lógica SASS con `@if` y `list.index()`. Para la modificación de colores se utiliza el módulo `sass:color` a través de la función `color.adjust()`, lo que garantiza compatibilidad con versiones actuales de SASS y un control preciso sobre la luminosidad de cada color.

## Lista de Integrantes

- Juliana Mariselda Torres Chavarría — TC23011
- Fabiola Alexandra Romero Amaya — RA23033

## Versión Actual

`v3.0.0`

## Guía Rápida de Instalación

1. Descarga o clona el repositorio:
   ```bash
   git clone https://github.com/AlexandraRA23033/PersephoneCSS.git
   ```
2. Vincula el archivo CSS compilado en tu HTML:
   ```html
   <link rel="stylesheet" href="../css/main.css"/>
   ```
3. Agrega el JavaScript si necesitas componentes interactivos (navbar, modales y sidebar):
   ```html
   <script src="main.js"></script>
   ```

### Compilar desde fuente

Si deseas modificar el framework, necesitas Node.js y SASS instalados:

```bash
# Instalar SASS globalmente
npm install -g sass

# Compilar una vez
sass scss/main.scss css/main.css

# Modo observador (recompila automáticamente al guardar)
sass --watch scss/main.scss:css/main.css
```