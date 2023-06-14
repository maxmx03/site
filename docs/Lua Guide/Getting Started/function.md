# Definindo Funções

Em Lua, as funções são usadas para agrupar um conjunto de instruções que
podem ser chamadas e executadas em diferentes partes do código.
Elas são extremamente úteis para evitar a repetição de código e organizar
a lógica do programa.

Atribuindo uma função anônima a uma variável:

```lua
local hello = function()
    print("Olá, mundo!")
end
```

Nesse exemplo, uma função anônima é atribuída à variável `hello`.
Essa abordagem permite que você chame a função posteriormente usando o nome da
variável seguido de parênteses:

=== "Lua"

    ```lua
    hello()
    ```

=== "Console"

    ```bash
    Olá, mundo!
    ```

Usando a declaração local function:

```lua
local function hello()
    print("Olá, mundo!")
end
```

Essa forma mais comum de definir funções permite que você declare uma
função com um nome explícito, nesse caso, `hello`. A função também pode
receber parâmetros entre os parênteses, se necessário.

=== "Lua"

    ```lua
    hello()
    ```

=== "Console"

    ```bash
    Olá, mundo!
    ```

Ambas as formas são equivalentes em termos de funcionalidade. No entanto, a
declaração `local function` permite que a função seja chamada antes de sua
definição no código, enquanto a atribuição `local hello = function()` exige que
a função seja definida antes de ser chamada.

=== "Lua"

    ```lua
    local function hello()
        print("Olá, mundo")
        hello()
    end
    ```

=== "Console"

    ```bash
    Olá, mundo
    Olá, mundo
    Olá, mundo
    Olá, mundo
    Olá, mundo
    Olá, mundo
    Olá, mundo
    ...
    ```

```lua
local hello = function()
    print("Olá, mundo")
    hello() -- undefined global hello
end
```

!!! tip

    Omitindo a palavra chave `local` você estará criando funções com escopo
    global. É recomendado criar funções locais para evitar poluir o escopo
    global e evitar conflitos com outras partes do código.

## Argumentos de uma função

Ao definir uma função em Lua, você pode especificar os argumentos que ela
recebe. Os argumentos são valores que podem ser passados para a função quando
ela é chamada e são usados dentro do corpo da função para realizar operações
específicas.

=== "Lua"

    ```lua
    local function saudacao(nome)
        print("Olá, " .. nome .. "!")
    end

    saudacao("João")
    saudacao("Maria")
    ```

=== "Console"

    ```bash
    Olá, João!
    Olá, Maria!
    ```

Você pode definir múltiplos argumentos separando-os por vírgulas na
definição da função.
Nesse exemplo, a função soma possui dois argumentos: `a` e `b`.
Esses argumentos são somados e o resultado é impresso:

=== "Lua"

    ```lua
    local function soma(a, b)
        local resultado = a + b
        print("A soma de " .. a .. " e " .. b .. " é " .. resultado)
    end

    soma(5, 3)
    soma(10, -2)
    ```

=== "Console"

    ```bash
    A soma de 5 e 3 é 8
    A soma de 10 e -2 é 8
    ```

## Retornando um valor ou mais valores

Em Lua, uma função pode retornar um valor ou vários valores. Para retornar
um valor, você pode usar a palavra-chave `return` seguida do valor que deseja
retornar. Por exemplo:

=== "Lua"

    ```lua
    local function dobrar(numero)
        return numero * 2
    end

    local numero = 10
    local numeroDobrado = dobrar(numero)

    print(numeroDobrado)
    ```

=== "Console"

    ```bash
    20
    ```

Você também pode retornar vários valores de uma função separando-os por
vírgulas. Por exemplo:

=== "Lua"

    ```lua
    local function dobrar(numero)
        return numero * 2, math.type(numero)
    end

    local numero = 10
    local numeroDobrado, tipo = dobrar(numero)

    print(numeroDobrado, tipo)
    ```

=== "Console"

    ```bash
    20, integer
    ```

## Argumentos indefinidos de uma função

Em Lua, é possível definir funções com um número indefinido de argumentos.
Isso é útil quando você deseja lidar com uma quantidade variável de valores
passados para a função. Para isso, você pode usar os parâmetros especiais `...`
(pontos reticentes) na declaração da função.

=== "Lua"

    ```lua
    local function somar(...)
        local total = 0

        for _, valor in ipairs({...}) do
            total = total + valor
        end

        return total
    end

    print(somar(1, 2, 3))
    print(somar(4, 5, 6, 7, 8))
    ```

=== "Console"

    ```lua
    6
    30
    ```
