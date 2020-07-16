package collection_framework;



import java.util.Queue;
import java.util.LinkedList;



class MyIntQueue{
    
    Queue<Integer> q = new LinkedList<Integer>();
    
    // add elements to Queue
    public void add(int element)
    {
        q.add(element);
    }
    
    // print all elements
    public void display_content()
    {
      System.out.println("content : " + q);
    }
    
    // To view the head (fist element) of queue
    
    public void display_peek()
    {
      System.out.println("head element : " + q.peek());   
    }
    
    // To remove head element
    public void remove()
    {
      q.remove();
      
      System.out.print("Updated queue : ");
      this.display_content();
    }
    
    // To get size
    public void get_size()
    {
      System.out.println("size : " + q.size());
    }
    
    
    
}



public class Java_Queue{
    
    
    public static void main (String[] args) {
        
        MyIntQueue queue = new MyIntQueue();
        queue.add(1);
        queue.add(2);
        queue.add(3);
        
        queue.display_content();
        
        queue.display_peek();
        
        queue.remove();
        queue.get_size();
        
    }
    
    
}


