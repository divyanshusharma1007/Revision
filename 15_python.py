# sets are unordered collection of differnet object in python 
s={1,2,3,4,5,1}

# to create the empyt set we use 
name=set()
name.add("hello")
name.intersection({"hello"})
name.union(s)
name.update({'megha',"pinky","jaya","prayga"})
name.isdisjoint({"mahak","sonam","purva"})
name.issuperset(name)
name.issubset(name)
name.add("monika") # new values are added 
name.update(["moika"]) #shows the error 
name.pop() # pop the element 
