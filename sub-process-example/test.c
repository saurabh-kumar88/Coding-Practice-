#include<stdlib.h>
#include<stdio.h>
#include<sys/types.h>
#include<unistd.h>

int main()
{
	pid_t child_pid = fork();
		
	if (child_pid > 0)
		sleep(30);
	else
		exit(0);
	
	return 0;

}