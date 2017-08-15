#EXAMEN 
## VentaPizza

#login
ingresar con este usuario

correo : jonathan.pachacama@epn.edu.ec

password: 12345
#crear nueva pizza
```
http://localhost:1337/Pizza/create?nombrePizza=<nombreDeLaPizza>
```

#crear nuevo ingrediente
```
http://localhost:1337/Ingredientes/create?nombreIngrediente=<nombreDelIngrediente>
```

  #crear nuevo Usuario
```
http://localhost:1337/Usuario/create?nombres=<nuevoNombre>&apellidos=<nuevoApellido>&correo=<nuevoCorreo>&password=<nuevoPassword>
```




# Comandos Sails

[Ir documentacion sails cli](http://sailsjs.com/documentation/reference/command-line-interface)
## sails new

el comando **new** nos ayuda a crear un nuevo proyecto de **sails**.


```
>> sails new Aplicacion
```

Donde  **Aplicacion** es el nombre de la carpeta
 y de la aplicacion que vamos a crear
 
 
 ## sails lift
 
 el comando **lift** nos ayuda a levantar 
 nuevo proyecto de **sails**.

 
 
 ```
 >> sails lift
 ```
 
- Debemos de estar **dentro de la carpeta** del proyecto de sails

- Sails nos pregunta algunas opciones, vamos a escoger por defecto la 
**opcion 2**  si tenemos versions de sail menores de las v11


## sails generate api
 

 
 
 ```
 >> sails generate api <nombreDelModelo>
 ```
 
- Debemos de estar **dentro de la carpeta** del proyecto de sails

- crea los modelos

## sails generate controller 

```
>> sails generate controller <nombreControlador>
```
- Debemos de estar **dentro de la carpeta** del proyecto de sails

