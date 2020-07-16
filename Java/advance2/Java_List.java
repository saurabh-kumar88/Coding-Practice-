/******************************************************************************

                            Online Java Compiler.
                Code, Compile, Run and Debug java program online.
Write your code in this editor and press "Run" button to execute it.

*******************************************************************************/
package advance2;

import java.util.ArrayList;	// java list or dynamic array
import java.util.Collections;

public class Java_List
{
  public static void main (String[]args)
  {
    ArrayList < String > cars = new ArrayList < String > ();
    cars.add ("BMW");
    cars.add ("Tesla");
    cars.add ("Ford");
    cars.add ("Lamborgini");

    System.out.println (cars);
    System.out.println (cars.indexOf ("Tesla"));

//              // ________ access item ______
//              System.out.println(cars.get(0));

//              // ________ change an item ___________
//              cars.set(0, "Toyota");
//              System.out.println(cars);

//              // __________ remove an item _______
//              cars.remove(1);
//              System.out.println(cars);

    // remove all elements
//              cars.clear();
//              System.out.println(cars);

//              // ___________ get length _______
//              System.out.println(cars.size());

//              // _______ loop through ArrayList ___________
//              for(int i=0; i<cars.size(); i++){
//                  System.out.println(cars.get(i));
//              }

    //______ forEach loop _____

//              for(String i : cars){
//                  System.out.println(i);

//              }



    // ______________ Sorting __________
    ArrayList < Integer > numbers = new ArrayList < Integer > ();
    numbers.add (12);
    numbers.add (-9);
    numbers.add (56);
    numbers.add (10);
    numbers.add (2);
    System.out.println (numbers);
    // after sorting
    Collections.sort (numbers);
    System.out.println (numbers);

    // ___________ Comparators _________

    ArrayList < Integer > rollNumber = new ArrayList < Integer > ();
    rollNumber.add (112);
    rollNumber.add (109);
    rollNumber.add (156);
    rollNumber.add (115);
    rollNumber.add (46);

    // sort in reverse order
    // Collections.sort(rollNumber, (int a, int b) -> {return a > b; } );
    // System.out.println("reverseOrder : " + rollNumber);

  }
}
