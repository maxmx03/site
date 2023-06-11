# Instalando Lua

Para instalar o Lua no Linux, você pode usar o gerenciador de pacotes de sua
distro.

## ArchLinux

```bash
paru -S lua 5.4.6-1
```

## Ubuntu

```bash
sudo apt install lua5.4
```

## NixOS

```bash
nix-env -iA nixos.lua
```

on Non NixOS

```bash
nix-env -iA nixpkgs.lua
```

## Windows

Para instalar o Lua no Windows, siga os seguintes passos:

1. Acesse o site do Lua em [lua.org](https://www.lua.org/download.html) e
   vá para a seção de Downloads.
2. Faça o download do pacote binário do Lua para Windows, compatível com a
   arquitetura do seu sistema (32 bits ou 64 bits).
3. Extraia o pacote baixado para um local de sua escolha.
4. Adicione o diretório executável do Lua ao PATH do sistema. Isso permitirá
   que você execute o Lua a partir de qualquer prompt de comando.
5. Abra um prompt de comando e digite lua -v para verificar se o Lua está

Um alternative é utilizar o scoop para instalar o lua.

```powershell
scoop bucket add main
```

```powershell
scoop install main/lua
```

!!! bug

    A função `require` é usada em Lua para carregar e utilizar módulos externos.
    Ela permite que você importe e utilize funcionalidades de outros arquivos
    Lua em seu programa, algumas versões do Lua no ambiente Windows podem ter
    problemas com a função `require`. Isso pode ocorrer devido a configurações
    específicas do ambiente

## macOs

Para instalar o Lua no macOS, você pode usar o gerenciador de pacotes Homebrew.

```bash
brew install lua
```

Após a conclusão da instalação, você pode verificar se tudo ocorreu
corretamente digitando `lua -v` no Terminal. A versão do Lua deverá ser
exibida.
