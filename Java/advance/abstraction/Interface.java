package advance.abstraction;

// Abstraction can also be achieved with java "interface" modifier 

interface Animal{ // abstract class cannot be instantiated but inherited

  // abstract method dont have body
  public void animalSound();
  public void sleep();

}

// subclass (inherit from Animal abstract class)

class Pig implements Animal{

  public void animalSound(){
    System.out.println("The pig says : swee swee!");
  }

  public void sleep(){
    System.out.println("Zzz");
  }

}


public class Interface{

  public static void main(String[] args) {
    
    Pig myObj = new Pig();
    myObj.animalSound();
    myObj.sleep();
  }

};

