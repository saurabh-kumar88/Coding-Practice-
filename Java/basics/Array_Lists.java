package basics;

import java.util.ArrayList;

public class Array_Lists{

  public static void main(String[] args) {
    
    // ArrayList or dynamic array
    int n = 5;
    ArrayList<Integer> arrLi = new ArrayList<Integer>();
    for (int i = 0; i < 10; i++) {
      arrLi.add(i);
      
    }

    System.out.println(arrLi);
    System.out.println(arrLi.indexOf(5));
    System.out.println(arrLi.contains(-9));
    System.out.print(arrLi.size());
    System.out.print(arrLi.remove(0) );
    System.out.println(arrLi);
  }

}