package basics;

public class StringMethods{
  
  
  public static void main(String[] args) {
    String testString = "foo bar";
    String test = "Please locate where 'locate' ocuur";
    String pwd = "       I am going in       @ 20  2 0     ";

    System.out.println(testString + testString.length());
    System.out.println(testString.toUpperCase());
    System.out.println(testString.toLowerCase());
    
    // char[] arr = testString.toCharArray();
    // for (int i = 0; i < arr.length; i++) {
    //   System.out.println( arr[i] );
    // }

    // // finding character in string
    // System.out.println(test.indexOf("locate") );

    // // remove whitespace, replace
    // System.out.println(pwd.replaceAll("\\s", ""));
    // pwd = pwd.replace("going", "coming");
    // System.out.println(pwd);

    // string.matches() method
    // System.out.println(test.matches( "(.*)ocuurs(.*)" ));

    // // string.split() method
    // String gog = "GeeksofGeeks";
    // String[] arr = gog.split("", 2);

    // for (int i = 0; i < arr.length; i++) {
    //   System.out.print( arr[i] );
    // }

    // for (String a : arr) {
    //   System.out.print(a);
    // }




  }

}