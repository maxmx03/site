# Operações Aritméticas

As operações aritméticas são amplamente utilizadas na programação para
realizar cálculos matemáticos.

## Operador de adição (+)

O operador de adição (`+`) é utilizado para somar dois valores. No
código em Lua abaixo, temos uma função chamada adicao que recebe dois
parâmetros, `x` e `y`, e retorna a soma desses valores.

=== "Lua"

    ```lua
    local function adicao(x, y)
        return x + y
    end

    local resultado_adicao1 = adicao(2, 2)
    local resultado_adicao2 = adicao(2, 3)
    local resultado_adicao3 = adicao(10, 5)

    print(resultado_adicao1)
    print(resultado_adicao2)
    print(resultado_adicao3)
    ```

=== "Console"

    ```bash
    4
    5
    15
    ```

## Operador de subtração (-)

O operador de subtração (`-`) é utilizado para subtrair um valor de outro. No
código em Lua abaixo, temos uma função chamada subtracao que recebe dois
parâmetros, `x` e `y`, e retorna a diferença entre esses valores.

=== "Lua"

    ```lua
    local function subtracao(x, y)
        return x - y
    end

    local resultado_subtracao1 = subtracao(2, 2)
    local resultado_subtracao2 = subtracao(2, 3)
    local resultado_subtracao3 = subtracao(10, 5)

    print(resultado_subtracao1)
    print(resultado_subtracao2)
    print(resultado_subtracao3)
    ```

=== "Console"

    ```bash
    0
    -1
    5
    ```

## Operador de multiplicação (\*)

O operador de multiplicação (`*`) é utilizado para multiplicar dois valores.
No código em Lua abaixo, temos uma função chamada multiplicacao que recebe
dois parâmetros, `x` e `y`, e retorna o produto desses valores.

=== "Lua"

    ```lua
    local function multiplicacao(x, y)
        return x * y
    end

    local resultado_multiplicacao1 = multiplicacao(2, 2)
    local resultado_multiplicacao2 = multiplicacao(2, 3)
    local resultado_multiplicacao3 = multiplicacao(10, 5)

    print(resultado_multiplicacao1)
    print(resultado_multiplicacao2)
    print(resultado_multiplicacao3)
    ```

=== "Console"

    ```bash
    4
    6
    50
    ```

## Operador de divisão (/)

O operador de divisão (`/`) é utilizado para dividir um valor por outro.
No código em Lua abaixo, temos uma função chamada divisao que recebe dois
parâmetros, `x` e `y`, e retorna o quociente da divisão desses valores.

=== "Lua"

    ```lua
    local function divisao(x, y)
        return x / y
    end

    local resultado_divisao1 = divisao(4, 2)
    local resultado_divisao2 = divisao(5, 2)
    local resultado_divisao3 = divisao(10, 3)

    print(resultado_divisao1)
    print(resultado_divisao2)
    print(resultado_divisao3)
    ```

=== "Console"

    ```bash
    2.0
    2.5
    3.3333333333333
    ```

!!! tip

    Em lua, se você tentar realizar operações aritméticas entre strings, por
    exemplo `"2" + "2"` ou `"10" / "5"`, o próprio Lua é capaz de converter
    implicitamente essas strings em números e realizar as operações
    corretamente. Isso significa que você não precisa usar explicitamente
    a função `tonumber()` para converter as strings em números antes de realizar
    as operações.

## Operador de resto da divisão (%)

O operador de resto da divisão (`%`) é utilizado para obter o resto da divisão
entre dois valores. No código em Lua abaixo, temos uma função chamada
restoDivisao que recebe dois parâmetros, `x` e `y`, e retorna o resto da divisão
entre esses valores.

=== "Lua"

    ```lua
    local function restoDivisao(x, y)
        return x % y
    end

    local resultado_restoDivisao1 = restoDivisao(7, 3)
    local resultado_restoDivisao2 = restoDivisao(10, 4)
    local resultado_restoDivisao3 = restoDivisao(15, 6)

    print(resultado_restoDivisao1)
    print(resultado_restoDivisao2)
    print(resultado_restoDivisao3)
    ```

=== "Console"

    ```bash
    1
    2
    3
    ```

## Operador de exponenciação (^)

O operador de exponenciação (`^`) em Lua é usado para calcular a potência de
um número. Ele permite elevar um número à potência de outro número.

A sintaxe para usar o operador de exponenciação é: base `^` expoente.

=== "Lua"

    ```lua
    local base = 2
    local expoente = 3
    local resultado = base ^ expoente

    print(resultado)
    ```

=== "Console"

    ```bash
    8.0
    ```

## Avaliação de Expressões em Lua (carregando chunk)

Em Lua, é possível avaliar expressões dinamicamente utilizando a função
`load()`.
Isso permite que você execute cálculos com expressões representadas como
strings.

!!! info

    A função load em Lua é usada para carregar e compilar um trecho de código
    (conhecido como "chunk"). Ela permite que você converta uma string contendo
    código Lua em uma função executável ou carregue um trecho de código de uma
    função existente.

=== "Lua"

    ```lua
    local expression = "10 * 2 - 5"

    local operacao, err = load("return " .. expression)

    if type(operacao) == "nil" then
      return
    end

    if not err then
      local resultado = operacao()

      print(string.format("%s = %d", expression, resultado))
    else
      print(err)
    end
    ```

=== "Console"

    ```bash
    10 * 2 - 5 = 15
    ```
