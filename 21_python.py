# in python there are built in file handling 
f=open("myFile.txt",'r')
# if you open fiel mode then w mode can create the file 
# 'r is default '
# 'r' read 
f.read() #read the content from teh file 
# 'w' write 
# 'a ' append mode 
f.close()

with open('my.txt') as f:
    f.read()
    # perform the same , here you no need to close the file 

f.readline() # used to read the onne line
f.readlines() # used to read the limited lines
f.read(5) # it take the parameter to read the file 
f.seek(5) # start reading from that characher  cursosr ko starting bytes par chodata hai
f.tell() # from where the reading start hogi 
f.truncate(5) # size set krna 


