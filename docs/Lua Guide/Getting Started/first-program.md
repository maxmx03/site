# Primeiro Programa

É uma prática comum iniciar o aprendizado de uma nova linguagem de programação
com o famoso `"Hello World"`. No Lua, isso é bastante simples. Basta chamar a
função print e passar como parâmetro o que você deseja exibir na tela.

```lua
print("Olá, mundo!")
```

Em contraste, ao programar em C, o código do programa "Hello World" é
estruturado dentro de uma função chamada main. Nesse exemplo em C, utilizamos
a biblioteca `<stdio.h>` para acessar a função `puts`, que é responsável por
exibir uma mensagem na tela.

Dentro da função main, chamamos a função puts e passamos como argumento a
mensagem "Hello World". Essa mensagem será exibida no console quando o programa
for executado.

Por fim, utilizamos a instrução `return 0;` para indicar que o programa foi
executado corretamente. O valor zero é comumente utilizado para indicar sucesso
na execução do programa, embora outros valores possam ser usados para sinalizar
diferentes situações de saída.

```c
#include <stdio.h>

int main()
{
  puts("Hello World");

  return 0;
}
```
