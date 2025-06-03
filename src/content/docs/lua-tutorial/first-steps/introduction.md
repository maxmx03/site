---
title: Introdução
description: introdução do curso de lua
sidebar:
  order: 1
banner:
  content: |
    Este curso está disponível gratuitamente no YouTube. Acesse a
    <a href="https://www.youtube.com/playlist?list=PLRQTSis2KT5Ew_CzMe-uff7LksfN1shXy">Playlist</a>
---

Lua é uma linguagem de programação poderosa, eficiente e leve, projetada para estender aplicações, desenvolvida no Brasil, por uma [equipe](https://www.lua.org/authors.html) na [PUC-Rio](https://www.puc-rio.br/)

## Exemplo 1

```lua
local Person = {}

function Person:new(obj)
    setmetatable(obj, self)
    self.__index = self

    return obj
end

local person = Person:new({ name = "Max", age = 17 })

print("Name: " .. person.name)
print("Age: " .. person.age)
```

## Exemplo 2

```lua
function sum(a, b)
    return a + b
end

local n1, n2 = 1, 2
local result = sum(n1, n2)
print(string.format("%s + %s = %s", n1, n2, result))
```
