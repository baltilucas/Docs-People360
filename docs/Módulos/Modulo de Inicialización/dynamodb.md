---
sidebar_position: 1
---

# DynamoDB

Se utiliza un objeto de Python para mantener la información desde la conexión a DynamoDB con tal de abstraer los sistemas lo necesario si en algún punto se desease implementar otros servicios de la nube.

## Funciones

Aquí se encuentran las funciones más importantes para el funcionamiento correcto de este sistema

### Obtener un item de DynamoDB en fórmato JSON

```Python title="dynamodb-connector.py"

def get_item_to_json(self, table_name: str, id_item: str, pk_name: str) -> str:
        """
        Gets item from a dynamo table an converts it to a json version of it
        Args:
            table_name (str): _description_
            id_item (str): _description_
            pk_name (str): _description_
        Output:
            JSON as string with deserialized decimals
        """

        table = self.get_dynamo_table(table_name)
        response = self.get_item_from_table(table, id_item, pk_name)

        item = response.get("Item", {})


        json_item = json.dumps(item, cls=DecimalEncoder)

        return json_item

```