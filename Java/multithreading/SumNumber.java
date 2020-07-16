class Solution {
    public int numSquares(int n) {
        
        
        ArrayList<Integer> arr = new ArrayList<Integer>();
        ArrayList<Integer> combinations = new ArrayList<Integer>();
        
        for(int i=1; i<n; i++)
        {    
            double sqr = Math.pow(i, 2);
            if(sqr < n)
            {
              arr.add((int)sqr);
            }
        }
        
        // 1. single element combination (repitive)
        
        for(int i=0; i< arr.size(); i++)
        {
            int temp = arr.get(i);
            for(int j=1; j<n; j++)
            {
                
                // System.out.println("temp " + temp +"count : " + j +" ="+ j*temp );
                if( temp * j == n)
                {
                    combinations.add(j);
                    // System.out.println("Min comb : " + j); 
                }
                  
            }
            
        }
        System.out.println("Min combinatoins : " + Collections.min( combinations )  );
        
        // 2. combinations in-between of list elements (non repitive) 
        
        for(int i=0; i<arr.size(); i++)
        {
          int temp = arr.get(i);
            for(int j=0; j<arr.size(); j++)
            {
                int temp2 = arr[j];
                if(temp2 != temp1)
                {
                  if(temp1 + temp2 == n)
                      
                }
            }
        }
        
        
        return Collections.min( combinations );
        
    }
    
    
    
}