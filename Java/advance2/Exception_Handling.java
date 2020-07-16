import java.util.*;
import java.lang.*;
import java.io.*;



public class Main{
    
    static void mph_to_kmh(double speed)
    {
        // Programmatic Exceptions --> created by programmer explicitly using 'throw' keyword
        
        double kmh = 0;
        
        if(speed < 0)
        {
            throw new ArithmeticException("speed cant be negative");
        }
        else{
            kmh = 1.6093 * speed;
        }
        
        System.out.println("speed in kmh : " + kmh + " km/h");
        
    }
    
    
    public static void main (String[] args) {
        /* code */
        // HashMap<Integer, String> hm = new HashMap<Integer, String>();
        // LinkedHashMap<String, Integer> lhm = new LinkedHashMap<String, Integer>();
        // SortedMap<String, Integer> sm = new TreeMap<String, Integer>(Collections.reverseOrder()); //pre-sorted by keys
        // NavigableMap<Integer, String> nm = new TreeMap<Integer, String>();
        
    
        
        // mph_to_kmh(-9.1);
        
        int[] arr = new int[4];
        
        
        // JVM Exceptions --> exclusively or logically thrown by JVM
        try
        {
          System.out.println(arr[5]);
        }
        catch(ArrayIndexOutOfBoundsException err) 
        {
            // different methods to print catched exception
            err.printStackTrace();
            
            // System.out.println(err.toString());
            // System.out.println(err.getMessage());
            // System.out.println(err);
        }
        
        
        
        
        
    }
    
    
}
