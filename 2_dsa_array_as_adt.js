// there are two type of data types 
// premetive -> already avilable in the programing language 
// refrence -> created by the user or avilabe in language with the functionalities . the data type which have the advance functionalaites are called as the abstract data types  


// abstract data types -> the data types having the minimum requirements to perform the operation 


// let us create the array as the abstract data type 


Array.prototype.changeValue = function (index, value) {
    index >= this.lenght ? console.log('array out of bound') : this[index] = value;
}
Array.prototype.getValue = function (index) {
    return this[index];
}
Array.prototype.linearSearch = function (value) {
    for (let i = 0; i < this.length; i++) {
        if (this[i] == value) return i;
    }
}
// complete this function 
Array.prototype.binarySearchItterative = function (value) {
    let low = 0;
    let mid = null;
    let high = this.length - 1;
    while (low < high) {
        mid = Math.floor(low + high / 2)
        if (this[mid] === value) {
            return mid;
        } else if (this[mid] < value) {
            low = mid + 1;
        }
        else {
            high = mid - 1;
        }

    }
    return -1;
}

// this logic will not work 
Array.prototype.binarySearchRecursive = function (value, start = 0, end = this.length - 1) {
    if (start < end) {
        mid = Math.floor((start + end) / 2)
        if (this[mid] == value) return mid;
        else if (this[mid] < value) this.binarySearchRecursive(value, mid + 1, end)
        else this.binarySearchRecursive(value, start, mid - 1)
    }
    return -1


}
Array.prototype.deleteValue = function (value) {
    let indexOfValue = this.linearSearch(value);
    for (let i = indexOfValue; i < this.length - 1; i++) {
        this[i] = this[i + 1];
    }
    array.length = array.length - 1;
}
Array.prototype.set = function (index, value) {
    if (!this.length > index) { console.log(" index is greater than lenght "); return }
    for (let i = this.length; i > index; i--) {
        this[i] = this[i - 1];
    }
    this[index] = value;
}


// array.deleteValue(2);
// array.set(2, 5);
// console.log(array.binarySearchItterative(2))
// console.log(array.binarySearchRecursive(2))
// console.log(array);

// reverse the array
Array.prototype.reverseArray = function () {
    for (let i = this.length - 1; i >= 0; i--) {
        console.log(this[i])
    }
}

Array.prototype.swap = function (a, b) {
    let tempVal = this[b];
    this[b] = this[a];
    this[a] = tempVal;
}
Array.prototype.maxElement = function () {
    return Math.max(...this)
}
Array.prototype.minElement = function () {
    return Math.min(...this);
}

Array.prototype.kThMaxElement = function (k) {
    let val = [...this];
    return val.sort()[val.length - k];
}
Array.prototype.kThMinElement = function (k) {
    let val = [...this];
    return val.sort()[k - 1];
}
Array.prototype.moveNegativeElementsOneSide = function () {
    let startPointer = 0;
    let endPointer = this.length - 1;
    while (startPointer < endPointer) {
        while (this[startPointer] > 0) {
            startPointer++;
        }
        while (this[endPointer] < 0) {
            endPointer--;
        }
        if (startPointer >= endPointer) {
            break;
        }
        this.swap(startPointer, endPointer);

    }
    return this;
}

Array.prototype.UnionAndInterSection = function (array) {
    let set1 = new Set(array);
    let set2 = new Set(this);
    return { union: set1.union(set2), intersection: set1.intersection(set2) }
}

Array.prototype.rotate = function (times = 1, cycalicaly = true) {
    if (cycalicaly) {
        let time = 0;
        while (time < times) {
            time++;
            let val = this[this.length - 1]
            for (let i = this.length - 1; i > 0; i--) {
                arr[i] = arr[i - 1];
            }
            arr[0] = val;
        }
    } else {
        let time = 0;
        while (time < times) {
            time++;
            let val = this[0];
            for (let i = 0; i < this.length - 1; i++) {
                this[i] = this[i + 1];
            }
        }
        this[this.length - 1] = val
    }
    return this;
}

Array.prototype.largestContigousSumOfSubArray = function () {
    `solved with the kadan's algorithum `
    let currentSum = 0;
    let maxSum = 0
    this.forEach(e => {
        currentSum += e;
        maxSum = Math.max(currentSum, maxSum);
        if (currentSum <= 0) currentSum = 0;
    })
    console.log(maxSum)
}

Array.prototype.minimiseTheMaximumDifferenceBetweenHeights = function (k) {
    // sort the array
    this.sort((a, b) => a - b);
    // find the maximum difference 
    let ans = this[this.length - 1] - this[0]
    let small = this[0] - k;
    let large = this[this.length - 1]
    let min, max;
    this.forEach(e => {
        // smallest value and larges value by adding k 
        min = Math.min(small, e - k);
        // largest value by adding k 
        max = Math.max(large, e + k);
        // comparing the difference by the value 
        // if min<0 then continue not calculate the value 
        if (!(min < 0))
            ans = Math.min(ans, max - min)
    })
    return ans;
}

Array.prototype.minimumNumberOfJumpsToReachTheEnd = function () {
    // need to solve this question
    let jump = 0;
    let position = 0;
    let destination = 0;
    this.forEach((e, i) => {
        // comparing the destination and the current value 
        destination = Math.max(destination, this[i])
        if (position == i) {
            //   if position= current then  incret teh jump
            position = destination;
            jump++;
        }
    })
    console.log(jump);

}

Array.prototype.countValue = function (value) {
    let count = 0;
    this.forEach(e => {
        if (e === value) count++
    })
    return count;
}


Array.prototype.duplicateInArray = function () {
    let arr = new Set()

    this.forEach(e => {
        if (this.countValue(e) > 1)
            arr.add(e);
    })
    return [...arr];
}

Array.mergeSortedArray = (arr1, arr2) => {
    let newArr = []
    let i = 0;
    let j = 0;
    while (i < arr1.length & j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            newArr.push(arr1[i])
            i++;
        }
        else {
            newArr.push(arr2[j])
            j++;
        }
    }
    while (j < arr2.length) {
        newArr.push(arr2[j])
        j++
    }
    while (i < arr1.length) {

        newArr.push(arr1[i])
        i++;
    }

    return newArr;
}


Array.mergeSortedArrayWithoutUsingTheExtraSpace = function (arr1, arr2) {
    let i = 0;
    let j = 0;

    while (i < arr1.length & j < arr2.length) {
        if (arr1[i] <= arr2[j]) {

            i++;
        } else {
            let val = arr1[i];
            arr1[i] = arr2[j];
            arr2[j] = val;
            j++
        }
    }
    return [...arr1, ...arr2]
}




Array.prototype.kadaneAlgo = function (k) {
    // sort the array
    this.sort((a, b) => a - b);
    // find the maximum difference 
    let ans = this[this.length - 1] - this[0]
    let small = this[0] - k;
    let large = this[this.length - 1]
    let min, max;
    this.forEach(e => {
        // smallest value and larges value by adding k 
        min = Math.min(small, e - k);
        // largest value by adding k 
        max = Math.max(large, e + k);
        // comparing the difference by the value 
        // if min<0 then continue not calculate the value 
        if (!(min < 0))
            ans = Math.min(ans, max - min)
    })
    return ans;
}

Array.prototype.mergeIntervals = function () {
    let merged = [];
    this.sort((a, b) => a[0] - b[0]);

    let mergedInterval = this[0];

    for (let i = 1; i < this.length; i++) {
        let interval = this[i];

        if (interval[0] <= mergedInterval[1]) {
            mergedInterval[1] = Math.max(mergedInterval[1], interval[1]);
        } else {
            merged.push(mergedInterval);
            mergedInterval = interval;
        }
    }

    merged.push(mergedInterval);

    return merged;
}

Array.prototype.numberAppearsMoreThanK = function (k) {
    let set = new Set();
    this.forEach(e => {
        if (this.countValue(e) >= k) {
            set.add(e)
        }
    })
    console.log(set);
}

Array.prototype.valueGreaterThanGivenValue = function (value, reverse = false) {
    console.log(this)
    if (reverse) {
        for (let i = this.length; i >= 0; i--) {
            if (this[i] > value) {
                console.log(i);
                return i;
            }
        }
    } else {
        for (let i = 0; i < this.length; i++) {
            if (this[i] > value) {
                return i;
            }
        }
    }


}

Array.prototype.nextPermutation = function () {
    let maxValue = Math.max(...this);
    let leftIndexToMaxValue = (this.indexOf(maxValue) - 1)// finding the value greater than max value 
    let arrBack = this.slice(leftIndexToMaxValue + 1) //seprating the array into differnt array 
    let arrFront = this.slice(0, leftIndexToMaxValue + 1)
    let rightMaxValue = arrBack.valueGreaterThanGivenValue(this[leftIndexToMaxValue], true); //find the greater value from right to left 
    let frontPosition = arrFront[leftIndexToMaxValue];// find the front position 
    arrFront[leftIndexToMaxValue] = arrBack[rightMaxValue]; // find the back positon and then reverse the array 
    arrBack[rightMaxValue] = frontPosition;
    return [...arrFront, ...arrBack.reverse()]
}

Array.prototype.countInversionBruteForceApproch = function () {
    let inversion = 0;
    for (let i = 0; i < this.length; i++) {
        for (let j = j; j < this.length; j++) {
            if (this[i] < this[j]) {
                inversion++;
            }
        }
    }
    return inversion;
}



Array.prototype.commonElemntInThreeSortedArray = function (arr1, arr2, arr2) {
    return Array(Set(arr1).intersection(set(arr2).intersection(set(arr3))))
}



// nahi bna kl fir se try krna hai
// Array.prototype.countInversion = function () {

//     let inversion=0;

//     const divide = function (left, right) {
//         if (left < right) {
//             let mid = Math.floor((left + right) / 2)
//             divide(mid + 1, right);
//             divide(left, mid)
//         }
//     }
// }
// array.numberAppearsMoreThanK(2)
// array.nextPermutation()