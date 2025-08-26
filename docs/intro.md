---
sidebar_position: 0
---

# Descripción Proyecto

<p>El proyecto PeopleData 360 nace con el objetivo de unificar sistemas del área de Personas de Cencosud.</p>
<p>Estos están distribuidos en múltiples bases de datos, con distintos fórmatos y manejo, debido a esto nace la idea de crear un Data Warehouse.</p>
<p>La idea es procesar y gestionar todos los datos provenientes de distintos países donde está presente Cencosud.</p>

## Descripción General

El proyecto del Data Warehouse está organizado en cuarto partes principales

<ol>
    <li><a href = "/docs/category/modulo-de-inicialización">Inicio de Pipeline</a></li>
    <li><a href = "/docs/category/modulo-de-desacople">Módulo de Desacople</a></li>
    <li><a href = "/docs/category/modulo-de-adaptación">Módulo de Adaptación</a></li>
    <li><a href = "/docs/category/modulo-de-actualización">Módulo de Actualización</a></li>
</ol>

### 1. Inicio de Pipeline

Sistema de inicio del proceso ETL (Extract, Transform and Load), se conecta a un calendarizador (e.g. AWS EventBridge Scheduler) para la inicialización.

### 2. Módulo de Desacople

Extracción y verificación de información, en este módulo se obtiene la información y se asegura que esta información mantenga la calidad de datos mínima esperada.

### 3. Módulo de Adaptación

Una vez obtenida la información, esta se transforma a la forma normalizada y se almacena en un sistema como podría ser S3.

### 4. Módulo de Actualización

Actualización de información desde las distintas fuentes.

## Descripción partes del proyecto

El proyecto funciona a base de unificar la información, esta información se obtiene de distintas vistas de las bases de datos relacionales, las cuales se pueden entregar al sistema a base de una conexión a la base de datos o un archivo CSV, una vez dentro del sistema, se transforma la información para entregarla a un sistema de análisis de datos masivos (Big Data), como podría ser Apache Iceberg.

## Palabras finales

Esperamos que este sistema de Data Warehouse permita a la empresa mejorar su toma de decisiones con tal de aumentar el conocimiento de los distintos puntos de la empresa, especialmente aquellos que son complicados de conocer sin un análisis previo.
