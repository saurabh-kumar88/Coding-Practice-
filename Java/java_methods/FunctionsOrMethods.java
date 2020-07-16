package java_methods;

public class FunctionsOrMethods {

  static void myMethod(){
    System.out.println("Hello from myMethod");
  }

  static int add(int a , int b){
    return (a + b);
  }

  static void fullName(String fName, String lName){
    System.out.println(fName + " " + lName);
  }

  static void iterateArray(int [] arr){
    for (int i = 0; i < arr.length; i++) {
      System.out.println(arr[i]);
    }
  }

  //multiple arguments

  static void userInfo(int age, String name, float height, boolean isActive){
    
    if (age >= 18) {
      System.out.println("Acess granted");
      System.out.println("Age " + age);
      System.out.println("Name " + name);
      System.out.println("Height " + height);
      System.out.println("isActive " + isActive);
    }
    else{
      System.out.println("Not legal age!");
    }

      
  }

  public static void main(String[] args) {
    // myMethod();
    // System.out.print("Sum of two numbers : " +  add(10, 10) );
    // fullName("Saurabh", "Kumar");

    // int[] A = {1,2,3,4,5,6,7,8,9} ;
    // iterateArray(A);

    userInfo(45, "Ajay devgan", 6.2f, true);
    userInfo(13, "Saurabh kumar", 6.1f, true);



  }



}