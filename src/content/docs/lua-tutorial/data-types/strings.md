---
title: Strings
description: Strings são utilizadas para representar textos em Lua.
sidebar:
  order: 1
---

Strings são utilizadas para representar textos em Lua. Elas são sequências de `bytes` e podem armazenar caracteres Unicode.
Strings são **imutáveis**, ou seja, não podemos modificar diretamente seus valores. Para alterar uma `string`, é necessário criar uma nova variável com os valores desejados.
Além disso, não precisamos nos preocupar com a alocação e desalocação de memória para `strings`, pois Lua gerencia isso automaticamente.

```lua
local a,b

a = "Olá, pessoal"
b = string.gsub(a, "pessoal", "mundo")
print(a) -- Olá, pessoal
print(b) -- Olá, mundo!
```

## Tamanho de uma String

Podemos utilizar o operador de tamanho (`#`) para obter o número de caracteres de uma `string`.

> O operador `#` irá contar o tamanho em **bytes**, o que pode não ser o mesmo que o número de **caracteres**, especialmente em strings que contêm caracteres Unicode.
> 

```lua
local msg

msg = "Oi"
print(#msg) -- 2
```

## Concatenação

Podemos concatenar `strings` utilizando o operador de concatenação (`..`). Quando o operador é usado com um número, Lua automaticamente converte esse número para uma `string`.

```lua
> "Olá" .. ", mundo!" -- Olá, mundo!
```

## Sequência de Escape

Lua utiliza sequências de escape semelhantes às da linguagem C para representar caracteres especiais dentro de `strings`.

| Caractere | Nome |
| --- | --- |
| \a | Sinal sonoro (bell) |
| \b | Retrocesso (back space) |
| \f | Alimentação de formulário (form feed) |
| \n | Nova linha (newline) |
| \r | Retorno de carro (carriage return) |
| \t | Tabulação horizontal (horizontal tab) |
| \v | Tabulação vertical (vertical tab) |
| \ | Barra invertida (backslash) |
| \" | Aspas duplas (double quote) |
| \' | Aspas simples (single quote) |

## Strings Longas

Podemos delimitar trechos extensos de texto ou blocos de código utilizando `[[` e `]]` em Lua.

```lua
local pagina = [[
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title></title>
    <link href="css/style.css" rel="stylesheet">
  </head>
  <body>
  </body>
</html>
]]
```

Às vezes, precisamos escrever: `[` , dentro da nossa `string`, para isso utilizamos `[===[` , como no exemplo abaixo:

```lua
string_longa = [===[
Aqui podemos colocar qualquer texto, 
mesmo que contenha ]] dentro.
]===]
```
