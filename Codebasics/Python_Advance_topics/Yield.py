"""
The yield statement suspends function’s execution and sends a value back to the caller,
but retains enough state to enable function to resume where it is left off. When resumed,
the function continues execution immediately after the last yield run.
This allows its code to produce a series of values over time, 
rather than computing them at once and sending them back like a list.
"""

def Simple_func():
    z = 1
    yield z
    z += 1


def fibonacci_numbers(limit):
    
    # initialize first two numbers
    a, b = 0, 1 
    while a < limit:
        yield a
        a, b = b, a + b
        

def fibonacci_with_start_end(start, end):
    """
    generate fibonacci sequence between given numbers
    
    start_number : int
    number to start from

    end_number : int
    number to end

    """
    a, b = start, start + 1 
    while a < end:
        yield a
        a, b = b, a + b



if __name__ == "__main__":

    for i in fibonacci_numbers(50):
        print(i)
    
    
    
    




