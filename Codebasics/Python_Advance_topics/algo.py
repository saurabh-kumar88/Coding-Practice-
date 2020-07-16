import time

## Bubbel sort algorithm

data = [15,66,4,658,46,9,8,47,6,7,8,6,4,6,4,84,34,56,4,56,45]

n = len(data)

data_next = iter(data)

def pyramid_pattern(rows): 
    myList = [] 
    for i in range(0,rows+1): 
    	#myList.append(" " * (n - i - 1))
    	myList.append(" " * (n - i) + " *" * i + "\n") 
    print("\n".join(myList))

def Inverted_pyramid(rows):
	myList = []
	for i in range(0,rows+1):
		myList.append(" " * (n + i) + " *" * (rows - i) + "\n") 
	print("\n".join(myList))


"""
fibbonacci series rule

next term = last + second last
Xn = Xn-1 + Xn-2

"""
def fibbonacci_series(terms):
	temp = [0,1] # series will start from initial vlues 0, 1

	for x in range(terms):
		temp.append(temp[x+1] + temp[x])
	
	return(temp)


# Prime numbers
def prime_numbers(num):
	flag = True
	
	if num == 1:
		flag = True
		#print(num , " is a prime number")
		return flag		

	
	for x in range(2, num-1):

		if (num % x == 0):
			#print(num, " is not a prime number")
			flag = False
			return(flag)
		else:
			continue
	return(flag)		

"""
means those numbers which reads similar 
(right to left or left to right) e.g 343, 101
"""
def Palindrome_seq(num):

	List1 = str(num)
	List2 = List1[::-1]
	
	if List1 == List2:
		print("Palindrome sequence")
	else:
		print("Not Palindrome sequence") 


# Count number of Upper case letters from a big text file

def Count_upperCase():

	t1 = time.time()
	data = []
	file = open("example_file.text", 'r')
	
	data = file.read()

	count = 0

	for x in data:
		if str(x).isupper() is False:
			count += 1
		else:
			continue
	print("Capitale letters :", count, "time taken :", time.time() - t1, " Sec")
	

if __name__== '__main__':
	
	# bubble sort algorithm
	from itertools import cycle
	List  = [54,8,921,3,67]

	pool = cycle(List)

	n = len(List)

	for x in pool:
		if pool > next(pool):
			print(pool, " ", next(pool))

	

	


	









