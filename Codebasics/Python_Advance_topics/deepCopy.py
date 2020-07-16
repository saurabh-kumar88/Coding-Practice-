"""
Any changes made to a copy of object do not reflect in the original object. 
In python, this is implemented using “deepcopy()” function.

Why do we need to copy a object -- reference link 
https://www.geeksforgeeks.org/copy-python-deep-copy-shallow-copy/

"""

import copy

L1  = ['foo', 'bar']
L2  = ['love', 'You', '3000']


if __name__ == "__main__":

    
    # without deep copy
    list_obj = L1
    print("\n original L1 : ", list_obj )
    list_obj.append("cap")
    print("\n change in original list")
    print(L1)

    # with deep copy

    List_object = copy.deepcopy(L2)
    # Altering object of original list
    List_object.append("Iron man")

    print("\n Altered copy : ", List_object)
    print("\n Does not affect original list ")
    print("\n Original List : ", L2 )

     






    
