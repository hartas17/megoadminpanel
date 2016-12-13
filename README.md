# megoadminpanel
Comunicación serial  y manejo de websockets para el despliegue de datos de forma gráfica desde un servidor NodeJS.

NOTA: Para ejecutar la aplicacion es necesario conocer el puerto serial que se configura cuando se conecta la placa MeGo (o cualquier placa de Arduino) a la PC, este puerto va a servir para configurar la aplicacion para decirle en que terminal se pondra en espera de los datos.

# Ejecutar aplicacion:

1. Clonar repositorio dentro de un directorio de trabajo.

```
git clone https://github.com/noubyte/megoadminpanel.git
```

2. Instalar dependencias (asegurate de tener instalado npm).

Dentro de la raiz del proyecto, ejecutar:

```
$ npm install
```

3. Configura el archivo index.js, con el nombre del puerto en el que se encuentra conectado la placa MeGo: 

```
$ var port_name = "YOUR_PORT_NAME"
```

4. Ejecuta la aplicacion.

```
$ npm start
```

5. Visualiza la salida de la aplicacion desde tu navegador web, escribiendo en la caja de texto, la URL:

```
http://localhost:8080
```
