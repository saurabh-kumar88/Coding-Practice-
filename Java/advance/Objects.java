package advance;

public class Objects{
  int x = 5;
  public void displayName(String fName, String lName) {
    System.out.println(fName.toLowerCase() +" "+lName.toUpperCase());    
  }
  public static void main(String[] args) {
    // creating object of Objects class
    Objects myObj = new Objects();
    System.out.println(myObj.x);
    myObj.displayName("saurabh", "kumar");
  }

}