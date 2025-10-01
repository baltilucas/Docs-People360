---
sidebar_position: 1
---

# Resumen

Esta capa se encarga de obtener la información desde las distintas fuentes para guardarlas en una S3 bucket (bronze)

## Fuentes de datos

La información se obtiene desde distintas fuentes de datos

### 1. Base de datos

Utilizando Apache Spark se conecta a los sistemas de la base de datos de Oracle PeopleSoft (v8.9 para Chile y v9.1 para Argentina).
Esto se hace a base de utilizar una clase que se encarga de la conexión

```Python title="database.py"

self.spark.read \
                .format("jdbc") \
                .option("url", self.jdbc_url) \
                .option("query", self.query) \
                .options(**self.jdbc_properties) \
                .load()

```

### 2. Archivo (CSV)

Utilizando Apache Spark también es posible leer desde archivos como son CSV o PARQUET, por lo cual podemos hacer algo similar.

```Python title="database.py"

self.spark.read \
                .format(self.format) \
                .options(header=True,
                         inferSchema=True,
                         quote='"',
                         escape='"',
                         multiLine=True) \
                .load(self.path)

```

## Uso

Utilizando esto podemos obtener la información e ingresarla a un sistema de Big Data como lo es S3 Bucket para su procesamiento. 

También integrar AWS Glue Jobs - Data Quality para verificar el proceso de integración de los datos.

```Python title="context.py"

raw_data = self.data_source.extract()
        raw_data.show(5, truncate=False)
        # execute_rules(raw_data, self.glue_con, self.entity, self.connection_id)
        load_to_s3(raw_data, self.entity, self.connection_id)
        num_partitions = raw_data.rdd.getNumPartitions()
        logger.info(f"Número de particiones del DataFrame transformado: {num_partitions}")

```