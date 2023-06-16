# Biblioteca Math

A biblioteca `math` em Lua fornece várias funções matemáticas.
Essas funções são úteis para lidar com operações trigonométricas, conversões
de graus e radianos, valores absolutos, geração de números aleatórios.

## Math.acos

A Função `math.acos` retorna o arco cosseno de um valor, em radianos.

## Math.asin

A função `math.asin` retorna o arco seno de um valor, em radianos

## Math.atan

A função `math.atan` retorna o arco tangente de um valor, em radianos

## Math.cos

A função `math.cos` retorna o cosseno de um valor, em radianos

## Math.sin

A função `math.sin` retorna o seno de um valor, em radianos

## Math.tan

A função `math.tan` retorna a tangente de um valor, em radianos

## Math.deg

A função `math.deg` converte um valor de radianos para graus.

## Math.rad

A função `math.rad` converte um valor de graus para radianos

## Math.abs

A função `math.abs` retorna o valor absoluto de um número

## Math.tointerger

A função `math.tointerger` converte um valor para um número inteiro, truncando
a parte decimal.

## Math.max

A função `math.max(x, y)` retorna o maior valor entre dois ou mais valores
fornecidos.

## Math.min

A função `math.min(x, y)` retorna o menor valor entre dois ou mais valores
fornecidos.

## Math.ult

A função `math.ult(x, y)` retorna `true` se o valor de `x` for menor que o
valor de `y`

```lua
local x = 10
local y = 15

if math.ult(x, y) then
    print("x é menor que y")
else
    print("x não é menor que y")
end
```

## Math.random

A função `math.random(min, max)` retorna um número aleatório entre 0 e 1.

```lua
math.randomseed(os.time())

local numeroAleatorio1 = math.random(1, 10)
local numeroAleatorio2 = math.random(1, 10)

print(numeroAleatorio1, numeroAleatorio2)
```
