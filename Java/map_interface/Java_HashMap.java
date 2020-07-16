  /******************************************************************************

                            Online Java Compiler.
                Code, Compile, Run and Debug java program online.
Write your code in this editor and press "Run" button to execute it.

*******************************************************************************/
package collection_framework;

import java.util.HashMap;

public class Java_HashMap
{
  public static void main (String[]args)
  {

    HashMap < String, String > capitalCities = new HashMap < String, String > ();

    // add items
    capitalCities.put ("India", "New delhi");
    capitalCities.put ("Canada", "Otawa");
    capitalCities.put ("USA", "Washington DC");
    capitalCities.put ("England", "London");

    System.out.println (capitalCities);


//     // access items
//     System.out.println (capitalCities.get ("India"));

//     // remove item
//     capitalCities.remove ("USA");
//     System.out.println (capitalCities);

//     // clear()
// //      capitalCities.clear();
// //      System.out.println(capitalCities);

//     // loop through 

//     for (String i: capitalCities.keySet())
//       {
// 	System.out.println (i);
//       }

//     for (String i:capitalCities.values ())
//       {
// 	System.out.println (i);
//       }


//     // Different types of key-value pairs

//     HashMap < String, Integer > name_age = new HashMap < String, Integer > ();

//     name_age.put ("Anushka", 31);
//     name_age.put ("Deepika", 32);
//     name_age.put ("Katrina", 28);
//     name_age.put ("Sonakshi", 35);

//   for (String i: name_age.keySet() )
//       {
// 	System.out.println ("Name : " + i + " " + name_age.get (i));
//       }


//     // update age of Deepika

//     name_age.computeIfPresent ("Deepika", (k, v)->v + 1);
//     System.out.println ("Updated age of Deepika : " +
// 			name_age.get ("Deepika"));

//     // sorting






  }
}
