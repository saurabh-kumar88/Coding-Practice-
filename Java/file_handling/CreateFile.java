package file_handling;

import java.io.File;
import java.io.IOException;


public class CreateFile
{
    
    public static void main (String[] args) {
        
        try
        {
            File myFile = new File("my_first_file.txt");
            if(myFile.createNewFile())
            {
              System.out.println("File created : " + myFile.getName());
            }
            else
            {
              System.out.println("File already exists. ");   
            }
            
        }catch(IOException e)
        {
            System.out.println("Some thing went wrong??");
            e.printStackTrace();
        }
        
    }
    
}