# genrators are used to genrate the on the fly values 
# it store the information by which the value is going to be genrate 
# yield is used to genrate the value 
# when you use the itterator then next is run 
# use the values when it is required 
# memory optimization in genrator are well


# function caching in python  
# memoization technique are used 


import functools

@functools.lru_cache(maxsize=5)
def fx(n):
    return n

# it will not run the whole function just give the output if avialbe in cache 
# reduce the execualtion of the code


# regular expression and re module 

import re 
pattern="was"
# to define the pattern we use the meta charachets 
re.search(pattern,"i was student ")


import asyncio
# async io 
# async await :
# wait for the function 
asyncio.run(function())
asyncio.create_task()#task tab run hoga jab time mile ga
# simialar to java script async await 

# multi-threading in python 
import threading;
# tq.=threading.Thread(target=async function ,args)
# t.join();
# wait till the thread is not ended 
# used when teh task is the io bound 

#mulitprocessing is used to create the multiple processes 

import multiprocessing
# multiprocessing.
# here are thread pool execulater 
# or thread pool execuator 