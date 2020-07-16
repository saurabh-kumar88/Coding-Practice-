from collections import defaultdict

def defual_value():
	return "Not present"

# Defining default dictionary

d = defaultdict(lambda : "Not present")
d['foo'] = 1
d['bar'] = 2


if __name__ == '__main__':
	print(d['foo'])
	print(d['bar'])

	print(d['#@#@'])