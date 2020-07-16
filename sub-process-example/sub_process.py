import subprocess
import os

def execute_C():
	s = subprocess.check_call("g++ test.c -o out1;./out1", shell=True)
	print(", return code", s)

def execute_cpp():
	# create a pipe to child process 
	
	data, temp = os.pipe()
	os.write(temp, bytes("10 100\n", "utf-8"))
	os.close(temp)
	s = subprocess.check_output("g++ cpp_test.cpp -o out2;./out2", 
								stdin=data, shell=True)

	print(s.decode('utf-8'))
	
	

def execute_java():
	s = subprocess.check_output("javac Test_code.java; java Test_code", shell=True)
	print(s.decode("utf-8"))

def ping_google():
	s = subprocess.run("ping google.com", shell=True)


#____________concept of os.fork()_______________
#___________fork() method allows cloning of process into new child process
def child():
	print("A new child process id ", os.getpid())
	os._exit(0)

def parent():
	while True:
		newpid = os.fork()
		if newpid == 0:
			child()
		else:
			x = os.getpid()
			pids = (x, newpid)
			print("parent and child pid", pids)
		reply = input("type q for quit or C for new fork ")

		if reply == 'c':
			continue
		else:
			print("Quiting..!")
			break
import time


if __name__ == '__main__':
	#execute_C()
	#execute_cpp()
	#execute_java()
	#ping_google()
	#parent()
	ping_google()


	# test code
	#while True:
		#newpid = os.fork()
		#print("newpid : ", newpid)
		#time.sleep(0.5)

