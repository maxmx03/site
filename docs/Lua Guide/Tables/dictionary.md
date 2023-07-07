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

## Adicionando e atualizando valores

Você pode adicionar um novo par de chave e valor a uma tabela atribuindo um
valor a uma nova chave específica.

=== "Lua"

    ```lua
    local pessoa = {
        nome = 'Roberto',
    }

    pessoa.nome = 'Fernando'
    pessoa.profissao = "Engenheiro"

    print(pessoa.nome)
    print(pessoa.profissao)
    ```

=== "Console"

    ```bash
    Fernando
    Engenheiro
    ```

Agora a tabela "pessoa" terá um novo par de chave e valor:
"profissao" é "Engenheiro".

## Iterando por Dicionários em Lua

Em Lua, é possível iterar por um dicionário usando o laço `for` juntamente
com a função `pairs`. A função `pairs` retorna uma função iteradora que
percorre todos os pares de chave e valor do dicionário.

=== "Lua"

    ```lua
    local pessoa = {
      nome = "Max",
      idade = 30,
      profissao = "Engenheiro"
    }

    for chave, valor in pairs(pessoa) do
      print(chave, valor)
    end
    ```

=== "Função personalizada"

    ```lua
    local pessoa = {
      nome = "Max",
      idade = 30,
      profissao = "Engenheiro",
    }

    -- Função para iterar sobre o dicionário
    local function iterarDicionario(tabela)
      local chaveAnterior = nil  -- Variável para armazenar a chave anterior

      -- Função iteradora personalizada
      return function(tabela)
        local chave, valor = next(tabela, chaveAnterior)  -- Obtém o próximo par de chave e valor
        chaveAnterior = chave  -- Armazena a chave atual para a próxima iteração
        return chave, valor  -- Retorna a chave e o valor atual
      end, tabela  -- Retorna a função iteradora e a tabela original
    end

    for chave, valor in iterarDicionario(pessoa) do
      print(chave, valor)
    end
    ```

=== "Console"

    ```bash
    profissao       Engenheiro
    nome            Max
    idade           30
    ```

## Criando uma cópia de uma tabela

Quando você atribui uma tabela a uma variável ou passa uma tabela como
argumento para uma função, o que é passado ou atribuído é uma
referência à tabela original

Isso significa que qualquer modificação feita na tabela através da variável
ou da referência afeta diretamente a tabela original. No entanto, às vezes
você pode precisar criar uma cópia independente da tabela original.

=== "Lua"

    ```lua
    local function deepcopy(orig, cache)
      cache = cache or {}
      if cache[orig] then
        return cache[orig]
      end

      local t = type(orig)
      local copy

      if t == "table" then
        copy = {}
        cache[orig] = copy

        local mt = getmetatable(orig)

        if mt then
          setmetatable(copy, deepcopy(mt, cache))
        end

        for k, v in next, orig, nil do
          copy[deepcopy(k, cache)] = deepcopy(v, cache)
        end
      elseif t == "number" or t == "string" or t == "nil" or t == "boolean" or t == "function" then
        copy = orig
      else
        error("Cannot deepcopy object of type " .. t)
      end

      return copy
    end

    local original = {a = 1, b = 2, c = 3}
    local copia = deepcopy(original)
    ```

=== "Solução mais simples"

    ```lua
    local function original()
        return { a = 1, b = 2, c = 3 }
    end

    local copia = original()
    ```

Agora, a variável copia contém uma cópia da tabela original. Qualquer
modificação feita na tabela copia não afetará a tabela original e vice-versa.

!!! tip

    Acesse o site [lua-users.org](http://lua-users.org/wiki/CopyTable) para
    ver outras alternativas de como copiar uma tabela.
