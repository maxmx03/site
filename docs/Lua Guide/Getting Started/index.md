# Introdução a linguagem Lua

Lua é uma linguagem de programação poderosa, eficiente e leve, projetada para
estender aplicações. Ela permite programação procedural, programação
orientada a objetos, programação funcional, programação orientada a dados e
descrição de dados.

[fonte](https://www.lua.org/portugues.html)

```lua
function sum(a, b)
    return a + b
end

local n1, n2 = 1, 2
local result = sum(n1, n2)
print(string.format("%s + %s = %s", n1, n2, result))
```

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
