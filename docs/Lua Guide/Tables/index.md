# Tabelas

As tabelas em Lua são uma estrutura de dados extremamente versátil,
podendo ser utilizadas tanto como arrays quanto como dicionários.
Vejamos alguns exemplos para ilustrar esses casos:

Exemplo de Array em Lua:

=== "Lua"

    ```lua
    local meuArray = {"maçã", "banana", "laranja"}

    print(meuArray[1])
    print(meuArray[2])
    print(meuArray[3])
    ```

=== "Console"

    ```bash
    maça
    banana
    laranja
    ```

Exemplo de Dicionário

=== "Lua"

    ```lua
    local meuDicionario = {
      fruta = "maçã",
      animal = "cachorro",
      cor = "azul"
    }

    print(meuDicionario.fruta)
    print(meuDicionario.animal)
    print(meuDicionario.cor)
    ```

=== "Console"

    ```bash
    maça
    cachorro
    azul
    ```
