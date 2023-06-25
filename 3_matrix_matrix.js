class Matrix {
    matrix = []
    constructor(array) {
        this.matrix = array;
    }
    searchElementInMatrix(element) {
        let val=null
        this.matrix.forEach((e, i)=>{
            e.forEach((f,j)=>{
                if(f===element)val=[i,j]
            })
        })
        return val;
    }
}        


const mat=new Matrix([[1,2,3],[4,5,6],[7,8,9]])
console.log(mat.searchElementInMatrix(3))