# Comentários

Em Lua, existem duas maneiras de adicionar comentários ao seu código.

## Comentários de uma linha

Os comentários de uma linha são criados utilizando dois hífens (`--`). Tudo que
estiver após os hífens em uma linha será considerado um comentário e será
ignorado pelo interpretador Lua.

```lua
-- Este é um comentário de uma linha
```

## Comentários de várias linhas

Os comentários de várias linhas são delimitados por `--[[no início e]]` no
final. Todo o conteúdo entre esses delimitadores será considerado um comentário
e será ignorado pelo interpretador.

```lua
--[[
  Este é um comentário
  de múltiplas linhas
]]
```

!!! tip

    Comentários são uma maneira importante de documentar o seu código em Lua.
    Eles ajudam a fornecer informações adicionais, explicar a lógica por trás
    do código.
