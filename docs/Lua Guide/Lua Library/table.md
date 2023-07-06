# Biblioteca `table` do Lua

A biblioteca `table` do Lua fornece uma série de funções para manipular e
trabalhar com tabelas, que são a principal estrutura de dados em Lua.
Essas funções permitem adicionar, remover, pesquisar e modificar elementos em uma tabela, bem como realizar operações como ordenação e iteração.

Neste tutorial, exploraremos algumas das principais funções da biblioteca
`table`, juntamente com exemplos de uso.

## Função `table.insert`

A função `table.insert` permite adicionar elementos a uma tabela em uma
determinada posição. Ela aceita dois argumentos: a
tabela na qual o elemento será inserido e o elemento em si.

=== "Lua"

    ```lua
    local fruits = {"apple", "banana", "orange"}
    table.insert(fruits, 2, "grape")

    print(table.concat(fruits, ", "))
    ```

=== "Console"

    ```bash
    apple, grape, banana, orange
    ```

No exemplo acima, usamos `table.insert` para inserir a fruta "grape" na
posição 2 da tabela `fruits`. O resultado é uma tabela modificada onde
"grape" é adicionado entre "apple" e "banana".

## Função `table.remove`

A função `table.remove` permite remover um elemento de uma tabela em uma
determinada posição. Ela aceita dois argumentos: a tabela da qual o
elemento será removido e a posição do elemento a ser removido.

=== "Lua"

    ```lua
    local fruits = {"apple", "grape", "banana", "orange"}
    table.remove(fruits, 3)

    print(table.concat(fruits, ", "))
    ```

=== "Console"

    ```bash
    apple, grape, orange
    ```

Neste exemplo, utilizamos `table.remove` para remover a fruta na posição 3 da
tabela `fruits`. Como resultado, a tabela `fruits` é modificada, e a fruta
"banana" é removida.

## Função `table.sort`

A função `table.sort` permite ordenar os elementos de uma tabela em ordem
crescente. Ela aceita um único argumento, a tabela a ser ordenada.

=== "Lua"

    ```lua
    local numbers = {5, 2, 8, 1, 4}
    table.sort(numbers)

    print(table.concat(numbers, ", "))
    ```

=== "Console"

    ```bash
    1, 2, 4, 5, 8
    ```

No exemplo acima, utilizamos `table.sort` para ordenar a tabela `numbers` em
ordem crescente. O resultado é uma tabela modificada onde os elementos estão
organizados de forma ascendente.

## Função `table.foreach` (deprecated)

A função `table.foreach` permite iterar sobre os elementos de uma tabela e
aplicar uma função a cada elemento. Ela aceita dois argumentos: a tabela a ser
percorrida e a função a ser aplicada a cada elemento.

=== "Lua"

    ```lua
    local fruits = {"apple", "grape", "banana", "orange"}
    table.foreach(fruits, function(index, value)
        print(index, value)
    end)
    ```

=== "Console"

    ```bash
    1    apple
    2    grape
    3    banana
    4   orange
    ```

## Função `table.getn` (deprecated)

A função `table.getn` retorna o número de elementos em uma tabela.
No entanto, a partir do Lua 5.2, essa função foi descontinuada e
não é mais recomendada. Em vez disso, você pode usar o operador `#`
para obter o tamanho de uma tabela.

!!! warning

    Essa função foi descontinuada e não é mais recomendada.
    Em vez disso, você pode usar o operador `#` para obter o tamanho de
    uma tabela.

=== "Lua"

    ```lua
    local fruits = {"apple", "grape", "banana", "orange"}
    local size = #fruits

    print(size)
    ```

=== "Console"

    ```bash
    4
    ```

## Função `table.unpack` (Não está disponível no LuaJIT)

A função `table.unpack` retorna os elementos de uma tabela como valores
separados. Ela aceita um único argumento, a tabela a ser desempacotada.

=== "Lua"

    ```lua
    local numbers = {1, 2, 3, 4, 5}
    local unpacked = table.unpack(numbers)

    print(unpacked)
    ```

=== "Console"

    ```bash
    1    2    3    4    5
    ```

No exemplo acima, utilizamos `table.unpack` para desempacotar a tabela
`numbers` em valores separados. Os valores são impressos em sequência.

## Função `table.move` (Lua 5.3+)

A função `table.move` copia elementos de uma tabela para outra, com
suporte para mover elementos dentro da mesma tabela. Ela aceita quatro
argumentos: a tabela de origem, a posição de início na tabela de origem,
a posição de fim na tabela de origem e a posição de destino na tabela de
destino.

=== "Lua"

    ```lua
    local numbers = {1, 2, 3, 4, 5}
    local destination = {}

    table.move(numbers, 2, 4, 1, destination)

    print(table.concat(destination, ", "))
    ```

=== "Console"

    ```bash
    2, 3, 4
    ```

No exemplo acima, usamos `table.move` para copiar os elementos da posição
2 à 4 da tabela `numbers` para a tabela `destination`, a partir da posição 1.
O resultado é uma tabela `destination` com os elementos copiados.

## Função `table.pack` (Não está disponível no LuaJIT)

A função `table.pack` retorna uma tabela contendo todos os argumentos
passados para ela. Essa função é útil quando você precisa lidar com um
número variável de argumentos em uma função.

=== "Lua"

    ```lua
    local function printArgs(...)
        local args = table.pack(...)
        for i = 1, args.n do
            print(args[i])
        end
    end

    printArgs("apple", "banana", "orange")
    ```

=== "Console"

    ```bash
    apple
    banana
    orange
    ```

No exemplo acima, usamos `table.pack` para empacotar todos os argumentos
passados para a função `printArgs`. Em seguida, iteramos sobre a tabela
`args` e imprimimos cada argumento.

Essas são apenas algumas das funções disponíveis na biblioteca `table` do
Lua. Elas fornecem uma variedade de recursos para manipular tabelas e são
amplamente utilizadas no desenvolvimento de aplicativos Lua.
