local function deepcopy(orig, cache)
  cache = cache or {}
  if cache[orig] then
    return cache[orig]
  end

  local t = type(orig)
  local copy

  if t == "table" then
    copy = {}
    cache[orig] = copy

    local mt = getmetatable(orig)

    if mt then
      setmetatable(copy, deepcopy(mt, cache))
    end

    for k, v in next, orig, nil do
      copy[deepcopy(k, cache)] = deepcopy(v, cache)
    end
  elseif t == "number" or t == "string" or t == "nil" or t == "boolean" or t == "function" then
    copy = orig
  else
    error("Cannot deepcopy object of type " .. t)
  end

  return copy
end

local frutas = {}

local function insert(t, value)
  t[#t + 1] = value
end

insert(frutas, "Uva")
insert(frutas, "Maça")
insert(frutas, "Laranja")

for key, value in ipairs(frutas) do
  print(key, value)
end
