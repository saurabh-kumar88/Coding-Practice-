/******************************************************************************

                            Online Java Compiler.
                Code, Compile, Run and Debug java program online.
Write your code in this editor and press "Run" button to execute it.

*******************************************************************************/
package advance2;
public class WrapperClass
{
  public static void main (String[]args)
  {
    
    Integer myInt = 11;
    String myStr = "foo bar";
    Character myCahr = 'A';
    Double mydDouble = 3.14;
    
    int a = 1112;
    
    System.out.println(myInt.intValue());
    System.out.println(myInt.toString());
    System.out.println(Integer.toHexString(a));       
  }
}

