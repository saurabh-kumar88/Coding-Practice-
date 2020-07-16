/******************************************************************************

                            Online Java Compiler.
                Code, Compile, Run and Debug java program online.
Write your code in this editor and press "Run" button to execute it.

*******************************************************************************/


// Method 1 --> inherit Thread class and Override it's run() method
 
package multithreading;
 
public class Intro extends Thread
{
  public void run()
  {
      System.out.println("Running Thread");
  }
  
  public static void main (String[]args)
  {
    Main myObj = new Main();
    myObj.run();
  }
  
}


// Method2 --> Another way to create a thread is to implement the Runnable interface

// public class Intro implements Runnable
// {
//   public void run()
//   {
//       System.out.println("Running Thread");
//   }
  
//   public static void main (String[]args)
//   {
//     Main myObj = new Main();
//     myObj.run();
//   }
  
// }

