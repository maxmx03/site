# String

Uma string em Lua é uma sequência de caracteres. Ela é frequentemente usada
para representar palavras, frases e textos em geral.

## Tamanho da String

Para obter o tamanho de uma string em Lua, você pode utilizar o operador de
comprimento `#` ou a função `string.len()`.

Neste exemplo, a variável hello contém a string "Olá, mundo".
Usando o operador #, podemos obter o tamanho da string e armazená-lo na
variável length. Da mesma forma, a função string.len() também retorna o
tamanho da string. Ambos os valores são impressos no console usando a função
print().

```lua
local hello = "Olá, mundo"
local length = #hello
local length2 = string.len(hello)

print(string.format("Tamanho da string: %s", length))
print(string.format("Tamanho da string: %s", length2))
```

Ao executar esse código, você verá a saída que exibe o tamanho da string:

```bash
Tamanho da string: 11
Tamanho da string: 11
```

## Concatenação de strings

Em Lua, a concatenação de strings é realizada utilizando o operador de
concatenação (`..`). Esse operador permite combinar duas ou mais strings
em uma única string.

```lua
local str = "Lua"
str = str .. " programming"
print(str)
```

Saída:

```bash
Lua programming
```

Além da concatenação, você também pode usar a função `string.format` para
formatar strings em Lua. Essa função permite combinar valores e strings
formatadas em uma única string, seguindo um padrão definido.

```lua
local name = "Alice"
local age = 25
local message = string.format("Olá, meu nome é %s e eu tenho %d anos.", name, age)
print(message)
```

Saída:

```bash
Olá, meu nome é Alice e eu tenho 25 anos.
```

## Coerção de Strings

Em Lua, a coerção de strings é o processo de converter outros tipos de dados
em strings. Isso pode ser útil em situações em que você precisa representar um
valor não string como uma string.

Existem várias maneiras de realizar a coerção de strings em Lua:

**Concatenação Implícita**: Uma forma comum de coerção de strings é através
da concatenação implícita.
Quando você usa o operador de concatenação (`..`) para combinar uma string com
outro tipo de dado, Lua automaticamente converte o valor para uma string.

```lua
local number = 42
local str = "O número é: " .. number
print(str)
```

Saída:

```lua
O número é: 42
```

Nesse exemplo, o valor da variável number é implicitamente convertido para uma
string durante a concatenação com a string `"O número é: "`. O resultado é a
string final "O número é: 42".

**Função tostring**: Outra forma de realizar a coerção de strings é utilizando
a função tostring(). Essa função converte explicitamente um valor para sua
representação em string.

```lua
local boolean = true
local str = "O valor booleano é: " .. tostring(boolean)
print(str)
```

Saída:

```lua
O valor booleano é: true
```

!!! tip

    Quando você tenta modificar uma string existente, uma nova string
    é criada em um novo endereço de memória, com o valor modificado, enquanto
    a string original permanece inalterada em seu endereço de memória original.
    Isso ocorre porque as strings em Lua são imutáveis, ou seja, uma vez que
    uma string é criada, seu conteúdo não pode ser alterado diretamente.
