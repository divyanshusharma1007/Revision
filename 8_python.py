# a=input(" ");
# a=int(input("enter int value"));


# string
''' doc string / multiline comment / anynomous variale '''
" string "
'string '
a="radhe";
print(a[0]) # you cann make the indexing in the string 
print(a[::]) # first the starting second paramater is end and third paramater is skip 
print(a[-3:-1:])#dh
# string is imutable in python so when we use string methods then they return the new strings 
print(a.upper()) # convert into the upper case 
print(a.lower()) # convert into the lower case 
print(a.strip()) # remove the  unwanted charachters from the string . remove only the ends characher 
print(a.replace('radhe','shyama'))
print(a.split(" "))#split the string into the list 
print( a.capitalize()) # make the first letter capatilze 
print(len(a)) #print the length of string 
print(a.endswith('a',1,5))# return true of false 
print(a.startswith('s'))#return true of false #similar paramaters are here 
print(a.find('a')) # if exists then return the value else it return the -1 
print(a.index('r')) # return the index if not exist then gives a errro 
print("1".isalnum()) #return that the all values are number or not 
print("jaya".isalpha()) # checks that all charachers are alphabates 
print("can i make a call to you ".isprintable()) # return's bool that the value is printable of not 
print("   ".isspace()) # returns that the value has spaces or not 
print("I Love You".istitle()) # if all words after the space are capital then return the true else false 

print("will you be my sister ".swapcase())
print("i am studying in b.tech ".splitlines(5))
print("his name is radhe pyri ".title())






