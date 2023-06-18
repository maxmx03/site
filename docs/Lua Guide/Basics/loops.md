# Estrutura de repetição

As estruturas de repetição permitem executar um bloco de código
repetidamente com base em uma condição. Lua oferece três tipos
principais de estruturas de repetição: `for` loop, `while` loop.
Vamos explorar cada uma delas:

## For númerico

O loop for é utilizado quando se conhece previamente o número de iterações.
Ele percorre uma sequência de valores e executa um bloco de código para
cada valor da sequência.

Exemplo 1:

=== "Lua"

    ```lua
    for i = 1, 5, 1 do
        print(i)
    end
    ```

=== "Console"

    ```bash
    1
    2
    3
    4
    5
    ```

=== "Flow Chart"

    ```mermaid
    graph LR
        A[for] --> B[Inicialização]
        B --> C[Condição]
        C -->|true| D[Execução do Bloco]
        D --> E[Incremento]
        E --> C
        C -->|false| F[end]
    ```

Exemplo 2:

=== "Lua"

    ```lua
    for i = 5, 1, -1 do
        print(i)
    end
    ```

=== "Console"

    ```bash
    5
    4
    3
    2
    1
    ```

=== "Flow Chart"

    ```mermaid
    graph LR
        A[for] --> B[Inicialização]
        B --> C[Condição]
        C -->|true| D[Execução do Bloco]
        D --> E[Decremento]
        E --> C
        C -->|false| F[end]
    ```

O for loop possui três parâmetros: o primeiro é a variável de
controle (no caso, `i`), o segundo é o limite (o loop será executado enquanto a
variável de controle for menor ou igual ao limite), e o terceiro é o
incremento da variável de controle a cada iteração.

!!! tip

    Se você omitir o terceiro parâmetro no for loop em Lua, ele assumirá um
    valor padrão de 1. Isso significa que a variável de controle será
    incrementada em 1 a cada iteração.

## While Loop

O loop while é utilizado quando a condição de repetição não é conhecida
antecipadamente. Ele executa um bloco de código repetidamente
enquanto a condição especificada for verdadeira.

=== "Lua"

    ```lua
    local i = 1

    while i <= 5 do
        print(i)
        i = i + 1
    end
    ```

=== "Console"

    ```bash
    1
    2
    3
    4
    5
    ```

=== "Flow chart"

    ```mermaid
    graph LR
        A[while] --> B[Condição]
        B -->|true| C[Execução do Bloco]
        C --> B
        B -->|false| E[end]
    ```

## `repeat-until`

A estrutura `repeat-until` é uma forma de loop em Lua que **executa um bloco de
código repetidamente até que uma condição especificada seja verdadeira**.

!!! note

    A principal diferença em relação ao loop `while` é que a condição é verificada
    no final da iteração, ou seja, o bloco de código é executado pelo menos uma
    vez antes de verificar a condição.

=== "Lua"

    ```lua
    local i = 1

    repeat
        print(i)
        i = i + 1
    until i > 5
    ```

=== "Console"

    ```bash
    1
    2
    3
    4
    5
    ```

=== "Flow chart"

    ```mermaid
    graph LR
        A[repeat] --> B[Execução do Bloco]
        B --> C[Verificação da Condição]
        C -->|true| D[end]
        C -->|false| B
    ```

Neste exemplo, o bloco de código será executado repetidamente enquanto a
condição `i > 5` for falsa. A cada iteração, o valor de `i` é incrementado em 1.

## For generico (ipars)

O `for loop` genérico em Lua permite percorrer uma coleção de valores
arbitrários, como uma tabela.
Ele oferece uma maneira conveniente de iterar sobre os elementos de uma
coleção sem precisar acompanhar manualmente o índice ou o estado de iteração.

=== "Lua"

    ```lua
    local numeros = {10, 20, 30, 40, 50}

    for index, numero in ipairs(numeros) do
        print(index, numero)
    end
    ```

=== "Console"

    ```bash
    1   10
    2   20
    3   30
    4   40
    5   50
    ```

## For generico (pairs)

O `pairs()` é uma função em Lua que retorna um iterador para percorrer
todas as chaves e valores de uma tabela. Ao contrário do `ipairs()`, que
itera apenas sobre as chaves numéricas da tabela em ordem crescente, o
`pairs()` itera sobre todas as chaves da tabela, independentemente do tipo
ou ordem.

=== "Lua"

    ```lua
    local pessoa = {nome = "João", idade = 30, cidade = "São Paulo"}

    for chave, valor in pairs(pessoa) do
        print(chave, valor)
    end
    ```

=== "Console"

    ```bash
    nome    João
    idade   30
    cidade  São Paulo
    ```

## Como iterar strings

Em Lua, é possível iterar uma string tratando-a como uma sequência de
caracteres. Você pode usar o for loop genérico em conjunto com a função
string.gmatch para percorrer cada caractere da string.

!!! tipe

    O ponto `"."` passado como argumento para gmatch representa um padrão que
    captura cada caractere individual da string. Dessa forma, o for
    loop itera por todos os caracteres da string.

=== "Lua"

    ```lua
    local texto = "Olá, Lua!"

    for caractere in texto:gmatch(".") do
        print(caractere)
    end
    ```

=== "Alternativa"

    ```lua
    local texto = "Olá, Lua!"
    local tamanho = #texto

    for i = 1, tamanho do
        local caractere = texto:sub(i, i)
        print(caractere)
    end
    ```

=== "Console"

    ```bash
    O
    l
    á
    ,

    L
    u
    a
    !
    ```
