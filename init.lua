local x = 10
local y = 5.5
local bx = type(x)
local by = type(y)

print(x + y) -- 15.5
print(bx, math.type(x))
print(by, math.type(y))
