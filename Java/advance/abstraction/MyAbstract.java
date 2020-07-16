package advance.abstraction;

abstract class Animal{ // abstract class cannot be instantiated but inherited

  // abstract method dont have body
  public abstract void animalSound();

  // regular method
  public void sleep(){
    System.out.println("Zzz");
  }

}

// subclass (inherit from Animal abstract class)

class Pig extends Animal{

  public void animalSound(){
    System.out.println("The pig says : swee swee!");
  }

}


public class MyAbstract{

  public static void main(String[] args) {
    
    Pig myObj = new Pig();
    myObj.animalSound();
    myObj.sleep();
  }

};

