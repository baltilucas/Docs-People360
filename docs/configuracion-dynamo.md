---
sidebar_position: 10
---

# Configuraciones

Las configuraciones de colaboradores tienen fórmato JSON y se importan desde DynamoDB.

Estas configuraciones son utilizadas a través del procesos completo de ETL.


<div>
    <h4>
        <ol>
            <li>
                Conexiones
            </li>
            <li>
                Reglas
            </li>
        </ol>
    </h4>
</div>

<div>
    Las configuraciones se conectan con distintos servicios dependiendo de la necesidad del módulo, por ejemplo, se pueden obtener referencias a consultas de SQL utilizando S3.
</div>


# 1. Conexiones

En el archivo de configuración se encuentra el sistema de conexión tanto para archivos CSV como Oracle Peoplesoft, es posible extraer la información de ambos utilizando la configuración:

## Configuración Oracle - Spark

``` JSON title = "JSON CSV Config"
{
 "name_id": "collaborator",
 "connections": [
  {
   "connection_id": "collaborator_bra_ps89",
   "credentials_reference": "credentials_reference_1",
   "query_reference": {
    "query": "s3://my-bucket/referential_path_queries/collaborator_bra_ps89.sql",
    "version": "1.0"
            },
   "rules_reference": "s3://my-bucket/referential_path_quality/collaborator_bra_ps89.json",
   "type": "database"
  },
  {
   "connection_id": "collaborator_arg_ps92",
   "credentials_reference": "credentials_reference_2",
   "query_reference": {
    "query": "s3://my-bucket/referential_path_queries/collaborator_arg_ps92.sql",
    "version": "1.0"
            },
   "rules_reference": "s3://my-bucket/referential_path_quality/collaborator_arg_ps92.json",
   "type": "database"
  },
  {
   "connection_id": "collaborator_chl_ps89",
   "credentials_reference": "credentials_reference_3",
   "query_reference": {
    "query": "s3://my-bucket/referential_path_queries/collaborator_chl_ps89.sql",
    "version": "1.0"
            },
   "rules_reference": "s3://my-bucket/referential_path_quality/collaborator_chl_ps89.json",
   "type": "database"
  }
 ],
 "s3_config": {
  "bucket": "s3://bucket-middleware-test/data_output/",
  "key": "collaborator/"
 },
 "schema_reference": {
  "schema": "s3://middleware/schemas/collaborator",
  "version": "1.0"
 }
}
```

### Atributos

En las conexiones con la base de datos encontramos los siguientes atributos:

- **Name_Id**

    - **Descripción**: Nombre de la entidad al sistema.
    - **Tipo**: String

    - **Ejemplo**:
        ``` JSON
        "name_id":"collaborators"
        ```

- **Connections**
    - **Descripción**: Lista de conexiones a las bases de datos
    - **Tipo**: Array

    - **Ejemplo**:
        ``` JSON title = "connections_example.json"
            "connections": [
                {
                "connection_id": "collaborator_bra_ps89",
                "credentials_reference": "credentials_reference_1",
                "query_reference": {
                    "query": "s3://my-bucket/referential_path_queries/collaborator_bra_ps89.sql",
                    "version": "1.0"
                            },
                "rules_reference": "s3://my-bucket/referential_path_quality/collaborator_bra_ps89.json",
                "type": "database"
                },
                ...
            ]
        ```

- **Connection_Id**
    - **Descripción**: Nombre interno de la base de datos
    - **Tipo**: String

    - **Ejemplo**: 
    ``` JSON title = "credentials_example.json"
            "connection_id": "collaborator_bra_ps89"
        ```

- **Credentials_Reference**
    - **Descripción**: Referencia a las credenciales necesarias para exportar información desde la base de datos
    - **Tipo**: String

    - **Ejemplo**: 
    ``` JSON title = "credentials_example.json"
            "credentials_reference": "credentials_reference_1"
    ```

- **Query_Reference**
    - **Descripción**: Referencia a la consulta almacenada en S3 para la exportación de datos desde la base de datos
    - **Tipo**: Diccionario

    - **Ejemplo**: 
    ``` JSON title = "query_example.json"
            "query_reference": {
                "query": "s3://my-bucket/referential_path_queries/collaborator_bra_ps89.sql",
                "version": "1.0"
            },
    ```

    Encontramos dos datos dentro del diccionario de la consulta:

    - **Query**
        - **Descripción**: Dirección del archivo de la consulta
        - **Tipo**: String

        - **Ejemplo**: 
        ``` JSON title = "query_s3_example.json"
                "query": "s3://my-bucket/referential_path_queries/collaborator_bra_ps89.sql"
        ```

    - **Version**
        - **Descripción**: Versión actual de la consulta
        - **Tipo**: String

        - **Ejemplo**: 
        ``` JSON title = "query_version_example.json"
                "version": "1.0"
        ```

- **Rules_Reference**
    - **Descripción**: Referencia a las reglas a las que tiene que adherirse la base de datos para asegurar la calidad de los datos
    - **Tipo**: String

    - **Ejemplo**: 
    ``` JSON title = "rules_reference_example.json"
            "rules_reference": "s3://my-bucket/referential_path_quality/collaborator_bra_ps89.json"
    ```

- **Type**
    - **Descripción**: El tipo de sistema del cual se extrae la información (CSV, Base de datos, entre otros)
    - **Tipo**: String

    - **Ejemplo**: 
    ``` JSON title = "type_example.json"
            "type": "database"
    ```

- **S3_Config**
    - **Descripción**: Configuración para la salida de información hacia el S3
    - **Tipo**: Diccionario

    - **Ejemplo**: 
    ``` JSON title = "s3_config_example.json"
        "s3_config": {
            "bucket": "s3://bucket-middleware-test/data_output/",
            "key": "collaborator/"
        },
    ```

    - **Bucket**
        - **Descripción**: Dirección de bucket para la salida de información
        - **Tipo**: String

        - **Ejemplo**: 
        ``` JSON title = "s3_config_bucket_example.json"
            "bucket": "s3://bucket-middleware-test/data_output/"
        ```

    - **Key**
        - **Descripción**: La carpeta donde se ingresa la información
        - **Tipo**: String

        - **Ejemplo**: 
        ``` JSON title = "s3_config_key_example.json"
            "key": "collaborator/"
        ```

- **Schema_Reference**
    - **Descripción**: Referencia al esquema de la base de datos
    - **Tipo**: Diccionario

    - **Ejemplo**: 
    ``` JSON title = "schema_reference_example.json"
        "schema_reference": {
            "schema": "s3://middleware/schemas/collaborator",
            "version": "1.0"
        }
    ```
    
    - **Schema**
        - **Descripción**: Referencia de S3 al esquema
        - **Tipo**: String

        - **Ejemplo**: 
        ``` JSON title = "schema_reference_s3_example.json"
            "schema": "s3://middleware/schemas/collaborator"
        ```

    - **Version**
        - **Descripción**: Versión del esquema
        - **Tipo**: String

        - **Ejemplo**: 
        ``` JSON title = "schema_reference_version_example.json"
            "version": "1.0"
        ```