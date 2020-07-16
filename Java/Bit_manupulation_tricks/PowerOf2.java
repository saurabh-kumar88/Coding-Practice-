package Bit_manupulation_tricks;


/* How Does it work : Numbers which can be represented by power of 2, 4, 8 or any event numer, 
   have only one set bit in their binary form

power of 2

0001 -- 2
0010 -- 4
0100 -- 8

power of 4

0010 -- 4
10000 -- 16

*/

public class PowerOf2 {

static boolean isPowerOf2(int num)
  {
     
    int setBit = Integer.bitCount(num);
    
    if(setBit == 1)
    {
     return true;
    }
    return false;
  }
  
  
  public static void main(String[] args) {
    
    System.out.println(isPowerOf2(33));
    System.out.println(isPowerOf2(16));
		    
  }

}