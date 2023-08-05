#language: es

Característica: Login Web Bank
    La página web de bank debe realizar el login correctamente

    Antecedentes:
    Dado El usuario se encuentra en el Login 

    @focus
    Esquema del escenario: Login Correcto
    Cuando ingresa con el cliente "<cliente>"
    Y se responden las preguntas de seguridad
    Y no se guarda el navegador como confiable 
    Entonces se carga la pagina de Inicio

    Ejemplos:
    |cliente|
    | 100423|

    
    Esquema del escenario: Login Expirado
    Cuando ingresa con el cliente "<cliente>"  
    Entonces se muestra el popup de contraseña expirada

    Ejemplos:
    |cliente|
    |  10008|

    
    Esquema del escenario: Login con contraseña incorrecta
    Cuando ingresa con el cliente "<cliente>" y "<password>"
    Entonces se muestra el texto de contraseña incorrecta

    Ejemplos:
    |cliente| password|
    |  10154|badsauce | 

    Esquema del escenario: Login con timeout por contraseña incorrecta
    Cuando ingresa 3 veces seguidas con el cliente "<cliente>" y "<password>"
    Entonces se muestra el texto de timeout

    Ejemplos:
    |cliente| password|
    |  10154|badsauce | 