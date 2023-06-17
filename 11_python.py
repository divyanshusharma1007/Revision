# function are used to break the code into the segments by which the maintablility of the code 
# it is used to seprate the code 

def mean(a,b):
    print((a*b)/a+b)


def meanOfArray(arr):
    print(sum(arr)/len(arr))


def minFromArray(arr):
    return min(arr)

def maxFromArray(arr):
    return max(arr)


def medianOfArray(arr):
    return arr[len(arr)//2]

def intersectionOfArray(arr,arr2):
    print(set(arr).intersection(set(arr2)))

# it will take the default argument 
def avg(a=2,b=5):return (a+b)//2

def val(*val):
    print(val)


'''fucntion calling it self by it self are called as recursion '''
def factorial(n):
    if n==0 or n==1:
        return 1
    else :
        return n*factorial(n-1)
print(factorial(5))

