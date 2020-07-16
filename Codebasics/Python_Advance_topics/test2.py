import redis
import os
#redis_pool = None

def init():
    print("PID %d: initializing redis pool..." % os.getpid())
    redis_pool = redis.ConnectionPool(host='10.0.0.1', port=6379, db=0)
    return redis_pool

if __name__ == '__main__':
	#_____________test code________
	while(True):
		print("\n :: ", redis.Redis(connection_pool=init()) )


	"""
	data = ('data', 'is', 'here')
	dic = {"name" : "sunil", "age" : "30"}
	myFun("Hello", "world", "25 Dec 219", -112.45, 78, data, dic['name'])
	"""