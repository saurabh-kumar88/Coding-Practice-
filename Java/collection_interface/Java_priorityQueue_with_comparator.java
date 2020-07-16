import java.util.*;

class String_Comparator implements Comparator<String>{
        // based of hash values - non decreasing order
        
        public int compare(String str1, String str2)
        {
          String first_string = str1;
          String second_string = str2;
          int ans = second_string.compareTo(first_string); 
        //   System.out.println(first_string + " " + second_string + " " + ans );
          return ans;
          
        }
    }

public class Java_priorityQueue{
    
    
    public static void main (String[] args) {
        
        PriorityQueue<String> q = new PriorityQueue<String>(new String_Comparator());
        // PriorityQueue<String> q = new PriorityQueue<String>();
        
        q.add("F");
        q.add("Z");
        
        // q.add("A");
        // q.add("B");
        
        // for(String str: q)
        // {
        //     System.out.print("\t" + str);
        // }
        
        
        String str1 = "FOO BAR";
        String str2 = "foo bar";
        
        // for Strings:
        // str.compareTo() --> gives laxicographical (alphabatical) difference between two Strings
        // str.CompareToIgonreCase() --> case insensitive version
        System.out.println("case sensitive : " + str1.compareTo(str2) );
        System.out.println("case insensitive : " + str2.compareToIgnoreCase(str1) );
        
        
        Integer a = new Integer(6);
        Integer b = new Integer(5);
        // for Intgers : 
        // if a > b --> 1
        // if a < b --> -1
        // if a = b --> 0
        System.out.println("compare two objects Integer objects : " + a.compareTo(b) );
        
        
        
    }
    
    
}