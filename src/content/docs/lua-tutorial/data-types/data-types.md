---
title: Tipos de dados
description: tipos de dados do lua
---

Lua possui oito tipos de dados: `nil`, `boolean`, `number`, `string`, `userdata`, `function`, `thread`, e `table` .

```lua
type(nil) -- nil
type(true) -- boolean
type(1 + 1) -- number
type("Ola") -- string
type(io.stdin) -- userdata
type(print) -- function
type({}) -- table
```
