// data structure -> the ingredient of the programm which are loaded into the memory or the data base are classed as the data structure 
//  the arrangement of the different data into the memeory or data base are called as the data structures 




// algorithum-> the sequence of steps required to find the solution of the program are called as the algorthum.
// example 
// algo for my life 
// 1. wake up 
// 2.eat food 
// write code 
// find errors 
// solve errors 
// dirink tea
// then write code 
// go to bed 
// sleep 







// data base ->the collection of realated data / facts in the storage for the fast retrival and updation 


// data warehouse -> management of the huge amount of data and the performaing the anylasis are callled as the data ware house . 


// big daa -> quite much large data set , on which we cant perform the operation using traditional methods 

// data structure and algorithum are free form any programming language . 



// how programm works 

// all varibales are which are statically allocated floowed there activation recode in the stack of memeory.

// heap -> Memory taken on rent by the user to perform the execuation on the program


// space complexity ->
// space taken by the program in the memeory are called as the space complexity

// time complexity 
// time take by the algorithum to perform its task . 



// asymptotic notation -> the notation which are used to compare the two program are called as the asmymptotic notations .

// there are three type of asmymptotic notation which are free from program 

// -> O()->used to show the wrost case of the algorithum 0<=fn<=C*gn

// ->Theta-> used to show the average complexity 0<=fn<=c*gn

// ->omega -> best case time coplexty )0<=gn<=gn


// time complexty can be easily said by the help of loops number of nesting of loops are called as power of loops 

// ->program 1
let arr = [1, 2, 3, 4];
arr.forEach(e => [
    arr.forEach(d => console.log(d))
])

// time complexity is big on**2

// program2
arr.forEach(e=>console.log(e))
arr.forEach(e=>console.log(e+2))

// time complexity is big O n