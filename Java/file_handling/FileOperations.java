import java.io.File;
import java.io.FileWriter;
import java.io.IOException;

  import java.util.Scanner;
import java.io.FileNotFoundException;

public class FileOperations
{
    
    //_____ craete and write _______
    static void create_and_write(String file_name)
    {
        try
        {
          FileWriter fileObj = new FileWriter( file_name );
          for (int i=0; i<10; i++)
            {
              fileObj.write("\nfoo bar!");      
            }
          
          fileObj.close();
          System.out.println("Successfully wrote to file!");
        } 
        catch(IOException e)
        {
            System.out.println("Some thing went wrong??");
            e.printStackTrace();
        }
    
        
    } 
    
    // ______ read file _______
    static void readFile(String file_name)
    {
      
      try
      {
        File fileObj = new File(file_name);
        Scanner reader = new Scanner(fileObj);
        
        while(reader.hasNextLine())
        {
            String data = reader.nextLine();
            System.out.println(data);
        }
      }
        catch(FileNotFoundException e)
        {
         System.out.println("Something went wrong??");
         e.printStackTrace();
        }
    
        
    }
    
    
    // _______ get all info _____________
    static void getFileInfo(String file_name)
    {
      File fileObj = new File(file_name);
      if(fileObj.exists())
      {
        System.out.println("File name : " + fileObj.getName());
        System.out.println("Absolute path : " + fileObj.getAbsolutePath());
        System.out.println("isWritable : " + fileObj.canWrite());
        System.out.println("isReadable : " + fileObj.canRead());
        System.out.println("file size : " + fileObj.length());
        
      }
      else{
        System.out.println("file not found");  
      }
        
    }
    
    // _____________ delete file ___________
    static void deleteFile(String file_name)
    {
        File fileObj = new File(file_name);
        if(fileObj.delete())
        {
            System.out.println("File deleted : " + fileObj.getName());
        }
        else{
            System.out.println("Delete operation Failed!");
        }
    }
    
    
    public static void main (String[] args) {
        
        // create_and_write("file1.txt");
        readFile("file1.txt");
        // getFileInfo("file1.txt");
        // deleteFile("file1.txt");
    }
    
    

}