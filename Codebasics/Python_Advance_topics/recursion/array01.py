"""
Replace each element of array with product of rest of the elements
"""

# input : [1, 2, 3, 4, 5]
# output : [120, 60, 40, 30, 24]

def findProduct(arr, n, left=1, i=0):
  
  # boundary condition
  if len(arr) == 0 or len(arr) == 1:
    return arr
  
  # base case
  if i == n:
    return 1

  # back-up current element
  curr = arr[i]
  right = findProduct(arr, n, left*arr[i], i+1)

  arr[i] = left * right

  return curr * right
  




  
A = [1, 2, 3, 4, 5]


# driver code

if __name__ == "__main__":
    print("before : " ,A)
    findProduct(A, len(A))
    print("after : ", A)


    
    # recursively

    # arr = [1, 2, 3, 4, 5]
    # temp = []
    # for i in range(len(arr)):
    #   prod = 1
    #   for j in range(len(arr)):
    #     if(j == i):
    #       pass
    #     else:
    #       prod *= arr[j]
    #   temp.append(prod)

    # print(temp)

