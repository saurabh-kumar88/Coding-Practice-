package advance.inheritance;

public class BMW{

protected String brand = "x400";
protected float maxSpeed;

// constructor
public BMW(float speed){
  this.maxSpeed = speed;
}
  public void honk(){
    System.out.println("honk honk from BMW");
  }

  public float speed_kmh(){
    float speed_kmh = maxSpeed * 1.60934f;
    return speed_kmh;
  }

}


class Tesla extends BMW{

  private String modelName = "Tesla-model-S"; 

  protected float odometer_record;
  //constructor
  public Tesla(float record, float speed){
    super(speed);
    this.odometer_record = record;
    
  }

  public static void main(String[] args) {
    Tesla myObj = new Tesla(45.33f, 1.0f );
    myObj.honk();
    System.out.println(myObj.brand);
    System.out.println(myObj.speed_kmh()); // parent class method
  }

}
