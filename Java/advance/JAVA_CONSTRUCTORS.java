package advance;

public class JAVA_CONSTRUCTORS{
  int model_year;
  String model_name;
  // create class constructor
  public JAVA_CONSTRUCTORS(int year, String model){
  this.model_name = model;
  this.model_year = year;
  }
  
  public void model(){
    System.out.println("public " + this.model_name);
  }
  
  private void modelName(){
    // The code is only accessible/visible within the declared class
    System.out.println("private " + this.model_name);
  }
  

  public static void main(String[] args) {
    JAVA_CONSTRUCTORS myObj = new JAVA_CONSTRUCTORS(2020, "Mastang GT");
    // System.out.println(myObj.model_name);
    // System.out.println(myObj.model_year);

    myObj.model();
    myObj.modelName();

  
  }

}