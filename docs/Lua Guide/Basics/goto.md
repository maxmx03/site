# Estrutura de Salto Goto

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
