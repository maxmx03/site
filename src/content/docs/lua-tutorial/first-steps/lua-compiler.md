---
title: Intepretador do lua
description: Explico sobre o interpretador do lua
sidebar:
  order: 3
banner:
  content: |
    Este curso está disponível gratuitamente no YouTube. Acesse a
    <a href="https://www.youtube.com/playlist?list=PLRQTSis2KT5Ew_CzMe-uff7LksfN1shXy">Playlist</a>
---

O interpretador do Lua é um programa responsável por **ler, analisar e executar** o código-fonte escrito na linguagem Lua. Ele converte o código em **bytecode** e executa-o em uma máquina virtual embutida (Lua VM), que processa as instruções.

## Gerando um bytecote

Para **pré-compilar código Lua**, você pode usar o utilitário padrão do Lua chamado **luac**. Esse processo gera um arquivo de bytecode que pode ser executado pela máquina virtual Lua

```bash
luac -o <output_file>.luac <source_file>.lua
```

```bash
luac -o meu_script.luac meu_script.lua
lua meu_script.luac
```

## Interpretador Independente

Existe um pequeno programa que nos permite executar scripts Lua diretamente, chamado **interpretador independente**. Para utilizá-lo, basta adicionar a seguinte linha no início do seu script:

```lua
#!/usr/bin/lua

print "Olá!"
```

Em seguida, precisamos conceder permissão de execução ao arquivo utilizando o comando `chmod`. O argumento `+x` torna o arquivo executável:

```bash
chmod +x init.lua
./init.lua
```

Com isso, podemos rodar o script diretamente, sem precisar chamar o interpretador Lua manualmente.

## Modo interativo

Para entrar no **modo interativo** do Lua, podemos usar o argumento `-i`. No entanto, também é possível acessá-lo sem esse argumento.
Se quisermos iniciar o modo interativo e, ao mesmo tempo, definir uma variável antes da sessão, podemos usar a opção `-e`, como no exemplo abaixo:

```bash
lua -i -e "msg = 'Olá'"
Lua 5.4.6  Copyright (C) 1994-2023 Lua.org, PUC-Rio
> msg
```

O modo interativo é útil para testar scripts manualmente. Podemos, por exemplo, carregar um arquivo e continuar executando comandos dentro do interpretador:

```bash
lua -i prog.lua
Lua 5.4.6  Copyright (C) 1994-2023 Lua.org, PUC-Rio
> soma(10, 5)
```
