# Dicionários

Diferentes dos arrays, que utilizam índices numéricos, os dicionários são
estruturas de dados que utilizam pares de chave e valor para armazenar
informações. Os dicionários são frequentemente usados para representar objetos
do mundo real.

=== "Lua"

    ```lua
    local pessoa = {
      nome = "Max",
      endereco = {
          pais = "Brasil"
      }
    }

    print(pessoa.nome)
    print(pessoa.endereco.pais)
    print(pessoa["nome"])
    print(pessoa["endereco"]["pais"])
    ```

=== "Console"

    ```bash
    Max
    Brasil
    Max
    Brasil
    ```

Como você pode ver, criar um dicionário e acessar seus valores é bastante
simples

## Manipulando dicionários
