import pickle 

def storeData():

	Books = {'Maths': 'RD Sharma',
			'Physics': 'Pradeeps',
			'English': 'HD Sharma',}

	dbfile = open("examplePickle" , 'ab')
	pickle.dump(Books, dbfile)
	dbfile.close()

def loadData():
	dbfile = open("examplePickle" , 'rb')
	db = pickle.load(dbfile)
	for x in db:
		print(x, " => ", db[x])
	dbfile.close()



def print_function():
	print("decorator_exmp")



keys = ['name', 'post', 'age', 'department']
values = ['Rahul', 'MTS', '30', 'MOD']

mydict = dict(zip(keys, values))

import array as arr

class Employee:
	def __init__(self, name, age, post):
		self.name = name
		self.age = age
		self.post = post

	def printFullName(self):
		return (self.name + " singh")

	def printFullPost(self):
		return("permanant")



data = ['Delhi', 'Food', 'Walk']

from random import shuffle, uniform
from time import sleep

import numpy as np
import time

size = 1000

A = [12,3,16,46,631,314,64,6,46,0.15,-12]
Z = []
B = np.array([12,3,16,46,631,314,64,6,46,0.15,-12])
C = np.arange(10)

E = arr.array('i', [34,4,64,645,5,46])

def python_way():
	t1 = time.time()
	for x in A:
		Z.append(x + 1)
	print(Z)

	return time.time() - t1

def numpy_way():
	t1 = time.time()
	for x in B:
		C = np.append( B, (x + 1))
	print(C)
	return time.time() - t1

# -------------Inheritance-------------

class Calculas:
	def __int__(self):
		pass

	def Add(self, a, b):
		self.a = a
		self.b = b
		result = a + b
		return (result )
	
	def Sub(self, a, b):
		self.a = a
		self.b = b

		result = a - b
		return(result)


class Mini_calculas(Calculas):
	def __init__(self):
		pass
	def Add_numbers(self, x, y):
		self.x = x
		self.y = y
		self.Add(x, y)

		result = self.Add(x, y)
		return(result)


	def Sub_numbers(self, x, y):
		self.x = x
		self.y = y
		self.Sub(x, y)

		result = self.Sub(x, y)
		return(result)

# Example of multiple inheritance

class Micro_calculas(Mini_calculas):
	def __init__(self):
		pass

	def Add_two_numbers(self, x, y):
		self.x = x
		self.y = y
		result = self.Add_numbers(x,y)
		return(result)

	def Sub_two_numbers(self, x, y):
		self.x =x
		self.y =y
		result = self.Sub_numbers(x, y)
		return(result)



# Example of monkey patching!
import Monkey_class

def monkey_patch(self, data):
	self.data = data
	print("Monkey class behaviour have been chnaged!", data.upper() )


# Polymorphisim using function


class Maruti:
	def print_model(self):
		print("Maruti Nexa ignis")

	def milage(self):
		print("26 kmpl")

	def price(self):
		print("5.2 L")

class Honda:
	def print_model(self):
		print("Honda city")

	def milage(self):
		print("19.5 kmpl")

	def price(self):
		print("8.25 L")


def Polly(obj):
	obj.print_model()
	obj.milage()
	obj.price()

obj1 = Honda()
obj2 = Maruti()



##-----------python abstract class-----------
"""
By defining an abstract base class, you can define a common 
Application Program Interface(API) for a set of subclasses
"""
from abc import ABC, abstractmethod

class Bike(ABC):
	def wheels(self):
		pass

class Auto_Rickshaw(Bike):
	def wheels(self):
		print("Auto rickshaw have 3 wheels")

class Car(Auto_Rickshaw):
	def wheels(self):
		print("Car have 4 wheels")


"""
python super() helps to identify which class is derived
from which parent class(works only upto single-inheritance). 
"""

class Bus(Car):
	"""docstring for Bus"""
	def wheels(self):
		super().wheels() 
		print("Bus have 6 wheels")
		
from urllib import request

#http://webcache.googleusercontent.com/search?q=cache:wikipedia.in



import numpy as np
import time, gc
from sys import getsizeof, getrefcount
import config, Numpy
import os
import json
import Tkinter



# python user-defined exceptions class

class NetworkError(RuntimeError):
	def __init__(self, arg):
		self.arg = arg

class Print_msg:
	def __init__(self):
		pass

	def msg(self):
		print("Hello world")


import re
import logging



def basic_logger():
	logging.basicConfig(filename="pythonTestLog.log",
						 format='%(asctime)s, %(message)s',
						 filemode='w')

	logger = logging.getLogger()

	logger.setLevel(logging.DEBUG)

	#Test messages
	logger.debug("Harmless debug message")
	logger.info("Info message :-)")
	logger.warning("Its just a warnnig! :-|")
	logger.error("Error, Something went wrong :-(")
	logger.critical("OOps..Somethig serioudly critical..:-{")



		
if __name__ == '__main__':

	
	tuple_key = ('foo', 'bar')
	print( tuple_key[1] )
	
	#print("____________PYTHON LOGGING_______________")

	#basic_logger()

	
	"""
	print("________________re module________________")

	emails = ["Aniket@hotmail.com", "rahul@gmail.com", "sunil@gmail.com", "prashant@yahoo.com"]
	pattern = "@gmail.com"
	
	email = []	
	for x in emails:
		if re.search(pattern, x):
			email.append(x)
		else:
			pass

	print(email)
	"""

	"""
	#___________python to json__________
	x = {"name" : "foo",
		 "post" : "manager",
		 "age"  :  45,}

	y = json.dumps(x, indent=1, separators=("/" , "@"))
	print(y)

	# _______json to python object_________
	json_data = '{"name":"Rahul kumar", "age":"31"}'

	z = json.loads(json_data)
	print(z['name'])
	print(z['age'])
	"""


	


	


	#os.remove("test_unix.py")	
	
	"""
	print(config.cars["Hetch back"])

	hostname = "Google.com"
	try:
		if hostname == "Google.com":
			print("connecting..")
		else:
			raise NetworkError("Bad hostname")
	except NetworkError as e:
		print(e)

	"""
	




	"""
	size = 10000
	L1 = range(size)
	L2 = range(size)
	A1 = np.arange(size)
	A2 = np.arange(size)

	t1 = time.time()
	result = [(x,y) for x,y in zip(L1, L2)]
	print(" list time ", (time.time() - t1) )

	t1 = time.time()
	result = A1 + A2
	print(" np time ", (time.time() - t1) )
	"""

	"""
	# map() function
	x1 = ["Hello "]
	x2 = [" world"]
	result = map(lambda x,y: x+y, x1, x2)
	print(list(result))
	"""



	#request.urlretrieve("https://s0.2mdn.net/simgad/14277357511698563405", "image.jpg")

	'''rikcshaw = Auto_Rickshaw()
	rikcshaw.wheels()

	cars = Car()
	cars.wheels()'''

	#bus = Bus()
	#bus.wheels()


	"""
	Polly(obj1)
	Polly(obj2)	
	"""

	"""
	
	Monkey_class.Monkey.print_info = monkey_patch
	obj = Monkey_class.Monkey
	obj.print_info("saurabh")

	"""

	"""
	obj = Mini_calculas()
	x = obj.Add_numbers(10 , 46)
	print("result ", x)

	x = obj.Sub_numbers(100, 63.8)
	print("Sub result ", x)

	obj2 = Micro_calculas()
	x = obj2.Add_two_numbers(10, 20)
	y = obj2.Sub_two_numbers(30, 40)
	print("Multiple inheritance ", x, " ",y)
	"""
	

	'''time1 = python_way()
	time2 = numpy_way()
	print("python list ", time1)
	print("numpy ", time2)'''


	"""

	# Ternary statement
	x = 0.5
	print(True) if x > 1 else print(False)
	
	E1 = Employee('Rahul kumar', 45, 'MTS')
	E2 = Employee('Aniket rohtagi', 30, 'Engineer')

	x = E1.printFullName()
	print(x)
	#print(E2.printFullPost())
	#print(E1.name)
	x = lambda a : a + 100 
	print(x(10	))

	deco_exmp = print_function
	deco_exmp()
	storeData()
	loadData()
	#pikle w/o file
	Books = {'Maths': 'RD Sharma',
			'Physics': 'Pradeeps',
			'English': 'HD Sharma',}

	db = pickle.dumps(Books)
	print ("object have been dumped")
	data = pickle.loads(db)
	print(data)
	"""


