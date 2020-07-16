/******************************************************************************

                            Online Java Compiler.
                Code, Compile, Run and Debug java program online.
Write your code in this editor and press "Run" button to execute it.

*******************************************************************************/
package advance2;

import java.lang.ArrayIndexOutOfBoundsException ;

public class Try_Catch
{
  public static void main (String[]args)
  {
    int[] numbers = {12,34,56};
    
    try{
        
        System.out.println(numbers[10]);
        
    } catch(ArrayIndexOutOfBoundsException error){
        System.out.println("Something went wrong?");
        error.printStackTrace(); // this built method also points to source of Exception
    
    }
    
    //try-catch-finally
    
    try
    {
      System.out.println(numbers[10]);
    }
    catch(ArrayIndexOutOfBoundsException e)
    {
        e.printStackTrace();    
    }
    finally
    {
        System.out.println("The 'try-catch' is finished");
        System.out.println("Original array : " );
        for(Integer i : numbers)
        {
            System.out.println(i+" ");
        }
    }
    

    // checkAge(15);
    checkAge(45);
    
    
  }
  
  
  // The throw keyword
    
    static void checkAge(int age){
        if(age < 18)
        {
            throw new ArithmeticException("Access denied -- User must be at least 18 years old");
        }
        else
        {
            System.out.println("Access granted -- Welocome back");
        }
        
    }
}













