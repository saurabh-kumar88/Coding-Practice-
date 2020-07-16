import argparse


def add_fun():

	parser = argparse.ArgumentParser(description="Description : This is first CLI program")

	try:
		parser.add_argument("add", nargs = '*', metavar = 'num', type=int,
							help='takes any number of input integers')
	except Exception as err:
		print("err")

	

	args = parser.parse_args()

	if len(args.add) != 0:
		print(sum(args.add))




if __name__ == '__main__':
	#add_fun()

	# test code
	pid = fork()
	print(pid)
	"""parser = argparse.ArgumentParser(description="This is first CLI program")

	parser.add_argument("add", nargs = '*', metavar = 'num', type=int,
							help='All numbers should be separated by space')

	args = parser.parse_args()

	if len(args.add) != 0:
		print(sum(args.add))"""