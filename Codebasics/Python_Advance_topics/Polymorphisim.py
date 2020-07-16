
"""Modifying method of parent class --> same method but different functionality ---> Polymorphisim"""

class Animal:

	def playSound(self):
		print("animal calling sound")

class Cat(Animal):

	def playSound(self):
		print("cat says : meow  meow")

class Dog(Animal):

	def playSound(self):
		print("Dog says : bow bow")




if __name__ == '__main__':
	
	obj_animal = Animal()
	obj_animal.playSound()

	obj_cat = Cat()
	obj_cat.playSound()

	obj_dog = Dog()
	obj_dog.playSound()

