"""
Date:27 Dec 2019 
This tutorial is refered from : https://www.geeksforgeeks.org/command-line-interface-programming-python/
"""


import argparse
import os
import subprocess

import click



def valid_path(path):
	return (os.path.exists(path))

# commands logic implemeted here

def read(args):
	file_name = args.read[0]

	with open(file_name, "r") as f:
		print(f.read())
		f.close()

def show(args):
	dir_path = args.show[0]

	if not valid_path(dir_path):
		print("Error : No such file exists!")
		exit()

	files = os.listdir(dir_path)

	for file in files:
		print(file)


def delete(args):
	dir_path = args.delete[0]
	if not valid_path(dir_path):
		print("Error : No such file exists!")
		exit()

	try:
		os.remove(dir_path)
		print(dir_path, " Successfully deleted!")
	except Exception as err:
		print(err)



def copy(args):
	file1 = args.copy[0]
	file2 = args.copy[1]
	
	# check if file to be copied exists in current dir
	if not valid_path(file1):
		print("Invalid file")
		exit()
	else:
		with open(file1, "r") as f1:
			with open(file2, "w") as f2:
				f2.write(f1.read())
				f2.close()
			f1.close()
		print("File copied Successfully !")




def rename(args):
	old_filename = args.rename[0]
	new_filename = args.rename[1]

	# check if file exist
	if valid_path(old_filename):
		if not valid_path(new_filename):
			os.rename(old_filename, new_filename)
			print(old_filename, " have been renamed Successfully to ", new_filename )
		else:
			exit()


def ping_command(args):
	#define logic here
	hostname = args.ping_command[0]
	#print("############", hostname)
	process = subprocess.run("ping " + hostname, shell=True)


# Define commands here

def main():
	parser = argparse.ArgumentParser("Description : Python CLI text file manager !")
	try:
		parser.add_argument("-r", "--read", type=str, nargs=1, 
							metavar="file_name", default=None,
							help="Open and read the specified text file .text")
	
		parser.add_argument("-s", "--show", type=str, nargs=1,
							metavar="path", default=None,
							help="Show all the files in specified directory, Type.\
							'.' to list all files of current dir",
							)

		parser.add_argument("-d", "--delete", type=str, nargs=1,
							metavar="file_name", default=None,
							help="Delets the specified file!")
		
		parser.add_argument("-c", "--copy", type=str, nargs=2,
							metavar=('file1', 'file2'), 
							help="Copy file1 to file2 Warning : file2 will be overwritten")

		parser.add_argument("--rename", type=str, nargs=2, 
							metavar=('old_name', 'new_name'),
							help="Rename the specified file to new name")

		# test command to execute a script
		parser.add_argument("-run", "--ping_command", type=str, nargs=1,
							metavar="hostname", default=None,
							help="This will execute a python script")




	except Exception as err:
		print(err)



	
	# args is basically a list which will hold inputs coming from command shell	
	args = parser.parse_args()

	# Check if any input, if input presents then call logic function
	if args.read != None:
		read(args)
	elif args.show != None:
		show(args)
	elif args.delete != None:
		delete(args)
	elif args.copy != None:
		copy(args)
	elif args.rename!= None:
		rename(args)
	elif args.ping_command != None:
		ping_command(args)



#________________cli program using click module(Command Line Interface Creation kit)_________________

@click.command()
@click.argument('name')
@click.option('--massage', '-n')
def Echo_command(massage, name):
	#click.echo("This is a CLI built with Click ", massage, " ", name)
	print("This is a CLI built with Click ", massage,"",name)



if __name__ == '__main__':
	#main()
	Echo_command()

	