# in a python operator can work on differnt on the differnt data type 
# you can't perform the operation on one int and one string data type so to do it we nee the type casing 


# type casting -> in other words we can say that the type casting is a process by which you can covert the one data type into the other . 

a=1;
b=2;
print(b+a); # it is string 
print(int("1")+2)
# types that can be type casted 
# str() ,ord()  ,hex(),tuple(),list(),dict() , set (),float 
# for conversion the string are valid 
# there are two types of type casting 
# implicit->by interpreter  and explict ->by developer 
print(ord('a')) #asci converter 
print(bin(3)) # convert into the binary 
print(int('111'))
print("{:o}".format(10)) #conveting the value into the octal 