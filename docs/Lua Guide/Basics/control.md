# Estruturas de Controle

As estruturas de controle são utilizadas para tomar decisões e controlar
o fluxo de execução com base em valores booleanos. No Lua, a estrutura de
controle utilizada é o `if`. O `if` avalia uma expressão booleana e, se o
resultado for verdadeiro, executa um bloco de código delimitado pelas
palavras-chave `then` e `end`.

exemplo:

=== "Lua"

    ```lua
    local x = 5
    local is_number = type(x) == "number"

    if is_number then
        print("x é um número!")
    end
    ```

=== "Console"

    ```bash
    x é um número!
    ```

=== "Flow chart"

    ```mermaid
    graph LR
      A[if] --> B{is_number?};
      B -->|true| C[x é um número];
      C -->D[end]
      B -->|false| D[end];
    ```

## `elseif`

O `elseif` é utilizado para adicionar condições adicionais que serão
verificadas se a condição anterior no if não for satisfeita.
Ele permite testar uma série de condições consecutivas até que uma delas
seja verdadeira.

=== "Lua"

    ```lua
    local idade = 18

    if idade < 18 then
        print("Você é menor de idade.")
    elseif idade == 18 then
        print("Você acabou de atingir a maioridade!")
    elseif idade > 18 then
        print("Você é maior de idade.")
    end
    ```

=== "Console"

    ```bash
    Você acabou de atingir a maioridade!
    ```

=== "Flow chart"

    ```mermaid
    graph LR
      A[if] --> B{idade < 18};
      B -->|true| C[Você é menor de idade];
      B -->|false| D{idade == 18};
      D --> |true| E[Você acabou de atingir a maioridade!]
      D --> |false| F{idade > 18}
      F --> |true| G[Você é maior de idade.]
      F --> |false| H[end]
      C --> H[end]
      G --> H[end]
      E --> H[end]
    ```

## `else`

A palavra-chave else é utilizada como uma condição final em uma estrutura if.
Ela é executada quando todas as condições anteriores forem avaliadas como
falsas.

=== "Lua"

    ```lua
    local temperatura = 25

    if temperatura < 0 then
        print("Está muito frio!")
    elseif temperatura > 30 then
        print("Está muito quente!")
    else
        print("A temperatura está agradável.")
    end
    ```

=== "Console"

    ```bash
    A temperatura está agradável.
    ```

=== "Flow chart"

    ```mermaid
    graph LR
        A[if] --> B{temperatura < 0};
        B -->|true| C[Está muito frio!];
        B -->|false| D{temperatura > 30};
        D --> |true| E[Está muito quente!]
        D --> |false| F[A temperatura está agradável.]
        F --> H[end]
        C --> H[end]
        E --> H[end]
    ```

## Nesting if statements

A estrutura "Nesting if statements" é utilizada quando desejamos incluir uma
estrutura if dentro de outra estrutura if. Isso permite criar
condições mais complexas e aninhadas. Aqui está um exemplo com descrição,
exemplo em Lua e um flowchart correspondente:

=== "Lua"

    ```lua
    local idade = 20

    if idade >= 18 then
        print("Você é maior de idade.")

        if idade >= 21 then
            print("Você também pode beber álcool nos EUA.")
        else
            print("Você não pode beber álcool nos EUA.")
        end
    else
        print("Você é menor de idade.")
    end
    ```

=== "Console"

    ```bash
    Você é maior de idade.
    Você não pode beber álcool nos EUA.
    ```

=== "Flow Chart"

    ```mermaid
    graph LR
      A[if] --> B{idade >= 18};
      B -->|true| C[Você é maior de idade.] --> D{idade >= 21};
      D --> |true| E[Você também pode beber álcool nos EUA.]
      D --> |false| F[Você não pode beber álcool nos EUA.]
      B -->|false| H[Você é menor de idade];
      E --> I[end]
      F --> I[end]
      H --> I[end]
    ```
