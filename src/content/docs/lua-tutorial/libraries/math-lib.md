---
title: Biblioteca Math
description: funções da biblioteca math
sidebar:
  order: 1
---

## Funções Aritméticas Básicas

- **`math.abs(x)`**: Retorna o valor absoluto de `x`.
- **`math.ceil(x)`**: arredonda `x` na direção do positivo.
- **`math.floor(x)`**: arredonda `x` em direção ao negativo.
- `math.modf`: arredonda `x` arredonda em direção a zero e também retorna a parte fracionária.
- **`math.fmod(x, y)`**: retorna o resto da divisão de `x` por `y` (com o sinal do dividendo).
- **`math.max(x, y, ...)`**: Retorna o maior valor entre os argumentos.
- **`math.min(x, y, ...)`**: Retorna o menor valor entre os argumentos.
- **`math.pow(x, y)`**: Retorna `x` elevado à potência de `y`.
- **`math.sqrt(x)`**: Retorna a raiz quadrada de `x`.

```lua
local absolute_value = math.abs(-5) -- Retorna 5
print("Valor absoluto: " .. absolute_value)

local ceiling_value = math.ceil(3.14) -- Retorna 4
print("Valor teto: " .. ceiling_value)

local floor_value = math.floor(3.14) -- Retorna 3
print("Valor piso: " .. floor_value)

local max_value = math.max(10, 20, 5, 15) -- Retorna 20
print("Valor máximo: " .. max_value)

local min_value = math.min(10, 20, 5, 15) -- Retorna 5
print("Valor mínimo: " .. min_value)

local power_value = math.pow(2, 3) -- Retorna 8
print("Valor da potência: " .. power_value)

local square_root = math.sqrt(25) -- Retorna 5
print("Raiz quadrada: " .. square_root)
```

## Funções Aleatórias

- **`math.random([m, n])`**: Retorna um número pseudoaleatório.
- **`math.randomseed(x)`**: Define a semente para o gerador de números aleatórios.

```lua
math.randomseed(os.time()) -- Inicializa o gerador de números aleatórios
local random_value = math.random(1, 100) -- Retorna um inteiro aleatório entre 1 e 100
print("Valor aleatório: " .. random_value)
```

## Constantes Matemáticas

- **`math.pi`**: Retorna o valor de π (pi).
- **`math.huge`**: Uma constante representando um valor numérico maior que qualquer outro valor numérico representável em Lua.
- **`math.mininteger`  Um número representando valor mínimo de um `integer`**
- `math.maxinteger` Um número representando valor máximo de um `integer`

```lua
local pi_value = math.pi
print("Pi value: " .. pi_value)-- Pi value: 3.1415926535898

local hugenumber = math.huge
print("Huge number value: " .. hugenumber) -- Huge number value: inf

local mininteger = math.mininteger
print("Min integer value: " .. mininteger) -- Min integer value: -9223372036854775808

local maxinteger = math.maxinteger
print("Max integer value: " .. maxinteger) -- Max integer value: 9223372036854775807
```

## Funções Trigonométricas

- **`math.sin(x)`**: Retorna o seno de `x` (em radianos).
- **`math.cos(x)`**: Retorna o cosseno de `x` (em radianos).
- **`math.tan(x)`**: Retorna a tangente de `x` (em radianos).
- **`math.asin(x)`**: Retorna o arco seno de `x` (em radianos).
- **`math.acos(x)`**: Retorna o arco cosseno de `x` (em radianos).
- **`math.atan(x)`**: Retorna o arco tangente de `x` (em radianos).
- **`math.atan2(y, x)`**: Retorna o arco tangente de `y/x` (em radianos), usando os sinais de ambos os argumentos para encontrar o quadrante correto.

```lua
local angulo = math.pi / 4
print("Seno de 45 graus:", math.sin(angulo))
print("Cosseno de 45 graus:", math.cos(angulo))
print("Tangente de 45 graus:", math.tan(angulo))

local valor = 0.707
print("Arco seno de 0.707:", math.asin(valor))
print("Arco cosseno de 0.707:", math.acos(valor))
print("Arco tangente de 1:", math.atan(1))
print("Arco tangente de 1/1:", math.atan2(1,1))
```

## Funções úteis

- **`math.tointeger(x)`**: Se o valor `x` for conversível em um número inteiro, retorna esse inteiro. Caso contrário, retorna `nil`.
- **`math.type(x)`**: Retorna o tipo do número `x` (como `"integer"` ou `"float"`). 
