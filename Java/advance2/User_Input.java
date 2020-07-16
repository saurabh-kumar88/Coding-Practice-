package advance2;

import java.util.Scanner;
import java.util. *;

public class User_Input
{
	public static void main(String[] args) {
		Scanner myObj = new Scanner(System.in);
		System.out.println("Enter user name : ");
		String User_name = myObj.nextLine();
			
		System.out.print("Enter age : ");
		int age  = myObj.nextInt();
		    
		System.out.println("Enter height : ");
		float height = myObj.nextFloat();
		
		System.out.println("is Active");
		boolean status = myObj.nextBoolean();


        System.out.println("user name : " + User_name);
        System.out.println("Age : " + age);
        System.out.println("Height : " + height);
        System.out.println("status : " + status);
        

	}
}