from functools import lru_cache

@lru_cache(maxsize = 1000)
def fibonacci(n):
  if(type(n) != int):
    raise TypeError("n must be a positive integer !")
  if(n < 0):
    raise ValueError("n must be a positive integer !")

  if (n == 1 or n == 2):
    return 1
  elif n > 2:
    return fibonacci(n-1) + fibonacci(n-2) # saving it in stack memory


fibonacci_cache = {}
def fibonacci_with_cache(n):
  
  if n in fibonacci_cache:
    return fibonacci_cache[n]
  
  # else compute nth term
  if (n == 1 or n == 2):
    return 1
  elif n > 2:
    value = fibonacci_with_cache(n-1) + fibonacci_with_cache(n-2) 

  # cache the value and return it
  fibonacci_cache[n] = value
  return value

  



if __name__ == "__main__":
    n = -1
    for i in range(1, 100001):
      print(i, " : ", fibonacci(n))

