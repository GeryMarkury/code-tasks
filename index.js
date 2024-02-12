/* TRIBONACCI TASK */

function tribonacci(signature, n) {
    if (n === 0) {
        return [];
    }
    if (n < 0) {
        console.log("n should be a non-negative number");
        return;
    }

    let array = signature;

    for (let i = 3; i < n; i += 1) {
        array.push(signature[i - 1] + signature[i - 2] + signature[i - 3]);
    }

    return array.slice(0, n);
}

// input ([1,1,1], 10)
// output [1,1,1,3,5,9,17,31,57,105]
//
// input ([1,1,1], 1)
// output [1]
