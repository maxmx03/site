# Outros Operadores em Lua

Além dos operadores lógicos discutidos anteriormente, Lua também possui
outros operadores úteis que podem ser usados em expressões.
Vamos explorar dois desses operadores: o operador de concatenação (`..`) e o
operador de comprimento (`#`).

## Operador de Concatenação (..)

O operador de concatenação (`..`) é usado para combinar duas strings em uma única string. Ele permite que você junte o conteúdo de duas variáveis ​​ou strings literais em uma única string.

=== "Lua"

    ```lua
    local str1 = "Hello"
    local str2 = " World"
    local result = str1 .. str2

    print(result)
    ```

=== "Console"

    ```bash
    Hello World
    ```

## Operador de Comprimento (#)

O operador de comprimento (`#`) é usado para obter o tamanho de uma string ou o número de elementos em uma tabela. Ele retorna o comprimento da string ou o número de elementos contidos na tabela.

Exemplo com string:

=== "Lua"

    ```lua
    local str = "Hello"
    local length = #str

    print(length)
    ```

=== "Console"

    ```bash
    5
    ```

Exemplo com tabela:

=== "Lua"

    ```lua
    local tbl = {10, 20, 30, 40, 50}
    local size = #tbl

    print(size)
    ```

=== "Console"

    ```bash
    5
    ```
