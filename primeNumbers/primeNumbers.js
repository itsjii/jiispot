function findPrimes(x){
    let primes=[];
    for (let i=2; i <= x; i++){
        let isPrime=true;
        for (let j=2; j <=Math.sqrt(i); j++){
            if (i%j===0){
                isPrime=false;
                break;
            }
        }
        if (isPrime){
            primes.push(i);
        }
    }
    return primes;
}

let x=parseInt(prompt("Enter the value of x: "), 10);
let primeNumbers=findPrimes(x);
console.log("Prime numbers from 0 to "+x+";", primeNumbers);