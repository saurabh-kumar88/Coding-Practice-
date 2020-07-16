package advance.abstraction;

// Note: Java does not support multiple inheritance but it can be achieved with 
// multiple interface


interface FirstInterface{
  
  public void Firstmethod();

}

interface SecondInterFace{

  public void SecondMethod();

}

  // Rule1: On implementation of an interface, you must override all of its methods
  // Rule2 : interfaces cannot be used to create objects
  // Rule3 : Interface methods are by default abstract and public
  // Rule4 : Interface attributes are by default public, static and final
  // Rule5: An interface cannot contain a constructor

class DemoClass implements FirstInterface, SecondInterFace{
  
  public void Firstmethod(){
    System.out.println("Some text from method 1");
  }

  public void SecondMethod(){
    System.out.println("Some more text from method 2");
  }
  
}


public class Multiple_Interface{

  public static void main(String[] args) {
    
    DemoClass myobj = new DemoClass();

    myobj.Firstmethod();
    myobj.SecondMethod();


  }


}


