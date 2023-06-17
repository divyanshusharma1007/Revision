# lambda expression is used to create the function without having any name 
add=lambda a,b:a+b
# used to create the inline functions 

# they are used to create the higer order function 

# map , filter and reduce advance list manipulation me use hota hai yee 

cube=lambda a:a**3;

print(list(map(cube,[1,2,3])))
# map object return the value for the eficent 

print(list(filter(lambda a: a>3,[1,8,7,3,3,90])))

# to use the reduce you have to require from the fucntools module
from functools import reduce

print(reduce(lambda a,b:a+b,[1,2,3,4]))

# python constant ko ek memory location par store krta hai 
# is operator memeory location par kam krta hai 
# == value par kam krta hai 