# INSTALAR UN PAQUETE

Desde la versión 5 de NPM en adelante, la opción --save es opcional y tendrá el mismo efecto
si se especifica o no.
Automaticamente me instala la última versión

`npm i <nombre del paquete>`
`npm install <nombre del paquete>`

<!-- INSTALAR ULTIMA  VERSION DE OTRA MANERA ó SI YA TENIAMOS INSTALADO UN PAQUETE CON ESE NOMBRE -->
`npm i <nombre del paquete>@latest`

<!-- INSTALAR UNA VERSIÓN EN ESPECIFICO -->

`npm i <nombre del paquete>@<version>`

# INSTALAR MULTIPLES PAQUETES

`npm i <nombre del paquete> <nombre del paquete> <nombre del paquete>`

# INSTALAR UN PAQUETE DE DESARROLLO

CON EL FLAG -D
`npm i  -D <nombre del paquete>`

<!-- -------------------------- -->

# DESINSTALAR UN PAQUETE

`npm uninstall <nombre_del_paquete>`

<!-- -------------------------- -->

# ACTUALIZAR UN PAQUETE

De forma predeterminada NPM al actualizar una dependencia (sin
especificar su versión) buscará en el repositorio la versión más reciente.
`npm update <nombre_del_paquete>`





¿Qué sucede si deseo actualizar una dependencia para solo aplicar parches o quizá solo
actualizar a una versión menor?
Podemos modificar el registro de la dependencia en el archivo package.json, anteponiendo un
carácter especial que NPM lo interpretará para saber a qué nivel deseamos actualizar.
● ~3.5.1: El carácter “tilde” nos asegurará que solo se corregirán errores, es decir, se aplicará
el parche más reciente disponible.
● ^3.5.1: El carácter intercalación nos garantizará que se corregirán errores y se agregarán
funcionalidades nuevas, es decir, se cambiará a la versión menor más reciente disponible.
● *3.5.1: El carácter asterisco nos asegurará que se actualizará a la versión mayor más
reciente disponible. Aplicar este tipo de configuración suele ser de alto impacto, por lo que
se requiere cuidado al proceder.