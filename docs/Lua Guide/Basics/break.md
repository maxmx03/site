# Break

O `break` pode ser utilizado para interromper a execução de um loop.

=== "Lua"

    ```lua
    for i = 1, 10 do
      if i == 5 then
        break -- Interrompe o loop quando i é igual a 5
      end

      print("Current value:", i)
    end
    ```

=== "Console"

    ```bash
    Current value:  1
    Current value:  2
    Current value:  3
    Current value:  4
    ```

## Continue

Em Lua, não há uma instrução nativa de `continue`. No entanto, você pode
simular o comportamento do `continue` usando um `if` para pular para a próxima
iteração do loop.

=== "Lua"

    ```lua
    for i = 1, 10 do
      if i == 5 then
        goto continue -- Simula o 'continue', pulando para a próxima iteração do loop
      end

      print("Current value:", i)

      ::continue:: -- Rótulo 'continue'
    end
    ```

=== "Console"

    ```bash
    Current value:  1
    Current value:  2
    Current value:  3
    Current value:  4
    Current value:  6
    Current value:  7
    Current value:  8
    Current value:  9
    Current value:  10
    ```
