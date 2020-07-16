package collection_framework;

import java.util.Deque;
import java.util.LinkedList;
import java.util.Iterator;


class MyDeque{
    
    Deque<Integer> deque = new LinkedList<Integer>(); // Dequeu implementation
    
    // add methods
    public void add(int element)
    {
     deque.add(element);
    }
    
    public void addFirst(int element)
    {
     deque.addFirst(element);
    }
    
    public void addLast(int element)
    {
     deque.addLast(element);
    }
    
    public void push(int element)
    {
     deque.push(element);// add to head
    }
    
    // Examine methods
    public void offer(int element)
    {
     deque.offer(element);
    }
    
    public void offerFirst(int element)
    {
     deque.offerFirst(element);
    }
    
    public void offerLast(int element)
    {
     deque.offerLast(element);
    }
    
    
    public int getFirst()
    {
     return deque.getFirst();
    }
    
    public int getLast()
    {
     return deque.getLast();
    }
    
    public int peekFirst()
    {
     return deque.peekFirst();
    }
    
    public int peekLast()
    {
     return deque.peekLast();
    }
    
    // remove methods
    public void removeFirst()
    {
     deque.removeFirst();
    }
    
    public void pollFirst()
    {
     deque.pollFirst();
    }
    
    public int pop()
    {
     return deque.pop();
    }
    
    public void removeLast()
    {
     deque.removeLast();
    }
    
    public void pollLast()
    {
     deque.pollLast();
    }
    
    // iterate thourgh deque elements
    public void IterateDeque()
    {
        Iterator iterator = deque.iterator();
        System.out.println("defaul : ");
        while(iterator.hasNext() )
        {
         System.out.println("\t" + iterator.next());
        }
    }
    
    // reverse order
    public void IterateReverse()
    {
     Iterator iterator = deque.descendingIterator();
     System.out.println("reverse Order : ");
     while(iterator.hasNext())
     {
        System.out.println("\t" + iterator.next()); 
     }
     
    }
    
    // check if element present
    public boolean isExist(int element)
    {
     return deque.contains(element);
    }
    
    
    
    
    public void display_deque()
    {
     System.out.println(deque + "\n");
    }
    

}


public class Java_Deque
{
    
    
    public static void main (String[] args) {
        /* code */
    
     MyDeque Obj = new MyDeque();
     
     // we can add elements through various menthods
     Obj.add(1);
     Obj.add(2);
     Obj.add(3);
     
     // addFirst methods (element inserted at head)
     Obj.addFirst(-89);
     Obj.push(0);
     Obj.offerFirst(-1);
     
     // addLast methods (inserted to tail)
     Obj.addLast(100);
     Obj.offer(101);
     Obj.offerLast(103);
     
     // Examine methods
     
    //  // get first element
     
    //  System.out.println("getFirst : " + Obj.getFirst());
    //  System.out.println("peekFirst : " + Obj.peekFirst());
     
    //  // get last element
    //  System.out.println("getLast : " + Obj.getLast());
    //  System.out.println("getLast : " + Obj.peekLast());
     
     
     
    //  // remove from head
    //  Obj.removeFirst();
    //  Obj.pollFrst();
     
    //  Obj.pop(); // remove head and returns it
     
    //  // remove from tail
    //  Obj.removeLast();
    //  Obj.pollLast();
    
    // // iterate throuhg deque elements
    // Obj.IterateDeque();
    // Obj.IterateReverse();
    
    // // check if element Exists
    // System.out.println( Obj.isExist(-89) );
    // System.out.println( Obj.isExist(5) );
    
    
     
     
    // Obj.display_deque();
        
        
    }
    
    
}
