---
title: Sintaxe Básica
description: Sintaxe básica do lua
sidebar:
  order: 4
banner:
  content: |
    Este curso está disponível gratuitamente no YouTube. Acesse a
    <a href="https://www.youtube.com/playlist?list=PLRQTSis2KT5Ew_CzMe-uff7LksfN1shXy">Playlist</a>
---

### **C**

C é uma linguagem estruturada, então seu programa básico segue esta estrutura:

```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main(void) {
  typedef struct {
    char *nome;
  } Pessoa;

  Pessoa *pessoa = malloc(sizeof(Pessoa));

  if (pessoa == NULL) {
    return EXIT_FAILURE;
  }

  pessoa->nome = malloc(4 * sizeof(char));
  stpcpy(pessoa->nome, "Max");
  printf("%s", pessoa->nome);
  free(pessoa->nome);
  free(pessoa);

  return EXIT_SUCCESS;
}
```

### **Lua**

Lua é uma linguagem de script e muito flexível. Um programa básico pode ser bem simples:

```lua
local pessoa = {}
pessoa.nome = "Max"
print(pessoa.nome)
```
