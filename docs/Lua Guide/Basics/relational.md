# Operadores Relacionais

Operadores relacionais compara dois valores e sempre retorna um valor `boolean`
como resultado.
Esses operadores testam sobre igualdade e diferença e quais dos argumentos
é menor ou maior que o outro.

!!! info

    Os operadores de relacionais são comumente usados em estruturas
    de controle condicional para tomar decisões com base nas comparações de
    valores.

## Operador de igualdade (==)

O operador de igualdade (`==`) compara se o valor à esquerda é igual ao valor
da à direita. Retorna `true` se a comparação for verdadeira e `false` caso
contrário.

=== "Lua"

    ```lua
    local x = 2 == 2
    local y = "a" == "b"
    local z = "a" == "a"

    print(x)
    print(y)
    print(z)
    ```

=== "Console"

    ```bash
    true
    false
    true
    ```

No exemplo acima, `x` é `true` porque 2 é igual a 2. `y` é `false` porque "a"
não é igual a "b". `z` é `true` porque "a" é igual a "a".

## Operador de diferença (~=)

O operador de diferença (`~=`) compara se o valor à esquerda é diferente do
valor à direita. Retorna `true` se a comparação for verdadeira e `false` caso
contrário.

=== "Lua"

    ```lua
    local x = 2 ~= 2
    local y = "a" ~= "b"
    local z = "a" ~= "a"

    print(x)
    print(y)
    print(z)
    ```

=== "Console"

    ```bash
    false
    true
    false
    ```

## Operador de maior que (>) e menor que (<)

O operador de maior que (`>`) compara se o valor à esquerda é estritamente maior
que o valor à direita. Retorna `true` se a comparação for verdadeira e `false`
caso contrário.

O operador de menor que (`<`) compara se o valor esquerda estritamente menor
que o valor direita. Retorna `true` se a compara o for verdadeira e `false`
caso contrário.

=== "Lua"

    ```lua
    local x = 5 > 2
    local y = 3 < 1
    local z = "lua" > "Lua"

    print(x)
    print(y)
    print(z)
    ```

=== "Console"

    ```bash
    true
    false
    true
    ```

No exemplo acima, `x` é `true` porque 5 é maior que 2. `y` é `false` porque 3
não é menor que 1, `z` é `true` porque na comparação de strings, a ordem
lexicográfica é levada em consideração, e "lua" é considerado maior que "Lua"
nesse caso.

## Operador de maior ou igual (>=) e menor ou igual (<=)

O operador de maior ou igual (`>=`) compara se o valor à esquerda é maior ou
igual ao valor à direita. Retorna `true` se a comparação for verdadeira e `false`
caso contrário.

O operador de menor ou (`<=`) compara se o valor à esquerda é menor ou igual ao
valor à direita. Retorna `true` se a comparação for verdadeira e `false` caso
contrário.

=== "Lua"

    ```lua
    local x = 5 >= 2
    local y = 3 <= 1
    local z = "lua" >= "Lua"

    print(x)
    print(y)
    print(z)
    ```

=== "Console"

    ```bash
    true
    false
    true
    ```

No exemplo acima, `x` é `true` porque 5 é maior ou igual a 2. `y` é `false`
porque 3 não é menor ou igual a 1. `z` é `true` porque na comparação de
strings, a ordem lexicográfica é levada em consideração, e "lua" é
considerado maior ou igual a "Lua" nesse caso.
