
import java.util.*;

public class Java_treeSet
{
  public static void main (String[]args)
  {
    /* TreeSet */

    TreeSet < String > ts1 = new TreeSet < String > ();
    TreeSet < Integer > ts2 = new TreeSet < Integer > ();
    TreeSet < String > ts3 = new TreeSet < String > ();

    // add elements
    ts1.add ("A");
    ts1.add ("C");
    ts1.add ("B");
    // duplicate element will be discarded
    ts1.add ("A");

    // cannot add null, because null is not comparable
    // ts1.add(null);

    ts1.add ("a");

    ts3.add ("foo");
    ts3.add ("bar");


    int a = 78;

      ts2.add (1);
      ts2.add (11);
      ts2.add (23);
      ts2.add (a);

      System.out.println ("ts1 : " + ts1);
      System.out.println ("ts2 : " + ts2);
      System.out.println ("ts3 : " + ts3);

    // // -------------- addAll() method --------------

    // ts3.add("canada");
    // ts3.add("germany");
    // ts3.add("usa");

    // // append ts3 to ts1

    // ts1.addAll(ts3);
    // System.out.println("append ts3 to ts1 : " + ts1);

    // // append ArrayList to TreeSet
    // ArrayList<String> list = new ArrayList<String>();
    // list.add("new delhi");
    // list.add("ottawa");
    // list.add("wasshigton DC");

    // ts3.addAll(list);

    // System.out.println("append ArrayList to TreeSet : " + ts3);


    // // --------- treeSet.clear() ----------------
    // System.out.println("Orignal tree set : " + ts3);
    // ts3.clear();
    // System.out.println("After clear() : " + ts3);

    // // -------------- boolean treeSet.contains(object) --------------
    // System.out.println(ts1.contains("A"));
    // System.out.println(ts2.contains(-56));
    // System.out.println(ts3.contains("foo"));


    // // ------------ treeSet.first() and last() --------------
    // System.out.println(ts1.first());
    // System.out.println(ts1.last());

    // // if tree set is empty --> throws "NoSuchEelementException"
    // ts1.clear();
    // System.out.println(ts1.first());

    // //--------------- isEmpty() -----------
    // System.out.println(ts1.isEmpty());
    // ts1.clear();
    // System.out.println(ts1.isEmpty());


    // // -------------- headSet(), tailSet()  --------------
    // // return elements of TreeSet which are less than the specified element 
    // // tailSet() --> return elements of TreeSet which are greater than the specified element
    // // syntax :  head_set = (TreeSet)tree_set.headSet(Object element)
    // // ---------------------------------------------------------
    
    // TreeSet<Integer> tree_set = new TreeSet<Integer>();
    // TreeSet<Integer> head_set = new TreeSet<Integer>(); // creating head_set tree

    // tree_set.add(1);
    // tree_set.add(5);
    // tree_set.add(10);
    // tree_set.add(30);

    // head_set = (TreeSet<Integer>)tree_set.headSet(10);


    // Iterator itr;
    // itr = head_set.iterator();

    // System.out.println("Original tree_set : " + tree_set);

    // System.out.println("tree_set : ");

    // while(itr.hasNext())
    // {
    //  System.out.println(itr.next() + " ");
    // }
    
    
    

//     // ---------------- treeSet.subSet() ----------------- 
//     // subSet() --> in between range(min, max)
//     // syntax : TreeSet tree_set.subSet(Object low_element, Object up_element) 
       // -----------------------------------------------------------
       
//       TreeSet < Integer > tree_set = new TreeSet < Integer > ();
//       TreeSet < Integer > sub_set = new TreeSet < Integer > ();	// creating head_set tree

//       tree_set.add (1);
//       tree_set.add (5);
//       tree_set.add (10);
//       tree_set.add (30);
//       tree_set.add (-9);
//       tree_set.add (45);
//       tree_set.add (100);

//       sub_set = (TreeSet < Integer >) tree_set.subSet (5, 45);


//     Iterator itr;
//       itr = sub_set.iterator ();

//       System.out.println ("Original tree_set : " + tree_set);

//       System.out.println ("sub_set : ");

//     while (itr.hasNext ())
//       {
// 	System.out.println (itr.next () + " ");
//       }


    // // -------------- cloneSet() ----------------
    // // creates a shallow copy of tree set
    
    // System.out.println("ts1 Orignal : " + ts1);
    
    // // creating a copy of ts1 treeSet
    
    // TreeSet cloned_set = new TreeSet();
    
    // // cloning ts1
    // cloned_set = (TreeSet)ts1.clone();
    
    // System.out.println("clone of TreeSet : " + cloned_set);
    
    
    // // ------------- size() -------------
    // System.out.println("size : " + ts1.size());
        
    
    // // ------------ remove() ----------------
    
    // System.out.println("Orginal : " + ts1);
    // ts1.remove("A");
    // System.out.println("Updated : " + ts1);
    
    
    // // ------------- ceiling(E e)---------------
    // // returns the first element in this set which is greater than or equal to the given element 'e', 
    // //or null if there is no such element
    // //-----------------------------------------------
    // System.out.println("Orignal : " + ts2);
    // System.out.println(ts2.ceiling(15));
    // System.out.println(ts2.ceiling(100));



  }
}
