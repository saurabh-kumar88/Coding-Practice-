package collection_framework;

enum Days{
  SUNDAY,
  MONDAY,
  TUESDAY
}

public class EnumClass{

  public static void main(String[] args) {
    
    System.out.println("Hello world");

    // loop through enum

    for (Days myVar : Days.values()) {
      System.out.println(myVar);
    }
     
    Days myobj = Days.MONDAY;
    System.out.println(myobj);
    // enum in Switch statement
    // switch(myObj){

    //   case SUNDAY:
    //     System.out.println("Today is sunday");
    //     break;

    //   case MONDAY:
    //     System.out.println("Today is Monday");
    //     break;

    //   case TUESDAY:
    //     System.out.println("Today is Tuesday");
    //     break;

    // }

    
  }

}