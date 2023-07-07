# Metatables, Metamétodos e Programação Orientada a Objetos

Em Lua, é possível implementar Programação Orientada a Objetos (POO) por
meio do uso de metatables e metamétodos. Os metamétodos são funções especiais
que são chamadas automaticamente quando certas operações são realizadas em um
objeto. Alguns dos metamétodos mais comuns em Lua
são `__index`, `__newindex`, `__tostring`. Aqui está uma explicação de
cada um deles:

## `__index`

O metamétodo `__index` é chamado quando uma chave é acessada em uma tabela
que não existe nessa tabela. Ele permite que você defina um comportamento
personalizado para a busca de chaves em uma tabela. Você pode usar o `__index`
para redirecionar a busca para outra tabela, criando assim herança ou
fornecendo um valor padrão para chaves ausentes. Aqui está um exemplo:

=== "Lua"

    ```lua
    local pessoa = { nome = "João", idade = 25 }

    local pessoaMetatable = {
      __index = { profissao = "Desenvolvedor" }
    }

    setmetatable(pessoa, pessoaMetatable)

    print(pessoa.nome)
    print(pessoa.idade)
    print(pessoa.profissao)
    ```

=== "Console"

    ```bash
    João
    25
    Desenvolvedor
    ```

Neste exemplo, a tabela pessoa recebe uma metatable pessoaMetatable que
possui um `__index` definido como outra tabela. Quando uma chave não é
encontrada na tabela pessoa, a busca é redirecionada para a tabela definida
em `__index`, fornecendo assim um valor padrão para a chave.

## `__newindex`

O metamétodo \_\_newindex é chamado quando um novo valor é atribuído a uma chave
em uma tabela que não existe previamente. Ele permite que você defina um
comportamento personalizado para a atribuição de valores a uma tabela.
Você pode usá-lo para aplicar validações, executar ações específicas
ou redirecionar a atribuição para outra tabela. Veja um exemplo:

=== "Lua"

    ```lua
    local pessoa = { nome = "João", idade = 25 }

    local pessoaMetatable = {
      __newindex = function(tabela, chave, valor)
        if chave == "profissao" then
          rawset(tabela, chave, valor)
        else
          error("A chave " .. chave .. " não pode ser adicionada a esta tabela.")
        end
      end
    }

    setmetatable(pessoa, pessoaMetatable)

    pessoa.profissao = "Desenvolvedor"
    pessoa.salario = 5000 -- error
    ```

=== "Console"

    ```bash
    luajit.exe: init.lua:8: A chave salario não pode ser adicionada a esta tabela.
    stack traceback:
            [C]: in function 'error'
            init.lua:8: in function '__newindex'
            init.lua:16: in main chunk
            [C]: at 0x7ff7e08c1fd0
    ```

Neste exemplo, a metatable `pessoaMetatable` define um `__newindex` que verifica
se a chave é "profissao". Se a chave for "profissao", o valor é atribuído à
tabela usando a função `rawset`. Caso contrário, um erro é gerado para indicar
que a chave não pode ser adicionada à tabela.
Dessa forma, o metamétodo `__newindex` permite controlar o comportamento de
atribuição de valores em uma tabela, fornecendo a possibilidade de validação
ou redirecionamento de atribuições.

## `__tostring`

O metamétodo `__tostring` é chamado quando um objeto é convertido em uma string.
Ele permite que você defina uma representação personalizada do
objeto quando ele é usado em contexto de string.
Aqui está um exemplo:

=== "Lua"

    ```lua
    local pessoa = { nome = "Carlos", idade = 35 }

    local pessoaMetatable = {
      __tostring = function(tabela)
        return "Pessoa: " .. tabela.nome .. ", Idade: " .. tabela.idade
      end
    }

    setmetatable(pessoa, pessoaMetatable)

    print(pessoa)
    ```

=== "Console"

    ```bash
    Pessoa: Carlos, Idade: 35
    ```

Neste exemplo, a metatable pessoaMetatable define um `__tostring` que retorna
uma representação personalizada da tabela pessoa. Quando pessoa é
utilizado em um contexto de string, o metamétodo `__tostring` é chamado
para fornecer a representação desejada.

## Definindo Classes

Com o uso de metatables em Lua, é possível implementar conceitos de
programação orientada a objetos (OOP) de forma flexível.
Vou fornecer um exemplo básico de como criar uma classe simples em Lua
usando metatables:

=== "Lua (Padrão)"

    ```lua
    local Pessoa = {}

    function Pessoa:new(t)
      setmetatable(t, Pessoa)
      self.__index = self

      return t
    end

    -- Método da classe
    function Pessoa:falar()
      print("Olá, meu nome é " .. self.nome .. " e eu tenho " .. self.idade .. " anos.")
    end

    function Pessoa:__tostring()
      return string.format("Nome: %s \nIdade: %d", self.nome, self.idade)
    end

    local pessoa1 = Pessoa:new({ nome = "João", idade = 30 })
    pessoa1:falar() -- Saída: Olá, meu nome é João e eu tenho 30 anos.
    print(pessoa1)
    ```

=== "Lua (2º alternativa)"

    ```lua
    local Pessoa = {}

    Pessoa.__index = Pessoa

    function Pessoa.new(nome, idade)
      local self = setmetatable({}, Pessoa)
      self.nome = nome
      self.idade = idade
      return self
    end

    function Pessoa:falar()
      print("Olá, meu nome é " .. self.nome .. " e eu tenho " .. self.idade .. " anos.")
    end

    function Pessoa:__tostring()
      return string.format("Nome: %s \nIdade: %d", self.nome, self.idade)
    end

    local pessoa1 = Pessoa.new("João", 30)
    pessoa1:falar()
    print(pessoa1)
    ```

=== "Lua (3º alternativa)"

    ```lua
    local Pessoa = {}

    setmetatable(Pessoa, Pessoa)

    function Pessoa:__call(t)
      setmetatable(t, Pessoa)
      self.__index = self

      return t
    end

    -- Método da classe
    function Pessoa:falar()
      print("Olá, meu nome é " .. self.nome .. " e eu tenho " .. self.idade .. " anos.")
    end

    function Pessoa:__tostring()
      return string.format("Nome: %s \nIdade: %d", self.nome, self.idade)
    end

    local pessoa1 = Pessoa({ nome = "João", idade = 30 })
    pessoa1:falar()
    print(pessoa1)
    ```

=== "Console"

    ```bash
    Olá, meu nome é João eu tenho 30 anos.
    Nome: João
    Idade: 30
    ```
