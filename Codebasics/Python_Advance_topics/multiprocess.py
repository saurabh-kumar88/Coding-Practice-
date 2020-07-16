from multiprocessing import Process
import time
import math
#passing data B/w process using global variable.......
result = []
def cal_sqr(sqr):
	for n in sqr:
		result.append(n*n)
	print("\nFrom Inside of function :" +str(result))

def cal_cube(cube):
	for m in cube:
		result.append(m*m*m)
	print("\nFrom Inside of function :"+str(result))
		
	
#this is the main program
if __name__ == "__main__":
	#common data which will be pass to both process
	arr = [1,2,3]
	
	p1 = Process(target = cal_sqr,args = (arr,))
	p2 = Process(target = cal_cube,args = (arr,))
	t1 = time.time()
	p1.start()
	p2.start()
	p1.join()
	p2.join()
	print("multiprocessing took", time.time() - t1)

	t2 = time.time()
	cal_cube(arr)
	cal_sqr(arr)
	print("without multiprocessing ",time.time() - t2)
	

	"""NOTE:Every process creates its own address-space(virtual memory) in which they 
	 store their resuts,so result will only be access fron inside of process...
	result will not flow go back to this global variable...so it will  
	be accesible from inside of function only.  
	To share data B/w process we have to use IPC(Inter Process Communication) techniques."""
	
	
    





