---
sidebar_position: 3
---

# StepFunctions

Este conector se encarga de utilizar la información dada para entregarla al sistema de StepFunctions e iniciar el proceso ETL.

## Funciones

Aquí se encuentran las funciones más importantes para el funcionamiento correcto de este sistema

### Objeto para iniciar StepFunctions dada un ARN y la información necesaria

```Python title="stepfunctions-connector.py"

class StepConnector:
    def __init__(self, arn : str, input_json : str):

        step_functions = boto3.client("stepfunctions")

        response = step_functions.start_execution(
            stateMachineArn=arn,
            input=input_json
        )

        self.response = response

    def get_execution_arn(self) -> str:
        """
        Gets the name of the arn that was just executed
        """
        return self.response["executionArn"]

    def get_start_date(self) -> datetime:
        """
        Gets date where the step function was executed
        """
        return self.response["startDate"]

```