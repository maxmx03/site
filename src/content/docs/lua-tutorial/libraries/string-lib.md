---
title: Biblioteca String
description: funções da biblioteca string
sidebar:
  order: 2
---

A Biblioteca String disponibiliza diversas funções dentro da tabela `string`. Ela também define uma metatabela `__index` para as nossas strings que aponta para a tabela `string`. Dessa forma, podemos acessar as funções da biblioteca diretamente na nossa string.

```lua
local hello = "ola %s"
local world = "mundo"
print(hello:format(world))

print(string.format("%s %s", "ola", "mundo"))
```

## String.format

A função `string.format` é uma ferramenta poderosa para formatar strings e converter números em strings. Ela retorna uma cópia do seu primeiro argumento (a "string de formato"), substituindo cada diretiva por uma versão formatada do argumento correspondente.

### **Diretivas de Formatação**

As diretivas na string de formato seguem regras semelhantes às da função `printf` em C. Uma diretiva consiste em um sinal de porcentagem (`%`) seguido de uma letra que indica como formatar o argumento:

- `%d` - Inteiro decimal
- `%x` - Hexadecimal (minúsculo)
- `%X` - Hexadecimal (maiúsculo)
- `%f` - Número de ponto flutuante
- `%s` - String
- `%q` - Formata booleanos, nil, números e strings de uma forma que o resultado é uma constante válida no código fonte Lua. Booleanos e nil são escritos da maneira óbvia (true, false, nil). Números de ponto flutuante são escritos em hexadecimal, para preservar a precisão total.

```lua
print(string.format("%d + %d = %d", 1, 1, 1 + 1)) -- 1 + 1 = 2
print(string.format("#%02x%02x%02x", 0, 255, 0)) -- #00ff00
print(string.format("#%02X%02X%02X", 0, 255, 0)) -- #00FF00
print(string.format("%02d/%02d/%04d", 3, 7, 2025))
print(string.format("%f", 100)) -- 100.000000
print(string.format("%.2f", 100)) -- 100.00
print(string.format("km %20.1f", 100)) -- km                100.0
print(string.format("%-20.1f km", 100)) -- 100.0                km
print(string.format("%.3d", 10)) -- 010
print(string.format("%.10f", 10.0)) -- 10.0000000000

```

## String.sub

A função `string.sub` é usada para extrair uma parte específica de uma string. Ela recebe três argumentos: a string original, o índice inicial e o índice final. Retorna a parte da string compreendida entre os índices inicial e final.

```lua
local mensagem = "Olá, mundo!"
local parte = string.sub(mensagem, 1, 4)

print(parte) -- Olá
```

## **String.find**

Busca uma substring dentro de uma string e retorna as posições inicial e final, ou `nil` se não encontrada:

```lua
local mensagem = "Olá, Lua!"
local inicio, fim = string.find(mensagem, "Lua")

print(inicio, fim) -- 7 9
```

## String.upper e String.lower

A função `string.upper` é usada para converter todos os caracteres de uma string em letras maiúsculas. Enquanto a função `string.lower` é usada para converter a string `palavra` em letras minúsculas.

```lua
local palavra = "lua"

local palavra_maiuscula = string.upper(palavra)
print(palavra_maiuscula) -- LUA

local palavra_minuscula = string.lower(palavra)
print(palavra_minuscula)  -- lua
```

## **String.reverse**

A função `string.reverse` é usada para inverter a ordem dos caracteres de uma string.

```lua
local palavra = "Lua"
local palavra_invertida = string.reverse(palavra)
print(palavra_invertida) -- auL
```

## **String.rep**

A função `string.rep` permite repetir uma string um determinado número de vezes. Ela recebe dois parâmetros: a string a ser repetida e a quantidade de vezes que ela deve ser repetida.

```lua
local original = "Olá!"
local repetido = string.rep(original, 3)
print(repetido) -- Olá!Olá!Olá!
```

## **String.gmatch**

A função `string.gmatch` é usada para iterar sobre as ocorrências de um padrão em uma string. Ela recebe dois parâmetros: a string a ser analisada e o padrão a ser procurado. Ela retorna uma função iteradora que pode ser usada em um loop `for`.

```lua
local texto = "Lua é uma linguagem de programação"

for palavra in string.gmatch(texto, "[%aéçã]+") do
  print(palavra)
end
```

saída:

```bash
Lua
é
uma
linguagem
de
programação
```

# **String.gsub**

Substitui todas as ocorrências de um padrão por outra string:

```lua
local texto = "Lua é uma linguagem de programação"
local novo_texto = string.gsub(texto, "linguagem", "idioma")
print(novo_texto) -- Lua é uma idioma de programação

print(string.gsub("ola pessoal", "l", "u")) -- oua pessoau   2
print(string.gsub("ola pessoal", "ss", "ç")) -- ola peçoal   1
print(string.gsub("ola pessoal", "a", ".")) -- ol. pesso.l   2

```

## Encontrar Padrões

Uma classe de caracteres é usada para representar um conjunto de caracteres. As seguintes combinações são permitidas para descrever uma classe de caracteres:

Elas são amplamente utilizadas em diversas funções da biblioteca de strings do Lua, como `string.match`, `string.gmatch` e `string.gsub`.

| Caractere de Classe | descrição |
| --- | --- |
| %a | representa todas as letras. |
| %c | representa todos os caracteres de controle. |
| %d | representa todos os dígitos. |
| %l | representa todas as letras minúsculas. |
| %p | representa todos os caracteres de pontuação. |
| %s | representa todos os caracteres de espaço. |
| %u | representa todas as letras maiúsculas. |
| %w | representa todos os caracteres alfanuméricos. |
| %x | representa todos os dígitos hexadecimais (0-9, a-f, A-F). |
| %z | representa o caractere com representação 0. |
| %x | representa o próprio caractere x (ex: %., %ç, %õ) |
| [set] | representa a classe que é a união de todos os caracteres no conjunto |
| [^set] | representa o complemento do conjunto, onde o conjunto é interpretado como descrito acima. |
