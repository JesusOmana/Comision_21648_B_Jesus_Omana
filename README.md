"INTRODUCCION A LA APLICACION DE PUBLIACION"

EL siguiente proyecto tiene la finalidad de manejar un sistema dinamico de posteos, donde el cliente realizaria una publicacion de texto que se carga a una base de datos, posteriormente lo puede usar para modificarlo y volver a subir o simplemente eliminarlo. 

-------------

Para iniciar el proyecto se debe ejecutar o siguiente en el terminal: 

1)npm install node

2)se van a precisar la instalacion de las siguientes npm 

"dependencies": {
    "cors": "^2.8.5",
    "ejs": "^3.1.9",
    "express": "^4.18.2",
    "morgan": "^1.10.0",
    "mysql2": "^3.6.1",
    "sequelize": "^6.33.0"
  },
  "devDependencies": {
    "nodemon": "^3.0.1"
  }

3)instalar XAMPP, posteriormente activar APACHE y Mysql para levantar el servidor

4)van a ir al archivo servidor.js y le van a cambiar el valor al siguiente codigo a TRUE 

sequelize.sync({ force: false });

y despues de que levanten el servidor y funcione el Localhost, vuelven a cambiar el valor a FALSE

esto es para crear 1 sola vez la tabla, y que no se cree una tabla nueva.

5)npm run dev  

Usamos este codigo en la terminal para levantar el localhost y la base de datos


--------Aclaracion; "se trabajo con bootstrap de el link y scrip de CDN Bootstrap"

--------NOTA; soy de la comision Comisión 21648 B que no vio "variables de entorno"