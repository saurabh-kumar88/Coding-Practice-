package advance.inheritance;


public class Animal{

  public void animalSound(){
    System.out.println("The animal sound");
  }


}


class Pig extends Animal{

  public void animalSound(){
    System.out.println("pig says : swee swee"); //Polymorphic code--> same method but different functionality
  }

}

class Dog extends Animal{
  public void animalSound(){
    System.out.println("dog says : bow bow");
  }
}


class Test{

  public static void main(String[] args) {
    Animal myObj = new Animal();
    myObj.animalSound();

    Pig myObj2 = new Pig();
    myObj2.animalSound();

    Dog myObj3 = new Dog();
    myObj3.animalSound();
    
  }
}