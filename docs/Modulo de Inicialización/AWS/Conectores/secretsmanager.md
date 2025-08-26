---
sidebar_position: 2
---

# SecretsManager

Se obtiene información en fórmato JSON de distintos puntos claves la cual está encriptada y es accedible solo con el secreto dado.

## Funciones

Aquí se encuentran las funciones más importantes para el funcionamiento correcto de este sistema

### Obtener item secreto desde SecretManager

```Python title="secretsmanager-connector.py"

def get_item_from_secret(self, item: str) -> str:
        """Gets an item from the SecretManager"""

        try:
            data = self.json_secret_response[item]
            return data
        except KeyError as e:
            print(f"Invalid item doesn't exist: {e}")

```