//recursividade
function fatorial(n) {
    if (n == 1) { // tipo o break
        return 1
    } else {
        return n * fatorial(n-1)
    }
}

console.log(fatorial(5))