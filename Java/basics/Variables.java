package basics;

public class Variables{
    
   public static void main(String[] args) {
    String first_name = "Saurabh";
    String last_name = "Kumar";
    int Age = 31;
    double height = 6.2;
    char myLetter = 'A';
    
    float myFloatNum = 5.99f;
    float f1 = 35e-3f;
    double d1 = 12E4d;

    boolean isJavaFun = false;
    boolean isJava_more_Employable = true;
  
    
    System.out.print("\nfirst name " + first_name );
    System.out.print("\nlast name " +last_name);
    
    System.out.print("\nAge " + Age);
    System.out.print("\nHeight " + height);
    
    System.out.print("\nmyLetter " + myLetter);
    System.out.print("\nmyFloatNum "+ myFloatNum);

    System.out.print("\nScientific numbers");
    System.out.print("\nf1 " + f1);
    System.out.print("\nd1 " + d1);

    System.out.print("\n boolean");
    System.out.print("\nisJavaFun " +isJavaFun);
    System.out.print("\nisJava_more_Employable " + isJava_more_Employable);

    // print ascii values of char
    int myValue = 'A';
    System.out.print("\nascii value : " + myValue);

    // ascii value to char
    char A = 65;
    System.out.print("\n" + A);

    System.out.println("\n Java Type casting ");
    char a = '1';
    int b = a;
    System.out.print(b);  


  }



}