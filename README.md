Sorteo Amigo Secreto

Se crea una aplicacion sensilla que permite a los usuarios agregar nombres y realizar un sorteo aleatorio para determinar quien sera el amigo secreto.

Estructura

El codigo se ha estructurado en funciones.

agregarAmigo()
- Obtiene un ingreso a travez un campo de texto
-Validacion del mismo
-Agrega nombre a la lista
-Actualiza lista con nombres ingresados en la interfaz
-Verifica si el boton debe o no estar habilidado
-Borra el campo de ingreso despues de un ingreso

validarNombre()
-Verifica que el nombre ingresado no este vacio
-Comprueba que el nombre no este ya ingresado
-Muestra alertas ante campo vacio o nombre repetido

actualizarLista()
-Limpia lista en interfaz
-Genera los elementos en la interfaz

borrarCampo()
-Borra el contenido de entrada despues de un ingreso

sortearAmigo()
-Verifica que al menos dos amigos esten en lista
-Genera un numero aleatorio para seleccion en el sorteo
-Muestra resultado en interfaz

verificarBoton()
-Habilita el boton de sorteo dependiendo que cumplan los requisitos

Caso de uso

1- Ingresar el nombre en el campo de texto
2- Presiona el boton para agregar amigo
3- Con dos amigos o mas el sorteo se activara
4- Toca sortear para obtener el nombre ganador

Tecnologias usadas
-HTML
-CSS
-Javascript

Mejoras posibles futuras

-Boton de reinicio de juego
-Eliminar nombre ingresado
-Historial de sorteos
-Mejora del dise;o con elementos interactivos

