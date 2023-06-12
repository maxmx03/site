# Entrada do console

Para obter entrada do usuário no console, você pode usar a função `io.read()`.
Aqui está um exemplo de como obter a entrada do usuário e exibi-la no console:

```lua
local name, idade

print("Por favor insira seu nome:")
name = io.read()

print("Quantos anos você tem?")
idade = io.read("n")

print(string.format("Olá %s, você tem %d anos de idade", name, idade))
```
