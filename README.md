# Esto es Challenge

# Objetivo

El objetivo del presente trabajo es realizar una plataforma que que tiene como objetivo realizar la gestión de proyectos.

# Definición funcional

El usuario accede a un administrador de proyectos para realizar la gestión, puede crearlos, editarlos y eliminarlos.

- El usuario no puede submitear la creación o edición de un proyecto si los campos no están validados.
- El usuario debe poder utilizar el gestor en Desktop y Mobile.

# Definiciones extras que no están en el diseño

- El listado de proyectos puede tener un paginado
- El eliminar puede tener un modal que sugiera si esta seguro de realizar la acción o no
- El listado de proyectos puede tener un buscador de la lista por nombre de proyecto

# **Definiciones técnicas**

- Debe estar realizado en un framework de JS, Angular o React.
- La aplicación debe estar publicada y debe ser accesible mediante un link(Ver Netlify, Heroku) o cualquier webserver.
- El código de la aplicación debe estar subida a un repositorio de público acceso.

# **Descripción técnica**

La aplicación fue realizada en angular 11 para el frontend. Para el backend se utilizo NodeJs y Express. El front fue subido a firebase y el back a heroku.

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
