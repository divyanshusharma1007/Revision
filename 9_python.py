# if else in python 
# if():
#     print("something ")
# elif ():
#     print("some thing else")
# else:
#     print("all else ")

# inliner if else 
print("5 is greater ") if 5>4 else print("4 is greater")
if 5>4:print("5 is greater ")
else:print("4 is greater")

# time module 
import time;
# getting the currrent time using the strftime function 
print(time.strftime("%Y-%m-%d %H:%M"))

lang=input('Enter your programming language')
match lang:
    case "javascript":
        print("you can become a web developer ")
    case "python ":
        print("you can become a data scientist ")
    case _ if not lang=='c++':
        print("hello")
    case _ : 
        print("default case")
    
