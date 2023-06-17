# object orieted programming 
# it is a approch in which we created object 
# we use the object orieted programming for getting the real world objects 
# usign the dry princilple 


# blue print of obejct is class
class myCalss:
    a=5
    b="radha"
    loc=None
    # dunder methods special method used to implement the value 
    ''' it is a constructor it automatically calls when the object of the class is created '''
    def __init__(self):
        self.loc="vrandavan"

    def printval(self):
        print(self.b)

# instance of the class is object 
value=myCalss()
print( value.a)
value.b="kishori ji"
value.printval()
# abstraction -> hiding the
# 
#  unnecessary information 


# decorator in a python are used to modify the functionality of the function avilabe in the class 


# decorator is a function which take the another fuction as a paramater and perfomed some actions on the function and reutnr the values 

# let us create our own decorator 
def greet(fx):
    def modifiedFunction():
        print('good evening')
        fx()
        print("thanks for using me")
    return modifiedFunction

@greet
def hello():
    print("hello world")

# @property # this decorator is used to convert the function into the value 
# it is used to create the getter function 

# @functtion_name.setter.setter  this deocratoer is used to set the value without muation the values 


# inheritance in python 

# write your own code 
class Emp():
    # it uses the nammangling means that it give functionality to not the overide the variables 
    # in this the values can be changed 
    ___PrivateVariable=1
    _ProtectedVariable=2
    publicVariable=3
    def __init__(self, id, name, Add):
        self.id = id
        self.name = name
        self.Add = Add
 
# Class freelancer inherits EMP
class Freelance(Emp):
    def __init__(self, id, name, Add, Emails):
        super().__init__(id, name, Add)
        self.Emails = Emails
 

# static mehtods are those methods which do not belog to any class or the object 
class StaticClass:
    @classmethod
    def clessMethod(cls):
        self.set="radha"

    @staticmethod
    def add(a,b):
        print(a+b)

# calling the static methods 
StaticClass.add(4,6)

# instance varibale is shared by the all instnaces of the class 
# used with the self



# class variables are used by the  class 
# used with the cls
# by default the value is class varible 
# if there is no instance varibel then class varible is treated 

# class methods 
# class mehthods are used to create the default consturtors 

# className.classMethod()
# to create the object use the cls