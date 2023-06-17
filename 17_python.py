# Error handling in python 


# using the raise keyword you can handle your own errors 
try:
    print("helo")
    raise ValueError("Value between the values ")
except ValueError:
    print("there are value errro ")
except ZeroDivisionError:
    print("zero division errors")
except  Exception as e:
    print("error occured ")
finally:
    print("code always run hota hai ")

# you can create your own custom errors 
class MyError(Exception):
    def __init__(self,msg):
        self.message=msg;

MyError("nikal ")
