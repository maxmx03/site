# Operadores Lógicos

Os operadores lógicos testam e combinam condições lógicas. Eles permitem
que você avalie a veracidade de expressões e tome decisões com base nesses
resultados. Os operadores lógicos são comumente usados em estruturas de
controle condicional, como condicionais if-else e loops, para determinar o
fluxo de execução do programa.

!!! note

    Em Lua, qualquer valor que não seja `false` é considerado `true`.
    Apenas dois valores representam `false` para operadores lógicos, o valor
    constante de `false` e `nil`; todos os outros valores são considerados como
    verdadeiros.

## Operador lógico "and"

O operador lógico `and` retorna o primeiro valor falso encontrado ou o último
valor verdadeiro caso todos sejam verdadeiros.

=== "Lua"

    ```lua
    local x = true and false
    local y = true and true
    local z = false and true
    local t = true and true and "" and 0 -- todos so valores são verdadeiros.

    print(x)
    print(y)
    print(z)
    print(t)
    ```

=== "Console"

    ```bash
    false
    true
    false
    0
    ````

## Operador lógico "or"

O operador lógico `or` retorna o primeiro valor verdadeiro encontrado ou o
último valor falso, caso todos sejam falsos.

=== "Lua"

    ```lua
    local x = false or true
    local y = true or true
    local z = false or false
    local f = false or false or nil -- todos os valores são falsos

    print(x)
    print(y)
    print(z)
    print(f)
    ```

=== "Console"

    ```bash
    true
    true
    false
    nil
    ```

## Operador lógico "not"

O operador lógico `not` inverte o valor de um operando. Se o operando for
verdadeiro, retorna `false`; se o operando for falso, retorna `true`.

=== "Lua"

    ```lua
    local x = not true
    local y = not false

    print(x)
    print(y)
    ```

=== "Console"

    ```bash
    false
    true
    ```
