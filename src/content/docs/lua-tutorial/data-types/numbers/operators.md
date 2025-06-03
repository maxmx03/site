---
title: Operadores aritméticos
description: operações aritméticas
sidebar:
  order: 2
---

Segue a lista dos operadores aritméticos:

- **`+`** adição
- `-` subtração
- `*` multiplicação
- **`/`** divisão com ponto flutuante
- **`//`** divisão inteira (`floor division`)
- **`%`** módulo (resto da divisão)
- **`^`** exponenciação
- `-` negação numérica (`unary minus`)

Os operadores de soma, subtração e multiplicação seguem a regra de que, se um número for `float` e o outro for `integer`, o resultado será `float`. Porém, se ambos forem `integer`, o resultado será `integer`. Na divisão, o resultado será sempre `float`.

| Operação | Resultado | Descrição |
| --- | --- | --- |
| 10 + 5 | 15 | Soma |
| 10 - 5 | 5 | Subtração  |
| 10 * 5 | 50 | Multiplicação  |
| 10 / 3 | 3.3333333333333 | Divisão |
| 10 // 3 | 3 |  Divisão inteira |
| 10 % 3 | 1 |  Módulo (resto da divisão) |
| 10 ^ 2 | 100.0 | Exponenciação  |


## Operador de divisão inteira

Este operador foi introduzido na versão 5.3. A divisão com este operador sempre arredondará o número na direção do negativo.

$$
\overleftarrow{\quad -3 \quad -2 \quad -1 \quad ...}
$$

Exemplo:

```lua
> 5 // 2 -- 2
> -5 // 2 -- 3
> 20 // 7 -- 2
> -20 // 7 -- 3
```

## Precedência


| Operador | Descrição |
| --- | --- |
| `^` | Exponenciação  |
| `- # ~ not` | Operadores unários |
| `* / // %` | Multiplicação, Divisão, Divisão Inteiro, Módulo |
| `+ -` | Adição e Subtração  |
| `..` | Concatenação  |
| `<< >>` | Operador bit a bit |
| `&` | Operador bit a bit |
| `~` | Operador bit a bit |
| `|` | Operador bit a bit |
| `< > <= >= ~= ==` | Operadores Relacionais |
| `and` | Operador Lógico |
| `or` | Operador Lógico |


```lua
local resultado = 2 + 3 * 4 -- A multiplicação tem precedência maior que a adição
print("Resultado de 2 + 3 * 4: " .. resultado) -- Saída: 14

local resultado2 = (2 + 3) * 4 -- Os parênteses mudam a ordem das operações
print("Resultado de (2 + 3) * 4: " .. resultado2) -- Saída: 20

local resultado3 = 2 ^ 3 * 4 -- A exponenciação tem precedência maior que a multiplicação
print("Resultado de 2 ^ 3 * 4: " .. resultado3) -- Saída: 32.0
```

[https://youtu.be/7p-yFq6pYos](https://youtu.be/7p-yFq6pYos)
