package advance;

class MyOuter{
  int x = 45;

  class MyInner{
    int y = 100;
    // access outer class
      public int accessOuter(){
        return x;
      }
  }
}


public class InnerClass{

  public static void main(String[] args) {
    // accessing inner class
    MyOuter myOuter = new MyOuter();
    MyOuter.MyInner myInner = myOuter.new MyInner();
    
    // MyOuter.MyInner myInner = new MyOuter.MyInner(); // static inner class can accessed without object
    System.out.println(myOuter.x );
    System.out.println(myInner.y);

    // Access outer class from inner class
    System.out.println( "Access outer class from inner class  " + myInner.accessOuter() );
    

  }

}
