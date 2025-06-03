---
title: Coerção e Conversão
description: coerção e coversão
sidebar:
  order: 3
---

## Coerção

Lua possui uma característica de conversão automática de tipos entre números e strings durante a execução do código. Isso significa que, em certos contextos, Lua tentará converter automaticamente um número em uma string ou vice-versa, se a operação exigir.

### Concatenação de Número

```lua
print(5 .. 2) -- 52
```

### Operação Aritmética com Strings Numéricas

```lua
print("5" + "2") -- 7
```

## Conversão Explícita de Tipos

Embora Lua realize conversões automáticas, é uma boa prática realizar conversões explícitas para garantir a clareza do código e evitar comportamentos inesperados.

- **`tostring(valor)`:** Esta função converte um valor (número, booleano, etc.) em uma string.
- **`tonumber(valor [, base])`:** Esta função converte uma string em um número. Se a string não puder ser convertida em um número, a função retornará `nil`. O argumento opcional `base` especifica a base numérica da string (por exemplo, 16 para hexadecimal).

```lua
local numero = 10
local texto = tostring(numero) -- texto agora contém "10"

local textoNumerico = "20"
local numeroConvertido = tonumber(textoNumerico) -- numeroConvertido agora contém 20

local textoHexadecimal = "FF"
local numeroHexadecimal = tonumber(textoHexadecimal, 16) -- numeroHexadecimal agora contém 255
```
