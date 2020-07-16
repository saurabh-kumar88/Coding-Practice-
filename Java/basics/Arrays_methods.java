package basics;

import java.util.Arrays;
import java.util.Collections;

import com.sun.xml.internal.bind.v2.runtime.unmarshaller.XsiNilLoader.Array;
public class Arrays_methods{

  public static void main(String[] args) {
    
    String[] cars = {"Volvo", "BMW", "Aoudi", "Mersedeze"};
    int[] num = {12,45,67,81};
    float[] fnum = {-56.3f, 56.01f, 88.11f};

    cars[0] = "Jaguar";

    // for (int i = 0; i < cars.length; i++) {
    //   System.out.println(cars[i]);
    // }

    // foreach() 
    // for (int var : num) {
    //   System.out.println(var);
    // }

    // int[][] matrix = { {1,2,3}, {4,5,6} };

    // for (int i = 0; i < matrix.length; i++) {
    //   for (int j = 0; j < matrix[i].length; j++) {
    //     System.out.print(matrix[i][j] + " ");
    //   }
    //   System.out.println("");
    // }

    //sorting

    int[] arr = {13, 7, 6, 45, 21, 9, 101, 102}; //primitive  
    Arrays.sort(arr);
    System.out.print(Arrays.toString(arr));
    

    Integer[] Arr = {45,12,1,25,74}; //Wrapper class
    
    
    // Arrays.sort(Arr, Collections.reverseOrder());
    
    
    // for (int i = 0; i < arr.length; i++) {
    //   System.out.println(arr[i]);
    // }
    

  }

}