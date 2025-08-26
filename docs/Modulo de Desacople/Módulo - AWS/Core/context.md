---
sidebar_position: 1
---

# Contexto

Esta parte del sistema se encarga de utilizar todos los sistemas para crear un procesador que verifica la integridad de los datos para luego cargarlos al S3 Bucket (Bronze)

## Funciones

Algunas de las funciones necesarias para el correcto funcionamiento del sistema

### DecouplingProcessor.execute

Esta función se encarga de obtener la información, verificarla utilizando Data Quality y cargarla a S3