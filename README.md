# Esto es Challenge

# Objetivo

El objetivo del presente trabajo es realizar una plataforma que que tiene como objetivo realizar la gestión de proyectos.

# Definición funcional

El usuario accede a un administrador de proyectos para realizar la gestión, puede crearlos, editarlos y eliminarlos.

- El usuario no puede submitear la creación o edición de un proyecto si los campos no están validados.
- El usuario debe poder utilizar el gestor en Desktop y Mobile.
- El listado de proyectos debe estar paginado
- El eliminar proyecto debe tener un modal que sugiera si esta seguro de realizar la acción o no
- El listado de proyectos debe tener un buscador de la lista por nombre de proyecto

# **Descripción técnica**

La aplicación fue realizada en angular 11 y TaildwindCSS para el frontend. Para el backend se utilizo NodeJs y Express. El front fue subido a firebase y el back a heroku.

# Preview App

Lista de proyectos y menu de opciones

![pantallas1-2](https://github.com/facundonaraujo/estoes/raw/master/src/assets/screens/pantallas1-2.jpg)

Pantalla para crear y editar el proyecto

![pantallas3-4](https://github.com/facundonaraujo/estoes/raw/master/src/assets/screens/pantallas3-4.jpg)

Modal para confirmar la creación/eliminación del proyecto 

![pantallas5-6](https://github.com/facundonaraujo/estoes/raw/master/src/assets/screens/pantallas5-6.jpg)

Realizar Búsqueda del proyecto

![pantallas7](https://github.com/facundonaraujo/estoes/raw/master/src/assets/screens/pantallas7.jpg)

# Anexo

## APIS

### ProjectsService

- Usuarios:GET [https://desafioestoesbackend.herokuapp.com/api/usuarios](https://desafioestoesbackend.herokuapp.com/api/usuarios)
- Projects:POST [https://desafioestoesbackend.herokuapp.com/api/projects](https://desafioestoesbackend.herokuapp.com/api/projects)
- Project:PUT [https://desafioestoesbackend.herokuapp.com/api/project/](https://desafioestoesbackend.herokuapp.com/api/project/)`idproject`
- Project:DELETE [https://desafioestoesbackend.herokuapp.com/api/project/](https://desafioestoesbackend.herokuapp.com/api/projec/t)`idproject`
- Project:POST [https://desafioestoesbackend.herokuapp.com/api/project/](https://desafioestoesbackend.herokuapp.com/api/project/)`idproject`
- Project:GET [https://desafioestoesbackend.herokuapp.com/api/project/](https://desafioestoesbackend.herokuapp.com/api/project/)`idproject`

## Links

- **FRONTEND:**  [https://desafioestoes.web.app/projects](https://desafioestoes.web.app/projects)
- **BACKEND:**  [https://desafioestoesbackend.herokuapp.com/api](https://desafioestoesbackend.herokuapp.com/api/projects)

## Running

Run `npm start`for a dev server. Navigate to [http://localhost:4200/](http://localhost:4200/). The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI](https://angular.io/cli) Overview and Command Reference page.
