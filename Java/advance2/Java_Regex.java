    /******************************************************************************

                            Online Java Compiler.
                Code, Compile, Run and Debug java program online.
Write your code in this editor and press "Run" button to execute it.

*******************************************************************************/
package advance2;

import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.ArrayList;


public class Java_Regex
{
  
  
  static void findWord(String text, String word)
  {
    Pattern subject = Pattern.compile(word, Pattern.CASE_INSENSITIVE);
    Matcher matcher = subject.matcher(text);
    
    boolean matchFound = matcher.find();
    
    if(matchFound)
    {
        System.out.println("Match found");    
    }
    else
    {
        System.out.println("No match found");
    }
    
  }
  
  static ArrayList getOccurrence(String txt, String sub)
  {
    // ArrayList<Integer> match_groups = new ArrayList<Integer>();
    ArrayList<String> match_groups = new ArrayList<String>();
    
    Pattern search = Pattern.compile(sub);
    Matcher matcher = search.matcher(txt);
    
    
    while(matcher.find())
    {
        match_groups.add(matcher.group());
    }
    
    return match_groups;
      
      
  }
  
  
  static void findAnyPattern(String txt, String pattern)
  {
      Pattern patt = Pattern.compile(pattern);
      Matcher matcher = patt.matcher(txt);
      
      if(matcher.find())
      {
          System.out.println("match found");
      }
      else
      {
        System.out.println("No match found");    
      }
      
  }
  
  
  public static void main (String[]args)
  {
    
    // findWord("www.w3schools.com", "w3schools");
    
    
    // System.out.println( getOccurrence("www.w3schools.com", "w3schools") );
    
    findAnyPattern("Q 1. what does meant by 'foo bar' ?", "\\?"); //find special symbol
    // findAnyPattern("Q 1. what does meant by 'foo bar' ?", "\\d+"); // find any digit
    //  findAnyPattern("Q 1. what does meant by 'foo bar' ?", "\\bQ"); // find at the begining
    // findAnyPattern("Q 1. what does meant by 'foo bar' ?", "\\d+|\\??"); // pattern1 or pattern2
    
  }
  
  
  
  
  
}