/******************************************************************************

                            Online Java Compiler.
                Code, Compile, Run and Debug java program online.
Write your code in this editor and press "Run" button to execute it.

*******************************************************************************/
package collection_framework;

import java.util.HashSet;
import java.util.Iterator;


public class Java_HashSet
{
    
    
    
  
  public static void main (String[]args)
  {

    
    HashSet<String> cars = new HashSet<String>();
    
    cars.add("BMW");
    cars.add("Tesla");
    cars.add("Mersedeze");
    cars.add("Volvo");
    
    System.out.println(cars);
    
    
    // // check if item exists
    // System.out.println(cars.contains("BMW"));
    
    
    // //remove an item
    // cars.remove("Volvo"); 
    // System.out.println("Volvo removed : " + cars);
    
    
    // // size()
    // System.out.println("Size : " + cars.size());
    
    // // isEmpty()
    // // cars.clear();
    // System.out.println("isEmpty() : " + cars.isEmpty());
    
    
    // // Iterator
    // Iterator<String> itCars = cars.iterator();
    
    // System.out.println(itCars.next());
    // System.out.println(itCars.next());
    // System.out.println(itCars.next());
    
    
    // // loop through HashSet using iterator
    // // hasNext() and next()
    
    // while(itCars.hasNext()){
    //     System.out.println(itCars.next());
    // }
    
    
    // // removing items (remove numbers less then 10)
    
    // HashSet<Integer> rollNumber = new HashSet<Integer>();
    // rollNumber.add(13);
    // rollNumber.add(6);
    // rollNumber.add(16);
    // rollNumber.add(2);
    // rollNumber.add(10);
    
    // System.out.println("Original rollNumber Set : " + rollNumber);
    
    // Iterator<Integer> num = rollNumber.iterator();
    
    // while(num.hasNext()){
    //     Integer i = num.next();
    //     if(i < 10){
    //         num.remove();
    //     }
    // }
    
    // System.out.println("After removal : " + rollNumber);
    
    
  }
}
