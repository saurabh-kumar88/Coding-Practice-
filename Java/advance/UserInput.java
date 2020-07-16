package advance;
import java.util.Scanner;

public class UserInput{

    public static void main(String[] args) {
      Scanner myObj = new Scanner(System.in);
      System.out.println("Input your full name : ");
      String userInput = myObj.nextLine();
      System.out.println(userInput.toUpperCase());
    }

}