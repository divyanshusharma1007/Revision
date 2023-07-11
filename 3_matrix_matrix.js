// required functionalites of array
Array.prototype.countValue = function (value) {
  let count = 0;
  this.forEach((e) => {
    if (e === value) count++;
  });
  return count;
};

class Matrix {
  matrix = [];
  constructor(array) {
    this.matrix = array;
  }
  searchElementInMatrix(element) {
    let val = null;
    this.matrix.forEach((e, i) => {
      e.forEach((f, j) => {
        if (f === element) val = [i, j];
      });
    });
    return val;
  }
  printMatrix() {
    this.matrix.forEach((e) => {
      console.log(...e);
    });
  }
  medianOfRowWaiseSortedMatrix() {
    return this.matrix.flat().sort()[Math.floor(this.matrix.flat().length / 2)];
  }
  rowWithMaximumNumberOfones() {
    let maxRow = 0;
    this.matrix.forEach((e, i) => {
      maxRow = Math.max(e.countValue(1), maxRow);
    });
    console.log(maxRow);
  }
  sortTheMatrix() {
    let size = this.length - 1;
    let flatMatrix = this.matrix.flat().sort((a, b) => a - b);
    let newMatrix = [];
    // console.log(flatMatrix.slice(0, 4));
    let temparr = [];
    let tempVar = 0;
    flatMatrix.forEach((e, i) => {
      temparr.push(e);
      tempVar++;
      if (tempVar % 4 == 0) {
        newMatrix.push(temparr);
        temparr = [];
      }
    });
    console.log(newMatrix);
  }
  maximumHistogram(R, C, row) {
    let result = [];
    let max_area = 0;
    let area = 0;
    while (i < C) {
      if (result.length == 0 || row[result.length - 1] <= row[i]) {
        result.push(i++);
      } else {
        top_val = row[result[result.length - 1]];
        result.pop();
        area = top_val * i;
        if (result.length > 0) {
          area = top_val * (i - result[result.length - 1] - 1);
        }
      }
    }
    while (result.length > 0) {
      top_val = row[result[result.length - 1]];
      result.pop();
      area=top_val*i;
      if(result.length>0){
        area=top_val*(i-result[result.length-1]-1)
      }
      max_area=Math.max(area,max_area);
    }
    return max_area;
  }
  maximumSizeRactange() {
    let currentRow = this.matrix[0];
    let maxHistogram = maxHistogram(currentRow);
  }
}

const mat = new Matrix([
  [10, 20, 30, 40],
  [15, 25, 35, 45],
  [27, 29, 37, 48],
  [32, 33, 39, 50],
]);
mat.sortTheMatrix();
