# time moudle is the built in module which is used to perfom the time related functions 
# import time as t

# time.time() # return the floating point number by whcih you can calculate the value of time required by the block of code to execuate 
# # read the documentation onece 


# time.sleep() # is used to stop the execuation of the program til the value 

# commmand line unltitliy using the python 

# command line moule are used by to perofmr the operation with the  value 

# Python program to demonstrate
# command line arguments
 
 
import sys
 
# total arguments
n = len(sys.argv)

# taking argumnets while creating the program 



# command line ultility using the args parse 

import argparse
# Add command line arguments
parser.add_argument("url", help="Url of the file to download")
# parser.add_argument("output", help="by which name do you want to save your file")
parser.add_argument("-o", "--output", type=str, help="Name of the file", default=None)

# Parse the arguments
args = parser.parse_args()

# Use the arguments in your code
print(args.url)