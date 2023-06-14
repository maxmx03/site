# Criando Variáveis

Em Lua, você pode criar variáveis para armazenar e manipular dados.
Declarar uma variável é simples. Vamos ver um exemplo:

```lua
local mensagem = "Olá, mundo"
```

No trecho de código acima, declaramos uma variável chamada `mensagem` usando a
palavra-chave local. A palavra-chave local indica que a variável possui
escopo local e só é acessível dentro do bloco ou função atual.

Inicializamos a variável `mensagem` com o valor da string "Olá, mundo". Lua é uma
linguagem de tipagem dinâmica, o que significa que você não precisa
especificar explicitamente o tipo de dado ao declarar uma variável.
O tipo da variável é determinado com base no valor atribuído a ela.

Uma vez que a variável é declarada, você pode usá-la em seu código.
Por exemplo, você pode imprimir o valor da variável `mensagem` usando a função
print:

=== "Lua"

    ```lua
    print(mensagem)
    ```

=== "Console"

    ```bash
    Olá mundo
    ```

Em Lua, as variáveis podem armazenar diferentes tipos de valores, como
números, strings, booleanos, tabelas e outros.

!!! tip

    Lembre-se de escolher nomes significativos e descritivos para suas
    variáveis, a fim de melhorar a legibilidade e a manutenção do código.

## Variáveis Globais

Em Lua, uma variável global é uma variável que pode ser acessada e modificada
em qualquer parte do código, independentemente de seu escopo.
Isso significa que ela está disponível em todo o programa, mesmo fora do bloco
ou função onde foi originalmente declarada.

Aqui está um exemplo de declaração de uma variável global:

```lua
mensagem = "Olá, mundo!"
```

## Escopo

Em Lua, o escopo define a visibilidade e a acessibilidade de uma variável.
O escopo pode ser local ou global.

**Variáveis Locais**: Essas variáveis estão visíveis e acessíveis apenas dentro
do bloco ou função em que foram declaradas.

=== "Lua"

    ```lua
    do
        local mensagem = "Olá, mundo!"
        print(mensagem)
    end

    do
        print(mensagem)
    end
    ```

=== "Console"

    ```bash
    Olá, mundo!
    nil
    ```

No primeiro bloco, a variável `mensagem` é declarada como uma variável local
dentro do bloco `do`. Ela pode ser usada dentro desse bloco e é impressa
corretamente.

No segundo bloco, ao tentar acessar a variável mensagem,
o print mostra `nil` porque ela não está definida nesse escopo.

**Variáveis Globais**: Variáveis globais são declaradas sem o uso da
palavra-chave local. Elas podem ser acessadas e modificadas em qualquer
parte do programa.

=== "Lua"

    ```lua
    do
        mensagem = "Olá, mundo"
    end

    do
        print(mensagem)
    end
    ```

=== "Console"

    ```bash
    Olá, mundo
    ```
