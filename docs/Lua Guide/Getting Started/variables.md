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

Uma vez que a variável é declarada, você pode usá-la em todo o seu código.
Por exemplo, você pode imprimir o valor da variável `mensagem` usando a função print:

```lua
print(mensagem) -- Saída: Olá, mundo
```

Em Lua, as variáveis podem armazenar diferentes tipos de valores, como
números, strings, booleanos, tabelas e outros.

!!! tip

    Lembre-se de escolher nomes significativos e descritivos para suas
    variáveis, a fim de melhorar a legibilidade e a manutenção do código.

