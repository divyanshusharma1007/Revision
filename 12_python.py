l=["hello","world ","radha",1,3]
print(l)
print(type(l))
print(l[0]) 
# order maintain rahta hai
#indexing with 0 
for i in l:
    print(i)

# same as string slicing 
print("hello " in l)

# lsit methods 
l.append("mahak")
l.count("hello") #count 
l.sort() #sort
l.reverse() # reverse the list 
l.index(1) # return the firt occurance index 
l.copy() # list cant change the value . 
l.pop() # remove the last index value
l.extend([1,2,3]) #list open ho kar dusre me add ho jata hai 
