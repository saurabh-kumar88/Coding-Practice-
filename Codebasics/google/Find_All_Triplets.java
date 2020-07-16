package google;

import java.util.*;

public class Find_All_Triplets{

  /* find all unique triplets from array whose sum is zero*/ 
  
  static List<List<Integer>> usingSorting(int[] arr)
  {
    List<List<Integer>> result = new ArrayList<>();
    int n = arr.length -1;

    // sorting the array

    Arrays.sort(arr);

    for(int i=0; i<n; i++)
    {
      // index variables
      int start = i + 1;
      int end = n;

      if(i>0 && arr[i] == arr[i-1]) // To avoid duplicate set, if adjacent elements are same
      {
        continue;
      }

      while(start < end)
      {
        // To avoid duplicate sets
        if(end < n && arr[end] == arr[end+1])
        {
          end--;
          continue;
        } 

        // condition 1: valid triplet
        if(arr[i] + arr[start] == arr[end])
        {
          // add to result
          List<Integer> triplet = Arrays.asList(arr[i], arr[start], arr[end]);
          result.add(triplet);
          start++;
        }

          // condition 2: sum < 0
          else if(arr[i] + arr[start] + arr[end] < 0)
          { 
            start++;
          } 
          // condition 3: sum > 0
            else
            {
              end--;
            }

      }


    }

    return result;

  }




    public static void main(String[] args) {
      int[] A = {0, -1, 2, -3, 1};
      
      System.out.println(usingSorting(A));
    
    }

}