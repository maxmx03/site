# Tipos de Dados

Em Lua, existem vários tipos de dados que você pode utilizar para armazenar
e manipular informações. Vamos explorar alguns dos principais tipos de
dados em Lua:

## nil

O tipo de dado nil representa a ausência de dados. Ele é utilizado quando um
determinado valor é inválido, desconhecido ou não existe. O nil é a melhor
maneira de representar que algo é inválido ou desconhecido.

```lua
local foo
local bar = type(foo)

print(foo) -- nil
print(bar) -- nil
```

## boolean

O tipo de dado booleano representa um valor verdadeiro (true) ou falso (false).
É um valor binário e só pode estar em um dos dois estados possíveis,
verdadeiro ou falso.

```lua
local foo = true
local bar = type(foo)

if foo then
    print("true") -- true
end

print(bar) -- boolean
```

## number

O tipo de dado number representa números reais. Pode representar qualquer
número real, incluindo zero, números negativos, inteiros e decimais.

```lua
local x = 10
local y = 5.5
local bx = type(x)
local by = type(y)

print(x + y) -- 15.5
print(bx, math.type(x)) -- number, integer
print(by, math.type(u)) -- number, float
```

## string

Uma string é uma sequência de caracteres. Ao declarar uma string literal,
ela deve ser "delimitada por aspas". As strings permitem armazenar
e manipular texto.

```lua
local foo = "foo"
local bar = type(foo)

print(foo) -- foo
print(bar) -- string
```

## function

Uma função é um bloco de código que é identificado por um nome e pode ser
executado em qualquer momento. Funções permitem que você organize e reutilize
o código de maneira eficiente.

```lua
local function add(x, y)
    return x + y
end

local x = 1
local y = 2
local result = add(x, y)

print(result) -- 3
print(type(add)) -- function
```

## table

Uma tabela é uma estrutura de dados que armazena informações utilizando pares
de chave e valor.

```lua
local fruits = { "apple", "ice cream", "orange" }

print(fruits[1]) -- apple
print(fruits[2]) -- ice cream
print(fruits[3]) -- orange
```

## userdata

O tipo de dado userdata permite a criação de estruturas de dados complexas
definidas na linguagem de programação C. Essas estruturas são utilizadas para
interagir com recursos de sistema ou bibliotecas externas.

## thread

Threads são utilizadas para executar código de forma paralela. Em vez de
executar um conjunto de comandos por vez, as threads permitem executar vários
conjuntos de comandos simultaneamente.

Esses são apenas alguns dos tipos de dados disponíveis em Lua. Cada tipo de
dado tem suas características e utilizações específicas, permitindo que você
manipule informações de maneira eficiente e flexível em seus programas.
