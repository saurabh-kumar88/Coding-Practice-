package collection_framework;


import java.util.*;


class  ProgramingLanguages{
    
    PriorityQueue<String> pLang = new PriorityQueue<String>();
    
    
    public void add(String string)
    {
     pLang.add(string);
    }
    
    public void peek()
    {
     System.out.println("peek : " + pLang.peek());
    }
    
    public void removePeek()
    {
     pLang.poll();
     System.out.println("after removal : ");
     this.display();
    }
    
    // iterate through
    
    public void Iterate()
    {
     
     Iterator<String> itr2 = pLang.iterator();
     
     while(itr2.hasNext())
     {
      System.out.println("\t" + itr2.next());
     }
     
     
    }
    
    // check if element is present
    public void isExists(String string)
    {
     System.out.println(pLang.contains(string));
    }
    
    
    public void display()
    {
     System.out.println(pLang);
    }
    
    
    
}



public class Java_PriorityQueue
{
    public static void main (String[] args) {
        /* PriorityQueue */
        PriorityQueue<Integer> pQueue = new PriorityQueue<Integer>();
        
        // add elements
        pQueue.add(11);
        pQueue.add(2);
        pQueue.add(-9);
        pQueue.add(0);
        
        // System.out.println("Orginal : " + pQueue);
        
        // System.out.println("peek : " + pQueue.peek());
        // System.out.println("poll : " + pQueue.poll());
        // System.out.println("peek : " + pQueue.peek());
        
        // System.out.println("getLast : " + pQueue.getLast());
        
        // //______ pQueue elements to array _____
        // Object[]  arr = pQueue.toArray();
        // for(int i=0; i<arr.length; i++)
        // {
        //     System.out.println("Values : " + arr[i].toString());
        // }
        
        
        ProgramingLanguages Obj = new ProgramingLanguages();
        Obj.add("Java");
        Obj.add("Python");
        Obj.add("JavaScript");
        Obj.add("CSS");
        Obj.add("HTML5");
        
        // Obj.peek();
        
        // Obj.removePeek();
        
        // Obj.Iterate();
        
        // check if present
        // Obj.isExists("Java");
        // Obj.isExists("Kotlin");
        
        
    }
}