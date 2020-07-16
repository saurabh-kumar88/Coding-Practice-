# Example: Inheritamnce and polymophisim


class Car:

	def __init__(self,brand, model, year):
		self.brand = brand
		self.model = model
		self.year = year
		

	def road_clearance(self, puc_rank):
		if self.year > 8 and puc_rank >= 150:
			return False
		else:
			return True

class Tesla(Car):
	def __init__(self, brand, model, year, battery_capacity):
		super().__init__(brand, model, year)

		self.battery_capacity = battery_capacity
  	
	def batteryCapacity_in_jules(self):
		return (self.battery_capacity * 3.6)


if __name__ == '__main__':
	
	# obj_car = Car("unknow", "unknown", 15)
	# print(	obj_car.road_clearance(178) )

	obj_tesla = Tesla("Tesla motors", "mnodel-S", 2, 14500.25)
	print( obj_tesla.road_clearance(0.25) )	
	print( obj_tesla.batteryCapacity_in_jules()	)
