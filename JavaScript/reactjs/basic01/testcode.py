class Solution:
  def fizzBuzz(self, n: int):
    ans = []
    multiple_of_3, multiple_of_5 = False, False
    
    for count in range(1, n+1):
      if count % 3 == 0 and count % 5 == 0:
        ans.append("FizzBuzz")
      elif count % 3 == 0:
        ans.append("Fizz")
      elif count % 5 == 0:
        ans.append("Buzz")
      else:
        ans.append(str(count))
    
    return ans
      
      


if __name__ == "__main__":
    obj = Solution()
    print(obj.fizzBuzz(15))
        
        
        