package file_handling;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;


public class WriteFile
{
    
    public static void main (String[] args) {
        
        try
        {
          FileWriter fileObj = new FileWriter("my_first_file2.txt");
          for (int i=0; i<10; i++)
            {
                fileObj.write("\nfoo bar!");      
            }
          
          
          fileObj.close();
          System.out.println("Successfully wrote to file!");
        } catch(IOException e)
        {
            System.out.println("Some thing went wrong??");
            e.printStackTrace();
        }
        
    }
    
}