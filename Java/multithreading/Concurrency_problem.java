/******************************************************************************

                            Online Java Compiler.
                Code, Compile, Run and Debug java program online.
Write your code in this editor and press "Run" button to execute it.

*******************************************************************************/
// Concurrency Ploblem : When the threads and main program are reading and writing the same variables, 
//the values are unpredictable. The problems that result from this are called concurrency problems.

// To avoid concurrency problem, us isAlive() method

package multithreading;
 
public class Concurrency_problem extends Thread
{
  public static int amount = 0;
    
  public void run()
  {
    amount++;
    
    System.out.println("This code is running from thread");
  }
  
  public static void main (String[]args)
  {
    Main thread = new Main(); // threads are created by instantiating Thread class
    thread.start(); // running thread
    
    // Wait for the thread to finish
    while(thread.isAlive())
    {
      System.out.println("Waitign for thread to be finish..!!");    
    }
    
    // update amount from main thread now
    System.out.println("From main thread 'Original amount' : " + amount);
    amount++;
    System.out.println("From main thread 'new amount' : " + amount);
  }
    
  
}












