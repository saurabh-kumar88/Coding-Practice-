import numpy as np

# declaring numpy array

A = np.array([45,12,89,87])
print(A)

# creating numpy array from list and tuple

py_list = [45,10,32,97]
py_tuple = (10,57,83,219)

B = np.array(py_list)
C = np.array(py_tuple)

print("B ", B)
print("C ", C)

# operations on numpy array

print("------operations on numpy array-----------")
print(B)

print(B + 10)

print(B - 10)

print(B * 10) 

# shape and type

print("---shape and type-----")

print(B.shape)
print(B.dtype)

D = np.array([1.45,-0.25,10.71])

print(D.shape)
print(D.dtype)

# Dimensional array (matrix)


print("-----------Dimensional array (matrix)--------------")

E = np.array([(10,24,59,87),(11,58,41,35)])
F = np.array([(15,59,78,11),(18,85,41,36)])
print(E.shape)

G = np.array([
	[ [45,46,10],[47,48,55]],
	[ [49,50,60],[51,52,61]]
	])
print(F.shape)

# matrix airthmatics
print("--------matrix airthmatics------")
print("E = ",E)
print("\n")
print("F = ",F)
print("\n")
print(np.add(E,F, out=None))

# matrix of zeros or 1

print("-------------np.zeros(shape, dtype), np.ones()---------")

a = np.zeros((2,2), dtype=float )
print(a)
print("\n")
b = np.zeros((2,3), dtype=np.int16 )
print(b)
print("\n")
c = np.ones((3,3), dtype=float )
print(c)

# matrix reshape()
print("-------np.reshape(arr, (newshape))-------")
print("E = ",np.shape(E)," ",E)
print("\n")
print(np.reshape(E,	(4,2)))
print("flatten E ", E.flatten())


# numpy.hstack() and numpy.vstack()
"""
With hstack you can appened data horizontally, vice-verse. 
This is a very convinient function in Numpy.
"""
print("------numpy.hstack() and numpy.vstack()------")
print("A = ", A)
print("B = ",B)
print("horizontally appened : ", np.hstack((A,B)) )
print("vertically appened : ", np.vstack((A,B)) )


# numpy.asarray()
# allows to manupulate elements of matrix
print("\nn umpy.asarray()")
print("E = ", E)
np.asarray(E)[0][1] = 0
print(E)

# np.linspace(start, stop, number of sample)
"""
np.linspace() generate sequence of numbers 
between given start and stop points
default numbers count is 50 
"""
print("\n--------numpy.linspace() and numpy.logspace() ")
print( np.linspace(1.5,10.5, num=10 ) )

# to exclude last endpoint
print( np.linspace(1.5,10.5, num=10, endpoint=False ) )

print("\n logspace() : ", np.logspace(1.5, 10.5, num=10))

# slicing, indexing
print("\n---------slicing, indexing---")

print("E ", E)
print("\n", E[1,:3])

# statisticle functions

print("\n----------statisticle functions----------")


print("A : ", A)

print("np.mean(A) : ", 	 np.mean(A))
print("np.min(A) : ", 	 np.min(A))
print("np.max(A) : ",	 np.max(A))
print("np.median(A) : ", np.median(A))
print("np.std(A) : ",    np.std(A))

print("\n---------np.dot()---------")
a = np.array([60,60,60])
b = np.array([1,10,10])
print("\n a ", a)
print("\n b ", b)
print("\n",np.dot(a,b))
print("\n percentile ", np.percentile(a,50))


import config
#config.cars["Hetch back"] = "Suzuki"














