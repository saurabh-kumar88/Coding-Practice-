package advance;

public class Users{

  static int usersCount = 0;
  
  String fName = "Anikeit";
  String lName = "rohtagi";
  int age = 30;
  boolean isActive=true;
  final String mobileNumber = "9718087950";
  
  public void displayName() {
    System.out.println(fName.toUpperCase()+ " "+lName.toUpperCase());
  }

  static void helloWorld(){
    //static methods accessed without objects
    System.out.println("Hello world");
  }


  public static void main(String[] args) {

    Users myObj1 = new Users();
    Users myObj2 = new Users();
    
    myObj2.age = 45; // modifying attribute , leaves original value unchanged
    System.out.println(myObj1.age);
    System.out.println(myObj2.age);
    myObj2.displayName();
    System.out.println(usersCount);
    helloWorld();
  }


};