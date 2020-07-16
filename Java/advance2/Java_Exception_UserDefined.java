import java.util.*;


class MyException extends Exception{
    // since all Exceptions are subclass of Exception class
    
    MyException(String str)
    {
      //parametrize constructor
      super(str);
    }
    
    
}


public class Main{
    
    public static void main (String[] args) {
        
        int[] Age = {61, 65, 50, 45, 23, -89};
        
        try{
            
            for(int age=0; age<Age.length; age++)
            {
                if(Age[age] > 70)
                {
                    MyException me = new MyException("number is less then 50");
                    throw me;
                }
                else if(Age[age] < 0)
                {
                    MyException me = new MyException("marks cant be negative");
                    throw me;
                }
             
            }
            
        }
        catch(MyException err)
        {
          err.printStackTrace();
        }
                        
    }
    
    
}
