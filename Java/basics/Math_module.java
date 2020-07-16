package basics;

public class Math_module{
  public static void main(String[] args) {
  int max_limit = 10;
  int min_limit = 1;
   
    // for (int i = 0; i < 10; i++) {
    //   double random_number  = ( Math.random() * (max_limit - min_limit) ) + min_limit ;
    //   System.out.println((int)random_number);
    // }
    
    // type casting in java
    String myNum  = "-45.10";
    System.out.println( Float.parseFloat(myNum) * 10 );
    System.out.println( Integer.parseInt(myNum) * 10 );

  }
}