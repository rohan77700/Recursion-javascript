// Iterative Fibonacci

function fibs(n) {
    const result = [0, 1];
    
    if (n <= 1) return [0].slice(0, n);

    for (let i = 2; i < n; i++) {
        result.push(result[i - 1] + result[i - 2]);
    }

    return result;
}

console.log('Iterative Fibonacci :', fibs(8));




// Recursive Fibonacci

function fibsRec(n) {
    console.log("This was printed recursively");

    if (n <= 1) return [0].slice(0, n);
    if (n === 2) return [0, 1];

    const seq = fibsRec(n - 1);
    seq.push(seq[seq.length - 1] + seq[seq.length - 2]);
    return seq;
}

console.log("Recursive Fibonacci :", fibsRec(8));