# String

Uma string em Lua é uma sequência de caracteres. Ela é frequentemente usada
para representar palavras, frases e textos em geral.

## Tamanho da String

Para obter o tamanho de uma string em Lua, você pode utilizar o operador de
comprimento `#` ou a função `string.len()`.

Neste exemplo, a variável hello contém a string `"Olá, mundo"`.
Usando o operador `#`, podemos obter o tamanho da string e armazená-lo na
variável length. Da mesma forma, a função `string.len()` também retorna o
tamanho da string. Ambos os valores são impressos no console usando a função
`print()`.

=== "Lua"

    ```lua
    local hello = "Olá, mundo"
    local length = #hello
    local length2 = string.len(hello)

    print(string.format("Tamanho da string: %s", length))
    print(string.format("Tamanho da string: %s", length2))
    ```

=== "Console"

    ```bash
    Tamanho da string: 11
    Tamanho da string: 11
    ```

## Concatenação de strings e string.format()

Em Lua, a concatenação de strings é realizada utilizando o operador de
concatenação (`..`). Esse operador permite combinar duas ou mais strings
em uma única string.

=== "Lua"

    ```lua
    local str = "Lua"
    str = str .. " programming"
    print(str)
    ```

=== "Console"

    ```bash
    Lua programming
    ```

Além da concatenação, você também pode usar a função `string.format` para
formatar strings em Lua. Essa função permite combinar valores e strings
formatadas em uma única string, seguindo um padrão definido.

| Especificador | Descrição                                                  |
| ------------- | ---------------------------------------------------------- |
| `%s`          | Formata o argumento como uma string                        |
| `%d`          | Formata o argumento como um número decimal inteiro         |
| `%f`          | Formata o argumento como um número de ponto flutuante      |
| `%c`          | Formata o argumento como um caractere ASCII                |
| `%o`          | Formata o argumento como um número octal                   |
| `%x` ou `%X`  | Formata o argumento como um número hexadecimal             |
| `%%`          | Insere um caractere de porcentagem literal (`%`) na string |

Exemplo:

=== "Lua"

    ```lua
    local name = "Alice"
    local age = 25
    local message = string.format("Olá, meu nome é %s e eu tenho %d anos.", name, age)
    print(message)
    ```

=== "Console"

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

=== "Lua"

    ```lua
    local number = 42
    local str = "O número é: " .. number
    print(str)
    ```

=== "Console"

    ```lua
    O número é: 42
    ```

Nesse exemplo, o valor da variável number é implicitamente convertido para uma
string durante a concatenação com a string `"O número é: "`. O resultado é a
string final `"O número é: 42"`.

**Função tostring**: Outra forma de realizar a coerção de strings é utilizando
a função `tostring()`. Essa função converte explicitamente um valor para sua
representação em string.

=== "Lua"

    ```lua
    local boolean = true
    local str = "O valor booleano é: " .. tostring(boolean)
    print(str)
    ```

=== "Console"

    ```lua
    O valor booleano é: true
    ```

## Caracteres de Escape

Em Lua, os caracteres de escape são usados para representar caracteres
especiais dentro de uma string. Eles permitem que você inclua caracteres que,
de outra forma, teriam um significado especial na linguagem.

Aqui estão alguns exemplos de caracteres de escape comumente usados em Lua:

- \n - Nova linha
- \t - Tabulação
- \" - Aspas duplas
- \' - Aspas simples
- \\ - Barra invertida

Exemplo:

=== "Lua"

    ```lua
    local message = 'Ele disse "tchau" e foi embora'
    print(message)
    ```

=== "Console"

    ```bash
    Ele disse "tchau" e foi embora
    ```

Nesse exemplo, as aspas duplas dentro da string são precedidas por uma barra
invertida \ para que sejam tratadas como parte do texto, e não como o fim da
string.

Você também pode usar aspas duplas em vez de aspas simples para evitar a
necessidade de escapar as aspas dentro da string

A saída será a mesma:

=== "Lua"

    ```lua
    local message = "Ele disse \"tchau\" e foi embora"
    print(message)
    ```

=== "Console"

    ```bash
    Ele disse "tchau" e foi embora
    ```
