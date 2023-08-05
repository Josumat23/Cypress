#language: es

Característica: Videos de Ayuda para el Login
    
    La página de Inicio de Sesión debe contar con los videos correctos en cada categoría

    Antecedentes:
    Dado El usuario se encuentra en el Login 

    Esquema del escenario: Videos de Ayuda
    Cuando necesita ver videos de Ayuda
    Y solicita el video de "<ayuda>"        
    Entonces se carga el "<video>" correcto

    Ejemplos:
    |ayuda                             | video   |
    |Registrarse por primera vez       |668309918|
    |	¿Olvidó su clave?              |668312396|
    |¿Cómo ingreso a ver mi patrimonio?|668313106|