# Arrays

Arrays são estruturas de dados que permitem armazenar uma coleção de
elementos sequenciais, onde cada elemento é identificado por um índice
numérico. Os arrays em Lua são implementados utilizando tabelas, onde os
índices numéricos são utilizados para acessar os elementos da tabela.

=== "Lua"

    ```lua
    local meuArray = { 1, 2, 3, 4, 5 }


    print(meuArray[1])
    print(meuArray[2])
    print(meuArray[3])
    print(meuArray[4])
    print(meuArray[5])
    ```

=== "Console"

    ```bash
    1
    2
    3
    4
    5
    ```

!!! note

    Em Lua, as tabelas são estruturadas com índices iniciando em 1, não em 0.
    Isso significa que o primeiro elemento de uma tabela é acessado pelo
    índice 1, o segundo elemento pelo índice 2 e assim por diante.

## Flexibilidade de Tipos

Uma das características interessantes dos arrays em Lua é a flexibilidade
em relação aos tipos de dados armazenados. Ao contrário de algumas
linguagens de programação, não é necessário que todos os elementos de um
array em Lua sejam do mesmo tipo.

=== "Lua"

    ```lua
    local meuArray = {10, "Lua", true, {1, 2, 3}}

    print(meuArray[1])
    print(meuArray[2])
    print(meuArray[3])
    print(meuArray[4][2])
    ```

=== "Console"

    ```bash
    10
    Lua
    true
    2
    ```

## Adicionandos elementos em um array

Em Lua, é possível adicionar novos elementos em um array de forma simples,
sem a necessidade de utilizar funções específicas. Basta atribuir um valor a
um novo índice do array.

=== "Lua"

    ```lua
    local meuArray = {}

    meuArray[1] = "Primeiro elemento"
    meuArray[2] = "Segundo elemento"
    meuArray[3] = "Terceiro elemento"
    meuArray[#meuArray + 1] = "Último elemento"

    print(meuArray[1])
    print(meuArray[2])
    print(meuArray[3])
    print(meuArray[4])
    ```

=== "Console"

    ```bash
    Primeiro elemento
    Segundo elemento
    Terceiro elemento
    Último elemento
    ```

Outra alternativa é utilizar `table.insert` que está na biblioteca padrão
do Lua.

=== "Lua"

    ```lua
    local meuArray = {}

    table.insert(meuArray, "Primeiro elemento")
    table.insert(meuArray, "Segundo elemento")
    table.insert(meuArray, "Terceiro elemento")
    table.insert(meuArray, "Último elemento")

    print(meuArray[1])
    print(meuArray[2])
    print(meuArray[3])
    print(meuArray[4])
    ```

=== "Console"

    ```bash
    Primeiro elemento
    Segundo elemento
    Terceiro elemento
    Último elemento
    ```

Nesse exemplo, utilizamos a função `table.insert()` da biblioteca padrão do
Lua para adicionar os elementos ao array. A função `table.insert()`
insere um elemento no final do array automaticamente.

## Iterando em um array

Em Lua, é possível iterar em um array de diferentes maneiras. Vou mostrar
algumas das formas de como percorrer os elementos de um array.

## Utilizando o laço `for`

Um método comum para iterar em um array é usar o laço `for` juntamente com o
operador `#` para obter o tamanho do array. Aqui está um exemplo:

=== "Lua"

    ```lua
    local meuArray = {"Primeiro elemento", "Segundo elemento", "Terceiro elemento", "Último elemento"}

    for i = 1, #meuArray do
        print(meuArray[i])
    end
    ```

=== "Console"

    ```bash
    Primeiro elemento
    Segundo elemento
    Terceiro elemento
    Último elemento
    ```

Nesse exemplo, usamos o laço `for` para iterar de `1` até o tamanho do array
``#meuArray`. A cada iteração, imprimimos o elemento correspondente ao índice
`i`.

## Utilizando a função `ipairs()`

Outra forma conveniente de iterar em um array é utilizando a função
`ipairs()`, que retorna pares índice-valor. Aqui está um exemplo:

=== "Lua"

    ```lua
    local meuArray = {"Primeiro elemento", "Segundo elemento", "Terceiro elemento", "Último elemento"}

    for i, valor in ipairs(meuArray) do
        print(valor)
    end
    ```

=== "Console"

    ```bash
    Primeiro elemento
    Segundo elemento
    Terceiro elemento
    Último elemento
    ```

!!! warning

    O lua também disponibiliza outras duas funções, `table.foreach` e
    `table.foreachi`, porém elas foram descontinuadas e não são mais
    recomendadas para uso

## Estrutura de Salto Goto

A estrutura de salto Goto é uma construção de controle de fluxo disponível
em algumas linguagens de programação, incluindo Lua. Essa estrutura permite
que o programa desvie incondicionalmente para uma determinada posição no
código identificada por um rótulo (label).

=== "Lua"

    ```lua
    local function foreach(t, callback)
      if type(t) ~= 'table' then
        goto exit
      end

      local size = #t

      if size == 0 then
        goto exit
      end

      local key = 1

      ::verify::
      if size >= key then
        goto increment
      else
        goto exit
      end

      ::increment::
      callback(key, t[key])
      key = key + 1
      goto verify

      ::exit::
    end

    local meuArray = {
        "Primeiro elemento",
        "Segundo elemento",
        "Terceiro elemento",
        "Último elemento",
    }

    foreach(meuArray, function(key, value)
      print(key, value)
    end)
    ```

=== "Recomendado"

    ```lua
    local function foreach(t, callback)
      if type(t) ~= 'table' then
        return
      end

      local size = #t

      if size == 0 then
        return
      end

      for key = 1, size do
        callback(key, t[key])
      end
    end

    foreach(meuArray, function(key, value)
      print(key, value)
    end)
    ```

=== "Console"

    ```bash
    1   Primeiro elemento
    2   Segundo elemento
    3   Terceiro elemento
    4   Último elemento
    ```

!!! warning

    O uso da estrutura de salto é geralmente desencorajado e considerado uma
    prática de programação ruim.
