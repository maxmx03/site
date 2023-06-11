# Biblioetca de Strings

O poder de um interpretador Lua bruto para manipular strings é bastante
limitado. Um programa pode criar literais de strings e concatená-las. Mas ele
não pode extrair uma subcadeia, verificar seu tamanho ou examinar seu
conteúdo. Todo o poder de manipulação de strings em Lua vem de sua biblioteca
de strings.

## Extrair parte da string (String.sub)

A função `string.sub` é usada para extrair uma parte específica
de uma string. Ela recebe três argumentos: a string original, o índice inicial
e o índice final. Retorna a parte da string compreendida entre os índices
inicial e final.

Exemplo de uso:

```lua
local mensagem = "Olá, mundo!"
local parte = string.sub(mensagem, 1, 4)

print(parte)
```

Saída:

```bash
Olá
```

Neste exemplo, a função `string.sub` é usada para extrair os primeiros quatro
caracteres da string mensagem e armazená-los na variável `parte`.

!!! warning

    Quando você tenta modificar uma string, uma nova string é criada em um
    novo endereço de memória, com o valor modificado, enquanto a string original
    permanece inalterada em seu endereço de memória original. Isso ocorre
    porque as strings em Lua são imutáveis, ou seja, uma vez que uma string é
    criada, seu conteúdo não pode ser alterado diretamente.

## Encontrar ocorrência em uma string (string.find)

A função `string.find` é usada para encontrar a primeira ocorrência de um
padrão em uma string. Ela recebe dois argumentos: a string original e o padrão
a ser buscado. Retorna os índices inicial e final da primeira ocorrência do
padrão na string.

Exemplo de uso:

```lua
local mensagem = "Olá, Lua!"
local inicio, fim = string.find(mensagem, "Lua")
```

Saída:

```lua
7 9
```

Neste exemplo, a função `string.find` é usada para encontrar a primeira
ocorrência da palavra "Lua" na string `mensagem`. Os índices inicial e final
da ocorrência são armazenados nas variáveis `inicio` e `fim`, respectivamente.

## Deixar string em maiúsculas (string.upper)

A função `string.upper` é usada para converter todos os caracteres de uma
string em letras maiúsculas.

Exemplo de uso:

```lua
local palavra = "lua"
local palavra_maiuscula = string.upper(palavra)

print(palavra_maiuscula)  -- Saída: "LUA"
```

Saída:

```lua
LUA
```

Neste exemplo, a função `string.upper` é usada para converter a string `palavra`
em letras maiúsculas e armazená-la na variável `palavra_maiuscula`.

## Deixar string em minúscula (string.lower)

A função string.lower é usada para converter todos os caracteres de uma string
em letras minúsculas.

Exemplo de uso:

```lua
local palavra = "LUA"
local palavra_minuscula = string.lower(palavra)
print(palavra_minuscula)  -- Saída: "lua"
```

Saída:

```lua
lua
```

Neste exemplo, a função `string.lower` é usada para converter a string `palavra`
em letras minúsculas e armazená-la na variável `palavra_minuscula`.

## Inverter os caracters de uma string (string.reverse)

A função `string.reverse` é usada para inverter a ordem dos caracteres de uma
string.

Exemplo de uso:

```lua
local palavra = "Lua"
local palavra_invertida = string.reverse(palavra)
print(palavra_invertida)
```

Saída:

```lua
auL
```

Neste exemplo, a função `string.reverse` é usada para inverter a ordem dos
caracteres da string `palavra` e armazená-la na variável `palavra_invertida`.

## Repetir uma String (string.rep)

A função `string.rep` permite repetir uma string um determinado número de vezes.
Ela recebe dois parâmetros: a string a ser repetida e a quantidade de vezes que
ela deve ser repetida.

Exemplo de uso:

```lua
local original = "Olá!"
local repetido = string.rep(original, 3)
print(repetido)
```

Saída:

```lua
Olá!Olá!Olá!
```

Neste exemplo, a string `"Olá!"` é repetida três vezes, resultando na saída
`"Olá!Olá!Olá!"`.

## Encontrar Padrões em uma String (string.gmatch)

A função `string.gmatch` é usada para iterar sobre as ocorrências de um padrão
em uma string. Ela recebe dois parâmetros: a string a ser analisada e o padrão
a ser procurado. Ela retorna uma função iteradora que pode ser usada em um
loop `for`.

Exemplo de uso:

```lua
local texto = "Lua é uma linguagem de programação"
for palavra in string.gmatch(texto, "%a+") do
  print(palavra)
end

```

Saída:

```lua
Lua
é
uma
linguagem
de
programação
```

Neste exemplo, a expressão `"%a+"` é utilizada como padrão para encontrar
palavras na string `texto`. O loop `for` itera sobre todas as palavras
encontradas ias imprime.

## Substituir Padrões em uma String (string.gsub)

A função string.gsub é usada para substituir todas as ocorrências de um padrão
em uma string por outro valor. A sintaxe básica é a seguinte:

```lua
local texto = "Lua é uma linguagem de programação"
local novo_texto = string.gsub(texto, "linguagem", "idioma")
print(novo_texto)
```

Saída:

```lua
Lua é uma idioma de programação
```

Neste exemplo, a palavra "linguagem" é substituída por "idioma" na string
`texto`. A função `string.gsub` retorna a nova string com as substituições
aplicadas. A saída será `"Lua é uma idioma de programação"`.

## Expressões de Padrão no Lua

As expressões de padrão são sequências especiais de caracteres usadas para
buscar padrões específicos em uma string. Elas são amplamente utilizadas em
diversas funções da biblioteca de strings do Lua, como `string.match`,
`string.gmatch` e `string.gsub`.
Essas expressões permitem realizar correspondências avançadas e flexíveis em
uma string.

| Expressão  | Descrição                                                               |
| ---------- | ----------------------------------------------------------------------- |
| "%a+"      | Encontra palavras (sequência de letras)                                 |
| "%d+"      | Encontra números                                                        |
| "%s+"      | Encontra espaços em branco                                              |
| "%w+"      | Encontra caracteres alfanuméricos                                       |
| "%l+"      | Encontra letras minúsculas                                              |
| "%u+"      | Encontra letras maiúsculas                                              |
| "%p+"      | Encontra caracteres de pontuação                                        |
| "%x+"      | Encontra dígitos hexadecimais (0-9, a-f, A-F)                           |
| "[aeiou]+" | Encontra sequências de vogais                                           |
| "[^%d%s]+" | Encontra sequências de caracteres não numéricos e não espaços em branco |